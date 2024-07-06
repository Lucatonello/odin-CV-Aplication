import { useState } from 'react'
import './App.css'
import { person } from './data.js';

function Background({ type, content }) {
  if (type === 'education') {
    return (
      <div class="education-container">
        {content.map((elem, index) => (
          <div key={index} className="education">
            <p><b>School: </b>{elem.school}</p>
            <p><b>Major: </b>{elem.major}</p>
            <p><b>Date: </b>{elem.date}</p>
          </div>
        ))} 
      </div>
    );
  }
  else if (type === 'experience') {
    return (
      <div className="experience-container">
        {content.map((elem, index) => (
          <div key={index} className="experience">
            <p><b>Company: </b>{elem.company}</p>
            <p><b>Position: </b>{elem.position}</p>
            <p><b>Responsabilities: </b>{elem.responsibilities}</p>
            <p><b>Date: </b>{elem.date}</p>
          </div>
        ))} 
      </div>
    )
  }
  else {
    return null;
  }
}


function App() {
  const [formData, setFormData] = useState(person);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      generalInfo: {
        ...prevState.generalInfo,
        [name]: value
      }
    }));
    
  }
  console.log(formData.generalInfo.name);
  return (
    <div className="page-wrapper">
      <div className="input-container">
        <h3>Basic information</h3>
        <label htmlFor="name">Name</label>
        <input 
          type="text"
          id="name"
          name="name"
          value={formData.generalInfo.name}
          onChange={handleInputChange}
        />

        <label htmlFor="Ocupation">Ocupation</label>
        <input type="text" />

        <label htmlFor="Email">Email</label>
        <input type="text" />

        <label htmlFor="Phone">Phone</label>
        <input type="text" />
  
        <h3>Education</h3>
        <label htmlFor="School">School</label>
        <input type="text" />

        <label htmlFor="Major">Major</label>
        <input type="text" />

        <label htmlFor="Date">Date</label>
        <input type="text" />

        <h3>Experience</h3>
        <label htmlFor="Company">Company</label>
        <input type="text" />

        <label htmlFor="Position">Position</label>
        <input type="text" />

        <label htmlFor="Responsabilities">Responsabilities</label>
        <input type="text" />

        <label htmlFor="Date">Date</label>
        <input type="text" />
      </div>

      <div className="cv-container">
        <h1 id="name">{formData.generalInfo.name}</h1>
        <h2>{person.generalInfo.ocupation}</h2>

        <p><b>Email: </b>{person.generalInfo.email}</p>
        <p><b>Phone: </b>{person.generalInfo.phone} </p>

        <h1>Education</h1>
        <hr />
        <Background type="education" content={person.education} />

        <h1>Experience</h1>
        <hr />
        <Background type="experience" content={person.experience} />
      </div>
    </div>
  )
}

export default App
