import exp from 'express'
import {
    createProduct,
    deleteProduct,
    getProducts,
    updateProduct
} from '../controllers/productController.js'

export const productApp=exp.Router()

productApp.post('/products', createProduct)
productApp.get('/products', getProducts)
productApp.put('/products', updateProduct)
productApp.delete('/products/:id', deleteProduct)
