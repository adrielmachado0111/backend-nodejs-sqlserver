"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = require("dotenv");

/* modulo de variables de entorno */

/* lee las variables de entorno que estan definidas en el computador */
(0, _dotenv.config)();
var _default = {
  /* si existe esa variable de entorno usela, si no, ponga el port = 3000 */
  port: process.env.PORT || 3000
};
exports["default"] = _default;