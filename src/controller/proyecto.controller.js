import pg from 'pg';
import { config } from "dotenv";
config();

const { Pool } = pg;

export const pool = new Pool({
  connectionString: `postgres://default:VM0srUId7RaO@ep-broad-mountain-48644119-pooler.us-east-1.postgres.vercel-storage.com:5432/verceldb?sslmode=require`,
});

export const getAll = async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM proyectos');
      res.json(result);
    } catch (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  


export const getOne = async (req, res) => {
    const { id } = req.params;

    res.json({Saludo: "Hola", id: id});
}

export const edit = async (req, res) => {
    const { id } = req.params;


}

export const create = async (req, res) => {

}