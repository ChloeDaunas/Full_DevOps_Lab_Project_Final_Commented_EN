import express from 'express';
import appointmentsRouter from '../routes/appointments.route.js';

const router = express.Router();

// Mount the existing appointments router under /api/appointments so
// the test suite (and clients) can call GET/POST /api/appointments
router.use('/api/appointments', appointmentsRouter);

export default router;
