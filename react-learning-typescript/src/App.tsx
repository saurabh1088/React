import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DailyHabitWithProps from './components/DailyHabit'
import DailyHabitWithObjectDestructuring from './components/DailyHabit'
import DailyHabitWithCustomTypeDefinition from './components/DailyHabit'
import HeaderWithImage from './components/HeaderWithImage'
import ButtonWithState from './components/ButtonWithState'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <HeaderWithImage image={ {src: reactLogo, alt: "A logo for header"} }>
        <h1>Header with image</h1>
      </HeaderWithImage>
      <DailyHabitWithProps title='1. Daily Habit' description='One must have some good daily habits'/>
      <DailyHabitWithObjectDestructuring title={'2. Daily Habit'} description={'One must have some good daily habits'}/>
      <DailyHabitWithCustomTypeDefinition title={'3. Daily Habit'} description={'One must have some good daily habits'}/>
      <ButtonWithState/>
    </>
  )
}

export default App
