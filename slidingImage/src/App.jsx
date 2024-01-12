import { useState } from 'react'
import './App.css'
import ImageSlider from './ImageSlider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Image Slider  </h1>
      <ImageSlider/>
    </>
  )
}

export default App
