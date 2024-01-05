import express from "express";
import morgan from "morgan";
import cors from "cors";
import { config } from "dotenv";

config();

import { Proyecto } from './src/routes/proyecto.route.js';

const app = express();
const port = process.env.PORT;

app.use(cors());
app.set("json spaces", 2);

// Mounting Proyecto route at /proyecto
app.use("/api", Proyecto);
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Starting the server
app.listen(port, () => {
  console.log(`Servidor abierto en el puerto: ${port}`);
});
