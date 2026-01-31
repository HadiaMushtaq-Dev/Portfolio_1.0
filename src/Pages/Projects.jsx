import React from 'react'
import './Pages.css'
import {Link} from 'react-router-dom'
function Projects() {
  return (
    <div className='project'>
      <div className='project1'>
<h1>My Projects </h1>
<div className="cards">
<div className="card">
    Boggo
    <p>Boggo is a full-stack MERN blog application that allows users to create, read,
update, and delete blog posts with secure JWT-based authentication and
authorization. The application includes search functionality, protected routes,
and a responsive user interface.</p>
    <Link to='https://boggo-frontend.vercel.app/' className='link1'>Go Live</Link>
    </div>
<div className="card">
   Sticky
    <p>Sticky is a secure notes management application where users can create,
edit, and delete personal notes after authentication. The app implements
role-based access control to ensure data privacy and follows RESTful API
principles for clean backend architecture.</p>
    <Link to='https://notes-manager-frontend-ten.vercel.app/' className='link1'>Go Live</Link>
    </div>
<div className="card">
    JWT
    <p>A standalone authentication system implementing secure user registration,
login, and logout functionality using JSON Web Tokens. The project focuses
on backend security best practices, protected routes, and session handling,
making it reusable for future full-stack applications.</p>
    <Link to='https://auth-frontend-sigma-steel.vercel.app/' className='link1'>Go Live</Link>
    </div>
<div className="card">
    Shoppily (React)
    <p>hoppily is a modern e-commerce frontend built with React that consumes
real-world APIs to display products, manage categories, and handle dynamic
state updates. The project emphasizes responsive UI design, API integration,
and clean component structure.</p>
    <Link to='https://hadiamushtaq-dev.github.io/Shoppily' className='link1'>Go Live</Link>
     </div>
<div className='card'>
    Jobster (React)
    <p>obster is a job searching and posting platform featuring separate user
interfaces for job seekers and recruiters. The project focuses on UI
architecture, conditional rendering, and scalable component design to
support multiple user roles.</p>
    <Link to='https://hadiamushtaq-dev.github.io/Jobster/' className='link1'>Go Live</Link>
     </div>
</div>
</div>
    </div>
  )
}

export default Projects
