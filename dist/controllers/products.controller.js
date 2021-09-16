"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProductById = exports.deleteProduct = exports.getProductsById = exports.getTotalProducts = exports.createNewProduct = exports.getProducts = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _database = require("../database");

/* importamos las queries-> import query from '../database/query';
 */

/* ----------------- Listar Productos ------------------ */
var getProducts = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _database.getConnection)();

          case 3:
            pool = _context.sent;
            _context.next = 6;
            return pool.request().query(_database.query.getAllProducts);

          case 6:
            result = _context.sent;
            // viene desde query
            console.log(result);
            res.json(result.recordset);
            _context.next = 15;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            res.status(500);
            res.send(_context.t0.message);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11]]);
  }));

  return function getProducts(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
/* ----------------- Crear Producto ------------------ */


exports.getProducts = getProducts;

var createNewProduct = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, name, description, quantity, pool;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, description = _req$body.description;
            quantity = req.body.quantity;
            /* Verificamos y validamos los campos */

            if (!(name == null || description == null)) {
              _context2.next = 4;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              msg: "bad request. porfavor llena todos los campos"
            }));

          case 4:
            if (quantity == null) {
              quantity = 0;
            }
            /* probamos la conexion en caso de falla */


            _context2.prev = 5;
            _context2.next = 8;
            return (0, _database.getConnection)();

          case 8:
            pool = _context2.sent;
            _context2.next = 11;
            return pool.request().input("name", _database.sql.VarChar, name).input("description", _database.sql.Text, description).input("quantity", _database.sql.Int, quantity).query(_database.query.addNewProduct);

          case 11:
            // viene desde query
            res.json({
              name: name,
              description: description,
              quantity: quantity
            });
            _context2.next = 18;
            break;

          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](5);
            res.status(500);
            res.send(_context2.t0.message);

          case 18:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[5, 14]]);
  }));

  return function createNewProduct(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
/* ----------------- Contar Productos ------------------ */


exports.createNewProduct = createNewProduct;

var getTotalProducts = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return (0, _database.getConnection)();

          case 3:
            pool = _context3.sent;
            _context3.next = 6;
            return pool.request().query(_database.query.getTotalProducts);

          case 6:
            result = _context3.sent;
            // viene desde query
            console.log(result);
            res.json(result.recordset[0][""]);
            _context3.next = 15;
            break;

          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](0);
            res.status(500);
            res.send(_context3.t0.message);

          case 15:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 11]]);
  }));

  return function getTotalProducts(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
/* ----------------- Obtener Producto Por ID ------------------ */


exports.getTotalProducts = getTotalProducts;

var getProductsById = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            /* obtenemos los parametros de la url */
            id = req.params.id;
            _context4.next = 3;
            return (0, _database.getConnection)();

          case 3:
            pool = _context4.sent;
            _context4.next = 6;
            return pool.request().input('Id', _database.sql.Int, id).query(_database.query.getProductById);

          case 6:
            result = _context4.sent;
            console.log(result);
            /* response (respuesta) del resultado convertido a json */
            //res.json(result.recordset[0]);

            res.send(result.recordset[0]);

          case 9:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function getProductsById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
/* ----------------- Eliminar Producto ------------------ */


exports.getProductsById = getProductsById;

var deleteProduct = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            /* obtenemos los parametros de la url */
            id = req.params.id;
            _context5.next = 3;
            return (0, _database.getConnection)();

          case 3:
            pool = _context5.sent;
            _context5.next = 6;
            return pool.request().input('Id', _database.sql.Int, id).query(_database.query.deleteProduct);

          case 6:
            result = _context5.sent;
            console.log(result);
            /* response (respuesta) del resultado convertido a json */
            //res.json(result.recordset[0]);

            res.sendStatus(204);

          case 9:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteProduct(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
/* --------------- Actializar producto ------------ */


exports.deleteProduct = deleteProduct;

var updateProductById = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var _req$body2, name, description, quantity, id, pool;

    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            /* extraemos del body de la peticion */
            _req$body2 = req.body, name = _req$body2.name, description = _req$body2.description, quantity = _req$body2.quantity;
            id = req.params.id;
            /* Verificamos y validamos los campos */

            if (!(name == null || description == null || quantity == null)) {
              _context6.next = 4;
              break;
            }

            return _context6.abrupt("return", res.status(400).json({
              msg: "bad request. porfavor llena todos los campos"
            }));

          case 4:
            _context6.next = 6;
            return (0, _database.getConnection)();

          case 6:
            pool = _context6.sent;
            _context6.next = 9;
            return pool.request().input('name', _database.sql.VarChar, name).input("description", _database.sql.Text, description).input('quantity', _database.sql.Int, quantity).input('id', _database.sql.Int, id).query(_database.query.updateProductById);

          case 9:
            /*respondemos un json */
            res.json({
              name: name,
              description: description,
              quantity: quantity
            });

          case 10:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function updateProductById(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.updateProductById = updateProductById;