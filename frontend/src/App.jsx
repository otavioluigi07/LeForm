import { useState } from 'react'
import Navbar from '../components/navbar' 
import Banner from '../components/banner'
import './App.css'
import Services from '../components/services'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='px-10'>
      <Navbar></Navbar>
      <Banner></Banner>
      <Services></Services>





    </div>

  )
}

export default App
