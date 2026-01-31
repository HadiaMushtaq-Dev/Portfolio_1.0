import React from 'react'
import About from '../Components/About'
import Skills from '../Components/Skills'
import './Pages.css'
import { useNavigate } from 'react-router-dom'
function Home() {
  const Navigate=useNavigate()
  return (
    <div className='home'>
        <div className='intro'>
            <h1>Hi, I’m Hadia Mushtaq</h1>
<p>
Self-taught MERN Stack Developer building real-world, scalable web applications
</p>
<button onClick={()=>Navigate('/Projects')} className='cta-btn'>View Projects</button>

        </div>
      <Skills/>
      <About/>
    </div>
  )
}

export default Home
