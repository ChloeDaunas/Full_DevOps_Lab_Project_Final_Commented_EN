import express from 'express';
const router = express.Router();

const appointments = [
  { id: 1, date: '2024-07-01', time: '10:00', client: 'John Doe', doctor: 'Dr. Smith'},
  { id: 2, date: '2024-07-02', time: '11:00', client: 'Jane Smith', doctor: 'Dr. Lee'},
];

router.get("/", (req, res) => res.status(200).json(appointments));

router.post("/", (req, res) => {
    const { date, time, client, doctor } = req.body;

    if (!date || !time || !client || !doctor) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    const newAppointment = { id: appointments.length + 1, date, time, client, doctor};
    appointments.push(newAppointment);
    res.status(201).json(newAppointment);
});

export default router;