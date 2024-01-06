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
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: `Internal Server Error: ${error.message}` });
  }
};

export const getOne = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM proyectos WHERE id = $1', [id]);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: `Internal Server Error: ${error.message}` });
  }
}

export const edit = async (req, res) => {
  const { id } = req.params;
  const { name, description, price } = req.body;

  try {
    const { rowCount } = await pool.query(
      'UPDATE proyectos SET name = $1, description = $2, price = $3 WHERE id = $4',
      [name, description, price, id]
    );

    if (rowCount > 0) {
      res.status(200).json({ msg: "Actualizado correctamente" });
    } else {
      res.status(404).json({ msg: "No encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: `Internal Server Error: ${error.message}` });
  }
};

export const create = async (req, res) => {
  const { name, description, price } = req.body;

  try {
    const existingProject = await pool.query(
      'SELECT * FROM proyectos WHERE name = $1',
      [name]
    );

    if (existingProject.rows.length > 0) {
      res.status(400).json({ msg: "Ya existe un proyecto con ese nombre" });
    } else {
      const insertResult = await pool.query(
        'INSERT INTO proyectos (name, description, price) VALUES ($1, $2, $3)',
        [name, description, price]
      );

      res.status(201).json({ msg: "Proyecto creado correctamente" });
    }
  } catch (error) {
    res.status(500).json({ error: `Internal Server Error: ${error.message}` });
  }
};

export const del = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query('DELETE FROM proyectos WHERE id = $1', [id]);

    if (result.rowCount > 0) {
      res.status(200).json({ msg: 'Eliminado correctamente' });
    } else {
      res.status(404).json({ msg: 'No encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: `Internal Server Error: ${error.message}` });
  }
};
