import express from "express";
const router = express.Router();

// Données simulées (en mémoire)
const doctors = [
  { id: 1, name: "Dr. Sarah Lee", specialty: "Cardiology" },
  { id: 2, name: "Dr. Amir Khan", specialty: "Pediatrics" }
];

router.get("/", (req, res) => {
  res.status(200).json(doctors);
});

router.post("/", (req, res) => {
  const { name, specialty } = req.body;

  if (!name || !specialty) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const newDoctor = {
    id: doctors.length + 1,
    name,
    specialty
  };

  doctors.push(newDoctor);
  res.status(201).json(newDoctor);
});

export default router;
