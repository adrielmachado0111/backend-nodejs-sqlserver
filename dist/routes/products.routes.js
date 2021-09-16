"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _products = require("../controllers/products.controller");

/* importamos Router para crear URL's */

/* imporamos la funcion (controlador) asignada a esta ruta */
var router = (0, _express.Router)();
/* 1. ruta para listar productos */

router.get("/products", _products.getProducts);
/* 2. ruta para agregar productos*/

router.post("/products", _products.createNewProduct);
/* 3. ruta para contar productos*/

router.get("/products/count", _products.getTotalProducts);
/* 4. ruta para obtener un producto por id */

router.get("/products/:id", _products.getProductsById);
/* 5. ruta para eliminar productos */

router["delete"]("/products/:id", _products.deleteProduct);
/* 6. ruta para actualizar productos */

router.put("/products/:id", _products.updateProductById);
/* lo que se exporta se puede renombrar en app.js */

var _default = router;
exports["default"] = _default;