import React from 'react'
import './Comps.css'
function Skills() {
   const skills = [
  "React (Hooks & Components)",
  "JavaScript (ES6+)",
  "HTML5 & CSS3",
  "Responsive UI Design",
  "Node.js & Express",
  "MongoDB",
  "REST APIs",
  "JWT Authentication",
  "Git & GitHub"
];

  return (
    <div className='skills'>
      <div className='skill'>
        
<h1>My Tech Stack</h1>
<div className="skills1">
{skills.map(skill => (
<span key={skill} className='items'>{skill}</span>
))}
</div>
<p style={{ marginTop: "4vh", color: "#9ca3af", fontSize: "1rem" }}>
Focused on building real-world MERN applications with clean UI and secure backend logic.
</p>
      </div>
    </div>
  )
}

export default Skills
