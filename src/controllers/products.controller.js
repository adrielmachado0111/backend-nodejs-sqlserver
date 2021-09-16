import { getConnection, sql, query } from "../database";

/* importamos las queries-> import query from '../database/query';
 */

/* ----------------- Listar Productos ------------------ */
export const getProducts = async (req, res) => {
  try {
    /* llamamos a la conexion y retorna un cliente para conectarnos (pool) y consultas */
    const pool = await getConnection();
    /* solicitamos y pedimos la consulta */
    const result = await pool.request().query(query.getAllProducts);// viene desde query
    console.log(result);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

/* ----------------- Crear Producto ------------------ */
export const createNewProduct = async (req, res) => {
  const { name, description } = req.body;
  let { quantity } = req.body;
  /* Verificamos y validamos los campos */
  if (name == null || description == null) {//si hay error
    return res
      .status(400)
      .json({ msg: "bad request. porfavor llena todos los campos" }); // responde de manera erronea. server 400
  }
  if (quantity == null) {
    quantity = 0;
  }
  /* probamos la conexion en caso de falla */
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("name", sql.VarChar, name)
      .input("description", sql.Text, description)
      .input("quantity", sql.Int, quantity)
      .query(query.addNewProduct);// viene desde query
    res.json({ name, description, quantity });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

/* ----------------- Contar Productos ------------------ */
export const getTotalProducts = async (req, res) => {
  try {
    /* llamamos a la conexion y retorna un cliente para conectarnos (pool) y consultas */
    const pool = await getConnection();
    /* solicitamos y pedimos la consulta */
    const result = await pool
        .request()
        .query(query.getTotalProducts);// viene desde query
    console.log(result);
    res.json(result.recordset[0][""]);

  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

/* ----------------- Obtener Producto Por ID ------------------ */
export const getProductsById = async (req, res) => {
  /* obtenemos los parametros de la url */
  const {id} = req.params;

  const pool = await getConnection();
  const result = await pool.request()
    .input('Id', sql.Int, id)
    .query(query.getProductById)
  console.log(result);
  /* response (respuesta) del resultado convertido a json */
  //res.json(result.recordset[0]);
  res.send(result.recordset[0]);
};
/* ----------------- Eliminar Producto ------------------ */
export const deleteProduct = async (req, res) => {
  /* obtenemos los parametros de la url */
  const {id} = req.params;

  const pool = await getConnection();
  const result = await pool.request()
    .input('Id', sql.Int, id)
    .query(query.deleteProduct)
  console.log(result);
  /* response (respuesta) del resultado convertido a json */
  //res.json(result.recordset[0]);
  res.sendStatus(204);
};

/* --------------- Actializar producto ------------ */
export const updateProductById = async (req, res) => {
  
  /* extraemos del body de la peticion */
  const {name, description, quantity} = req.body; 
  
  const {id} = req.params;
  
  /* Verificamos y validamos los campos */
   if (name == null || description == null || quantity == null) {//si hay error
    return res
      .status(400)
      .json({ msg: "bad request. porfavor llena todos los campos" }); // responde de manera erronea. server 400
  }
  const pool = await getConnection();
  await pool.request()
      .input('name', sql.VarChar, name)
      .input("description", sql.Text, description)
      .input('quantity', sql.Int, quantity)
      .input('id', sql.Int, id)
      .query(query.updateProductById);
  /*respondemos un json */
  res.json({name, description, quantity})
}