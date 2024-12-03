import { Router } from 'express';
import { getAllRoutes, getRouteById, createRoute } from './controllers/routeController';
import { getAllEvents, createEvent, updateEvent, deleteEvent } from './controllers/eventController';

const router = Router();

// Routes endpoints
router.get('/rutas_senderismo', getAllRoutes);
router.get('/routes/:id', getRouteById);
router.post('/routes', createRoute);

// Calendar events endpoints
router.get('/events', getAllEvents);
router.post('/events', createEvent);
router.put('/events/:id', updateEvent);
router.delete('/events/:id', deleteEvent);

export default router;