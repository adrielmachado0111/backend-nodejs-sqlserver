import express from "express";
import config from "./config";

import productsRoutes from './routes/products.routes';
/* declaramos el objeto app donde se ejecuta la aplicacion */
const app = express();


/* settings-> configuramos el puerto */
app.set('port', config.port);

/* middlewares */
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

/* usamos */
app.use(productsRoutes)

/* lo exportamos */
export default app