const express=require("express");
const authenticate = require("../middleware/authenticate.js");
const router=express.Router();
const cartController=require("../controllers/cart.controller.js")

// GET: /api/cart
router.get("/", authenticate, cartController.findUserCart);

// PUT: /api/cart/add
router.put("/add", authenticate, cartController.addItemToCart);

// DELETE: /api/cart/clear
router.delete("/clear", authenticate, cartController.clearUserCart);


module.exports=router;