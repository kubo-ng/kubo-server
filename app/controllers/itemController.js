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

const get_item_by_id = async (req, res) => {
    const item_id = req.query.id;
  
    try {
      const item = await Item.findById(item_id);
      if (!item) throw new Error("Could not find an item with the id provided.");
      res.send({ item });
    } catch (e) {
      res.send({ item: null, error: e.message });
    }
  };

module.exports = {
    create_item,
    get_item_by_id
}
