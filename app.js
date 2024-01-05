import express from "express";
import cors from "cors";
import { Proyecto } from './src/routes/proyecto.route.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.set("json spaces", 2);

// Mounting Proyecto route at /proyecto
app.use("/api", Proyecto);

app.get('/', (req, res) => {
  res.send("Hola");
});

// Starting the server
app.listen(port, () => {
  console.log(`Servidor abierto en el puerto: ${port}`);
});
