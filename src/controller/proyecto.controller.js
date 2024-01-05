import { pool } from "../database.js";

export const getAll = async (req, res) => {
    try {
        const [resultado] = await pool.query(`SELECT * FROM proyectos`);
        res.json(resultado);
      } catch (error) {
        res.json(error);
      }
}

export const getOne = async (req, res) => {
    const { id } = req.params;

    res.json({Saludo: "Hola", id: id});
}

export const edit = async (req, res) => {
    const { id } = req.params;


}

export const create = async (req, res) => {

}