import { useState } from "react";

const PatientForm = ({ addPatient }) => {
    const [patientName, setPatientName] = useState("");
    const [age, setAge] = useState("");
    const [department, setDepartment] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPatient = {
            patientName,
            age,
            department
        };

        addPatient(newPatient);

        setPatientName("");
        setAge("");
        setDepartment("");
    };

    return (
        <>
            <h3>Add Patient</h3>

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

                <button type="submit">Add Patient</button>
            </form>
        </>
    );
};

export default PatientForm;