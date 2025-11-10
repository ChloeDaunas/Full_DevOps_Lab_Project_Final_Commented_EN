 const hospital_name = "Central Hospital";
 let number_doctor = 25;
 let is_open = true;
 is_open=false

 
if (is_open) {
  console.log("Welcome to", hospital_name, "!");
  console.log("We have", number_doctor, "doctors currently available.");
} else {
  console.log("Sorry, the", hospital_name, "is currently closed.");
}

const doctors = [
    {id : 1, name:"Dr. Amir Khan", speciality: "Pediatry" },
    {id : 2, name:"Dr. COlette", speciality: "Pediatry" },
    {id : 3, name:"Dr. Valentin", speciality: "Pediatry" },
    {id : 4, name:"Dr. Alvaro", speciality: "Pediatry" },
    {id : 5, name:"Dr. Camille", speciality: "Cardiology" }
];


let index = 1;
for (const doctor of doctors) {
  console.log(`Doctor #${index}: ${doctor.name}`);
  index++;
}

doctors.push({ id: 6, name: "Dr. Sofia", speciality: "Neurology" });
console.log(`\nA new doctor has been added. Total doctors: ${doctors.length}`);

function findDoctor(name) {
  const found = doctors.some(
    doctor => doctor.name.toLowerCase() === name.toLowerCase()
  );
  if (found) {
    return "Doctor found";
  } else {
    return "Doctor not found";
  }
}

//console.log(findDoctor("Dr. Camille"));  // Doctor found
//console.log(findDoctor("Dr. Unknown"));  // Doctor not found

const patient = {
    name : "Alice Martin",
    age : 34,
    conditions: ["diabetes","hypertension"],
    doctor: {name:"Dr. Lee", speciality : "Cardiology"}
};

//console.log("Nom du docteur" , patient.doctor.name)
//console.log("Nombre de pathologie", patient.conditions.length)
//console.log(patient.name, " is treated by ", patient.doctor.name)

patient.conditions.push("anxiety");
//console.log("\nUpdated patient object:");
//console.log(patient);


const patients = [
  { id: 1, name: "Alice", age: 34 },
  { id: 2, name: "John", age: 45 },
  { id: 3, name: "Marie", age: 29 }
];

function filterByAge(minAge) {
  return patients.filter(patient => patient.age > minAge);
}

function addPatient(name, age) {
  const newId = patients.length + 1; 
  patients.push({ id: newId, name: name, age: age });
}


console.log("Patients older than 30:");
console.log(filterByAge(30));

addPatient("Sophie", 38);

//console.log("\nUpdated patient list:");
//console.log(patients);

export function createAppointment(doctor, patient, date) {
  if (!doctor || !patient || !date) {
    throw new Error("Missing required fields");
  }
  return { doctor, patient, date };
}

try {
  console.log(createAppointment("Dr. Lee", "Alice", "2025-03-15"));
  console.log(createAppointment("Dr. Lee"));
} catch (err) {
  console.error("Error:", err.message);
}
