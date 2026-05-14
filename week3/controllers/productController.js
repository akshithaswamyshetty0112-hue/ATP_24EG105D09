import { ProductModel } from "../models/productModel.js";

export async function createProduct(req, res) {
    try {
        const newProduct = req.body;
        await ProductModel.create(newProduct);
        res.status(201).json({ message: "product created" });
    } catch (err) {
        res.status(400).json({ message: "product not created", error: err.message });
    }
}

export async function getProducts(req, res) {
    try {
        const products = await ProductModel.find();
        res.json({ message: "all products", payload: products });
    } catch (err) {
        res.status(500).json({ message: "products not found", error: err.message });
    }
}

export async function updateProduct(req, res) {
    try {
        const modifiedProduct = req.body;
        const updatedProduct = await ProductModel.findOneAndUpdate(
            { productId: modifiedProduct.productId },
            modifiedProduct,
            { new: true, runValidators: true }
        );

        if (updatedProduct === null) {
            return res.status(404).json({ message: "product not found" });
        }

        res.json({ message: "product updated", payload: updatedProduct });
    } catch (err) {
        res.status(400).json({ message: "product not updated", error: err.message });
    }
}

export async function deleteProduct(req, res) {
    try {
        const idOfUrl = req.params.id;
        const deletedProduct = await ProductModel.findOneAndDelete({ productId: idOfUrl });

        if (deletedProduct === null) {
            return res.status(404).json({ message: "product not found to delete" });
        }

        res.json({ message: "product deleted", payload: deletedProduct });
    } catch (err) {
        res.status(500).json({ message: "product not deleted", error: err.message });
    }
}
