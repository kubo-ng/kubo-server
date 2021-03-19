const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const user_schema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      required: true,
      validate(value) {
        const validateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!validateEmail.test(value)) throw new Error("Invalid email used");
      },
    },
    password: {
      type: String,
      required: true,
    },
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    toObject: {
      virtuals: true,
    },
    toJSON: {
      virtuals: true,
    },
  }
);

// add virtual field to link users to properties and items they post
user_schema.virtual("items", {
  ref: "Item",
  localField: "_id",
  foreignField: "owner",
});

user_schema.virtual("properties", {
  ref: "Property",
  localField: "_id",
  foreignField: "owner",
});

//generate jwt token when called
user_schema.methods.generateToken = async function () {
  const token = await jwt.sign({ id: this._id }, "supersecretkey");
  this.tokens.push({ token });
  await this.save();
  return token;
};

// edit the user data stored in the database before returning to the client
user_schema.methods.toJSON = function () {
  const user_object = this.toObject();
  delete user_object.__v;
  delete user_object.tokens;
  delete user_object.password;
  return user_object;
};

//enable hashing of password before user details is saved and while being updated
user_schema.pre("save", async function (exit) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 8);
  }
  exit();
});

const User = mongoose.model("User", user_schema);

module.exports = User;
