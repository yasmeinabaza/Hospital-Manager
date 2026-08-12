import { useState } from "react";

const PatientsForm = () => {

    const [patients, setPatients] = useState([]);

    const [patientName, setPatientName] = useState("");
    const [age, setAge] = useState("");
    const [department, setDepartment] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPatient = {
            patientName,
            age,
            department,
        };

        setPatients([...patients, newPatient]);
    }

    return (
        <>
            <h2>Form: </h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Patient Name"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Department"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                />

                <button type="submit">
                    Add Patient
                </button>
            </form>
        </>
    );
}

export default PatientsForm;