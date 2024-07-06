import { useState } from 'react'
import './App.css'

const person = {
  generalInfo: {
    name: 'John',
    ocupation: 'Software engineer',
    email: 'john@gmail.com',
    phone: '555-555-555',
  },
  education: [
  {
    school: 'Harvard',
    major: 'BS in Computer Science',
    date: '2014-2018'
  },
  {
    school: 'Phillips Academy Andover',
    major: 'High school diploma',
    date: '2009-2013'
  }
  ],
  experience: [
  {
    company: 'Google',
    position: 'Software Engineer',
    responsibilities: 'Mantain and improve existing code',
    date: '2019-2022' 
  },
  {
    company: 'Open AI',
    position: 'Software Engineer',
    responsibilities: 'Mantain code and add new features',
    date: '2022-Present'
  }
  ],
};

function Education({ education }) {
  return (
    <div class="education-container">
      {education.map((elem, index) => (
        <div key={index} className="education">
          <p><b>School: </b>{elem.school}</p>
          <p><b>Major: </b>{elem.major}</p>
          <p><b>Date: </b>{elem.date}</p>
        </div>
      ))} 
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
      <h1>{person.generalInfo.name}</h1>
      <h2>{person.generalInfo.ocupation}</h2>

      <p>Email: {person.generalInfo.email}</p>
      <p>Phone: {person.generalInfo.phone} </p>

      <h1>Education</h1>
      <hr />
      
      <Education education={person.education} />
      <h1>Experience</h1>
      <hr />
      <p><b>Company: </b>{person.experience[0].company}</p>
      <p><b>Position: </b>{person.experience[0].position}</p>
      <p><b>Responsabilities: </b>{person.experience[0].responsibilities}</p>
      <p><b>Date: </b>{person.experience[0].date}</p>
    </>
  )
}

export default App
