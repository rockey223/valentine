import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Valentine from './Valentine'

function App() {
  const [count, setCount] = useState(0)
  if (window.innerWidth < 950) {
    return (
      <>
        <p className='warning'>
          Please note that this application is only compatible with desktop
          devices. Please access it from a desktop computer for optimal
          performance.
        </p>
      </>
    );
  }
  return (
    <>
      <Valentine/>
    </>
  )
}

export default App
