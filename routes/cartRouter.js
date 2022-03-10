// require("dotenv").config;

// const express = require("express");
// const Product = require("../models/products");
// const auth = require("../middleware/auth");
// const { getProduct } = require("../middleware/finders");

// const router = express.Router();

// // CART FUNCTIONALITY

// // Get cart
// router.get('/:id/cart', [auth, getUser], (req, res, next)=>{
//     try {
//         res.json(req.user.cart);
//         } catch (error) {
//         res.status(500).send({ message: error.message });
//         }
// })

// // ADD PRODUCT TO USER CART
// router.post("/:id/cart",[auth, getProduct],async (req, res, next) => {
//   let item$ = this.getItem(cartId,product.key);
//       const user = await User.findById(req.user._id);
  
//       let product_id = res.product._id;
//       let title = res.product.title;
//       let category = res.product.category;
//       let img = res.product.img;
//       let price = res.product.price;
//       let quantity = req.body.quantity;
//       let created_by = req.user._id;
  
//       try {
//         user.cart.push({
//           product_id,
//           title,
//           category,
//           price,
//           img,
//           quantity,
//           created_by,
//         });
//         const updatedUser = await user.save();
//         res.status(201).json(updatedUser);
//       } catch (error) {
//         res.status(500).json({ message: error.message });
//       }
//     }
// );
  
//   // UPDATE PRODUCT IN USER CART
//   router.put(
//     "/:id/cart",
//     [auth, getProduct],
//     async (req, res, next) => {
//       const user = await User.findById(req.user._id);
//       const inCart = user.cart.some((prod) => prod.product_id == req.params.id);
//       console.log(inCart);
  
//       if (inCart) {
//         try {
//           const product = user.cart.find(
//             (prod) => prod.product_id == req.params.id
//           );
//           product.quantity = req.body.quantity;
//           user.cart.quantity = product.quantity;
//           user.markModified("cart");
//           const updatedUser = await user.save();
//           console.log(updatedUser);
//           res.status(201).json(updatedUser.cart);
//         } catch (error) {
//           res.status(500).json(console.log(error));
//         }
//       }
//     }
//   );
  



// // Delete from Cart
// router.delete('/:id/cart', [auth, getUser], async (req, res, next)=>{
//     try {
//         await res.user.cart.remove()
//         res.json({ message: "Removed product" });
//         } catch (error) {
//         res.status(500).json({ message: error.message });
//         }
// })