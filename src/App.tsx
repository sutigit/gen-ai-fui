import { useEffect, useState } from 'react'



function App() {
  const [elements, setElements] = useState<HTMLElement[]>([])

  useEffect(() => {

    setElements([])
  }, [])

  return (
    <main>
    </main>
  )
}

export default App
