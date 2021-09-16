/* importamos la lib de conxion con sqlServer */
import sql from "mssql";
import config from '../config';
/* config de conexion a la base de datos */
const dbSettings = {
    user: config.dbUser,
    password: config.dbPassword, //"machado123",
    server: config.dbServer,//"localhost",
    database: config.dbDatabase,//"webstore",
    options: {
        encrypt: true,//para azure
        trustServerCertificate: true,//cambia a true para desarrollo local
    },
};

export async function getConnection(){
    try{
        const pool = await sql.connect(dbSettings);
        return pool;
    }catch (error){
        console.log(error);
    }
    /* const result = await pool.request().query('SELECT 1');
    console.log(result); */
}

export {sql};