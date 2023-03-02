const Item = require('../models/itemModel');

exports.getAllItems = async (req, res, error) => {
  try {
    const items = await Item.find();
    res.status(200).json({
      status: 'success',
      results: items.length,
      data: {
        items,
      },
    });
  } catch (err) {
    console.log(err);
  }
};
