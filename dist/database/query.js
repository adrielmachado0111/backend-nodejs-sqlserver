"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.query = void 0;

/* aqui tenemos todas las consultas a la base de datos */
var query = {
  getAllProducts: "select * from Products",
  addNewProduct: "insert into Products (name, description, quantity) values (@name, @description, @quantity)",
  getProductById: "select * from Products where Id = @Id",
  deleteProduct: 'delete from Products where Id = @Id',
  getTotalProducts: "select count(*) from Products",
  updateProductById: "update Products set Name = @name, description = @description, quantity = @quantity where Id = @Id"
};
exports.query = query;