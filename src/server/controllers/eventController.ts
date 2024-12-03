import { Request, Response } from 'express';
import pool from '../config/database';
import { CalendarEvent } from '../../types/calendar';
import { ResultSetHeader } from 'mysql2';

export const getAllEvents = async (_req: Request, res: Response) => {
  try {
    const [rows] = await pool.query('SELECT * FROM calendar_events');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ error: 'Error fetching events' });
  }
};

export const createEvent = async (req: Request, res: Response) => {
  const { routeId, title, startDate, startTime, description, meetingPoint } = req.body as CalendarEvent;
  
  try {
    const [result] = await pool.query<ResultSetHeader>(
      'INSERT INTO calendar_events (route_id, title, start_date, start_time, description, meeting_point) VALUES (?, ?, ?, ?, ?, ?)',
      [routeId, title, startDate, startTime, description, meetingPoint]
    );
    res.status(201).json({ id: result.insertId });
  } catch (error) {
    console.error('Error creating event:', error);
    res.status(500).json({ error: 'Error creating event' });
  }
};

export const updateEvent = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, startDate, startTime, description, meetingPoint } = req.body as CalendarEvent;
  
  try {
    const [result] = await pool.query<ResultSetHeader>(
      'UPDATE calendar_events SET title = ?, start_date = ?, start_time = ?, description = ?, meeting_point = ? WHERE id = ?',
      [title, startDate, startTime, description, meetingPoint, id]
    );
    
    if (result.affectedRows > 0) {
      res.json({ message: 'Event updated successfully' });
    } else {
      res.status(404).json({ error: 'Event not found' });
    }
  } catch (error) {
    console.error('Error updating event:', error);
    res.status(500).json({ error: 'Error updating event' });
  }
};

export const deleteEvent = async (req: Request, res: Response) => {
  try {
    const [result] = await pool.query<ResultSetHeader>(
      'DELETE FROM calendar_events WHERE id = ?',
      [req.params.id]
    );
    
    if (result.affectedRows > 0) {
      res.json({ message: 'Event deleted successfully' });
    } else {
      res.status(404).json({ error: 'Event not found' });
    }
  } catch (error) {
    console.error('Error deleting event:', error);
    res.status(500).json({ error: 'Error deleting event' });
  }
};