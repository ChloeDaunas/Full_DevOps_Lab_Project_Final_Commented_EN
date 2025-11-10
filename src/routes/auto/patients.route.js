// patients.route.js
import express from "express";
const router = express.Router();

// Exemple de base de données temporaire (en mémoire)
let patients = [
  { id: 1, name: "Alice Dupont", age: 30 },
  { id: 2, name: "John Martin", age: 45 }
];

// === GET /api/patients ===
// Récupère tous les patients
router.get("/", (req, res) => {
  res.status(200).json(patients);
});

// === POST /api/patients ===
// Ajoute un nouveau patient
router.post("/", (req, res) => {
  const { name, age } = req.body;

  // Vérifie la présence des champs requis
  if (!name || !age) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // Crée un nouvel objet patient
  const newPatient = {
    id: patients.length + 1,
    name,
    age
  };

  // Ajoute le patient à la liste
  patients.push(newPatient);

  // Répond avec le patient créé
  res.status(201).json(newPatient);
});

export default router;
