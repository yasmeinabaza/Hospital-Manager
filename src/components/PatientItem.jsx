const PatientItem = ({ patient, number }) => {
    return (
        <li>
            <strong>{number}. {patient.patientName}</strong> - Age: {patient.age}, Department: {patient.department}
        </li>
    );
};

export default PatientItem;