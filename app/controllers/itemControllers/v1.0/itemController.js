const Item = require("../../../models/item.js");

const create_item = async (req, res) => {
  const item_info = req.body.item_info;
  item_info.owner = req.body.user._id;

  try {
    const item = new Item(item_info);
    await item.save();
    res.send({ itemCreated: true, id: item._id });
  } catch (e) {
    res.send({
      itemCreated: false,
      error: e.message,
    });
  }
};

const get_item_by_id_or_name = async (req, res) => {
  const item = req.query.item;

  try {
    const item_by_name = await Item.find({name: item})
    if (item_by_name.length === 0){
      const item_by_id = await Item.findById(item);
      if (!item_by_id) throw new Error("Could not find an item with the name or id provided.");
      return res.send({ item: item_by_id });
    }
    res.send(item_by_name );
  } catch (e) {
    res.send({ item: null, error: e.message });
  }
};

const get_user_item_list = async (req, res) => {
  const user = req.body.user;
  try {
    const limit = Number.parseInt(req.query.limit);
    const page = Number.parseInt(req.query.page);

    if (limit > 0 && page > 0) {
      const startFrom = (page - 1) * limit;
      await user.populate("items").execPopulate();
      res.send(user.items.slice(startFrom, limit + startFrom));
    } else throw new Error("Invalid value for either limit or page passed.");
  } catch (e) {
    res.send({ error: e.message });
  }
};

const get_item_list = async (req, res) => {
  try {
    const limit = Number.parseInt(req.query.limit);
    const page = Number.parseInt(req.query.page);

    if (limit > 0 && page > 0) {
      const startFrom = (page - 1) * limit;
      const items = await Item.find().limit(limit).skip(startFrom);
      res.send(items);
    } else throw new Error("Invalid value for either limit or page passed.");
  } catch (e) {
    res.send({ error: e.message });
  }
};

const delete_item_id = async (req, res) => {
  const item_id = req.query.id;
  let is_item_deleted;

  try {
    const item = await Item.findByIdAndDelete(item_id);
    if (!item) throw new Error("Could not delete item with id provided.");

    is_item_deleted = true;
    res.send({ is_item_deleted });
  } catch (e) {
    is_item_deleted = false;
    res.send({
      is_item_deleted,
      error: e.message,
    });
  }
};

module.exports = {
  create_item,
  get_item_by_id_or_name,
  get_user_item_list,
  get_item_list,
  delete_item_id,
};
