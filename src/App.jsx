import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import { Login } from './components/login/login'

import './App.css'

function App() {
    const [actor, setActor] = useState("");
  return (
    <>
      <div>
            <h2>Select Your Actor</h2>

            <select onChange={(e)=> setActor(e.target.value)}>
              <option>Select Actor</option>
              <option>Salman khan</option>
              <option>srk</option>
            </select>

            <p>{actor}</p>

            {/* <select onChange={(e) => setActor(e.target.value)}>
                <option value="">Select Actor</option>
                <option>Salman Khan</option>
                <option>Shahrukh Khan</option>
            </select>

            <h2>{actor}</h2> */}
        </div>
      <Login/>
    </>
  )
}

export default App
