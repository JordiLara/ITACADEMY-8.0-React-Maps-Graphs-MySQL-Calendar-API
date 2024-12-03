import { Request, Response } from 'express';
import pool from '../config/database';
import { Route } from '../../types/route';
import { ResultSetHeader } from 'mysql2';

export const getAllRoutes = async (_req: Request, res: Response) => {
  try {
    const [rows] = await pool.query<any[]>('SELECT * FROM routes');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching routes:', error);
    res.status(500).json({ error: 'Error fetching routes' });
  }
};

export const getRouteById = async (req: Request, res: Response) => {
  try {
    const [rows] = await pool.query(
      'SELECT * FROM routes WHERE id = ?',
      [req.params.id]
    );
    if (Array.isArray(rows) && rows.length > 0) {
      res.json(rows[0]);
    } else {
      res.status(404).json({ error: 'Route not found' });
    }
  } catch (error) {
    console.error('Error fetching route:', error);
    res.status(500).json({ error: 'Error fetching route' });
  }
};

export const createRoute = async (req: Request, res: Response) => {
  const { name, description, startPoint, endPoint, difficulty } = req.body as Route;
  
  try {
    const [result] = await pool.query<ResultSetHeader>(
      'INSERT INTO routes (name, description, start_point, end_point, difficulty) VALUES (?, ?, ?, ?, ?)',
      [name, description, JSON.stringify(startPoint), JSON.stringify(endPoint), difficulty]
    );
    res.status(201).json({ id: result.insertId });
  } catch (error) {
    console.error('Error creating route:', error);
    res.status(500).json({ error: 'Error creating route' });
  }
};

