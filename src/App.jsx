import { useState } from "react";
import PatientForm from "./components/PatientsForm";
import PatientList from "./components/PatientList";
import "./App.css";

function App() {
  const [patients, setPatients] = useState([]);

  const addPatient = (newPatient) => {
    setPatients([...patients, newPatient]);
  };

  return (
    <>
      <h2>Hospital Patient Manager</h2>

      <PatientForm addPatient={addPatient} />

      <PatientList patients={patients} />
    </>
  );
}

export default App;