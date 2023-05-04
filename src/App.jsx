import './App.css'
import { useState } from 'react'
import {FaGithubSquare} from 'react-icons/fa';
import Review from './components/Review';
function App() {
  const [count, setCount] = useState(0)
  return (
    <div className='mainContainer'>
      <section className="container">
        <div className="title">
          <h1>Our reviews</h1>
          <div className="underline"></div>
        </div>
        
    {/* <FaGithubSquare className='icon'/> */}
      </section>
      <Review/>
    </div>
  )
}

export default App
