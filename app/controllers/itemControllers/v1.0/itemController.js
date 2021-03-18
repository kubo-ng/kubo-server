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

const delete_item_id = async (req, res) => {
  const item_id = req.query.id;
  let is_item_deleted;

  try {
    const item =  await Item.findByIdAndDelete(item_id);
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
  get_item_by_id,
  delete_item_id
};
