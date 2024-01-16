const express = require('express');
const router = express.Router();
const categoryController = require("../controllers/CategoryController");





router.get('/getcategories',categoryController.getCategories );
router.post('/addcategories',categoryController.addCategory );
router.put('/updatecategory/:id',categoryController.updateCategory );
router.delete('/deletecategories/:id',categoryController.deleteCategory );





module.exports = router;