import express from "express";
import { getProducts, createProduct , updateProduct, deleteProduct} from "../controller/product.controller.js";
const router = express.Router();



router.get("/", getProducts)
router.post("/",createProduct);
// router.patch() // if you update some fields 
// router.put() // if you update all fields
router.put("/:id",updateProduct);
router.delete("/:id", deleteProduct);

export default router;