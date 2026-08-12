import { useState } from 'react'

import PatientsForm from "./components/PatientsForm";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hospital Patient Manager</h1>

      <PatientsForm/>
      <PatientsForm patientName={username} Age={age} Department={Department} />
    </>
  )
}

export default App
