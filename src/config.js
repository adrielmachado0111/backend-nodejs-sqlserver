/* modulo de variables de entorno */
import { config } from "dotenv";
/* lee las variables de entorno que estan definidas en el computador */
config();

export default{
    /* si existe esa variable de entorno usela, si no, ponga el port = 3000 */
    port: process.env.PORT  || 3000,
    dbUser: process.env.DB_USER || "",
    dbPassword: process.env.DB_PASSWORD || "",
    dbServer: process.env.DB_SERVER || "",
    dbDatabase: process.env.DB_DATABASE || "",
}