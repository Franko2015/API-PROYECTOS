import express from "express";
import morgan from "morgan";
import cors from "cors";
import { config } from "dotenv";
const app = express();

config();

const port = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

import { Proyecto } from './src/routes/proyecto.route.js';

app.use(cors());
app.set("json spaces", 2);

// Mounting Proyecto route at /proyecto
app.use("/api", Proyecto);

// Starting the server
app.listen(port, () => {
  console.log(`Servidor abierto en el puerto: ${port}`);
});