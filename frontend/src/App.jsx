import { useState } from 'react'
import Navbar from '../components/navbar' 
import Banner from '../components/banner'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='px-10'>
      <Navbar></Navbar>
      <Banner></Banner>





    </div>

  )
}

export default App
