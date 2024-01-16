const CategoryModel = require("../models/CategoryModel");


module.exports.getCategories = async (req, res) => {
  try {
    const categories = await CategoryModel.find();
    res.json(categories);
  } catch (error) {
    res.json({ error });
  }
};

module.exports.addCategory = (req, res) => {
  // console.log(req.body);
  const { name, description, status } = req.body;

  CategoryModel.create({ name, description, status }) 
    .then((data) => {
      console.log("Saved Successfully...");
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong!" });
    });
};

module.exports.updateCategory = (req, res) => {
  // console.log(req.params);
  // console.log(req.body);
  const { id } = req.params;
  const { name, description, status } = req.body;


  CategoryModel.findByIdAndUpdate(id, { name, description, status })
    .then(() => {
      res.send("Updated Successfully....");
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong!" });
    });
};

module.exports.deleteCategory = (req, res) => {
  const { id } = req.params;

  CategoryModel.findByIdAndDelete(id)
    .then(() => {
      res.send("Deleted Successfully....");
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong!" });
    });
};
