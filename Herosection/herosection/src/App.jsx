import { useState } from 'react'
import Herosection from './components/Herosection';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Herosection/>
    </>
  )
}

export default App;
