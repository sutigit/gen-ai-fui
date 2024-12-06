import './App.css'
import { useState } from 'react'

function App() {
  const [inputValue, setInputValue] = useState<string>('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handlePromptSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('submit', inputValue)
    setInputValue('')
  }

  return (
    <main id='app'>
      <div className='app-main-form-container'>
      <form className='app-main-form' onSubmit={handlePromptSubmit}>
        <input
          type="text"
          placeholder={"A phone screen getting hacked"}
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          type="submit">
          Generate
        </button>
      </form>
    </div>
    </main >
  )
}

export default App
