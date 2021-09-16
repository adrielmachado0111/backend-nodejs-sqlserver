/* importamos Router para crear URL's */
import { Router } from 'express';

/* imporamos la funcion (controlador) asignada a esta ruta */
import { createNewProduct, 
        deleteProduct, 
        getProducts, 
        getProductsById, 
        getTotalProducts,
        updateProductById} 
        from '../controllers/products.controller';

const router = Router();

/* 1. ruta para listar productos */
router.get("/products", getProducts)

/* 2. ruta para agregar productos*/
router.post("/products", createNewProduct)

/* 3. ruta para contar productos*/
router.get("/products/count", getTotalProducts)

/* 4. ruta para obtener un producto por id */
router.get("/products/:id", getProductsById)

/* 5. ruta para eliminar productos */
router.delete("/products/:id", deleteProduct)

/* 6. ruta para actualizar productos */
router.put("/products/:id", updateProductById)



/* lo que se exporta se puede renombrar en app.js */
export default router;