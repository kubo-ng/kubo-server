const Item = require("../models/item.js")

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
}

module.exports = {
    create_item
}
