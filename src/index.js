import app from "./app";

/* el servidor escucha en el puerto ->  */
app.listen(app.get("port"))

console.log("server on port", app.get("port"));