import PatientItem from "./PatientItem";

const PatientList = ({ patients }) => {
    return (
        <>
            <h3>Patients</h3>
            <ul>
                <p>List of patients</p>
                {patients.map((patient, index) => (
                    <PatientItem
                        patient={patient}
                        number={index + 1}
                        key={index}
                    />
                ))}
            </ul>
        </>
    );
};

export default PatientList;