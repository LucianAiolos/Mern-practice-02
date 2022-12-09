import './App.css';
import Intake from './components/Intake';
import { useEffect, useState } from 'react'
import List from './components/List'

function App() {
  const [members, setMembers] = useState([])

  useEffect(() => {
    getMembers()
  }, [])

  // Get Members
  const getMembers = async () => {
    const res = await fetch()
  }
  // Add member
  const submitForm = (e, formData) => {


    e.preventDefault()
    console.log(formData)

    if(formData.name.length > 0 && formData.club.length > 0) {
      fetch('http://localhost:9000/addMember', {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `name=${formData.name}&club=${formData.club}`
      })
        .then(res => {
          if(res.status === 200){
            console.log('Member has been added to db')
          } else {
            alert('Check all fields')
          }
        })
    } else {
      alert('Field is empty')
    }
  }
  return (
    <div className="App-header">
      <header className=''>
        <h1>Welcome to my member form</h1>
      </header>
      <Intake submitForm={submitForm}/>
      <List members={members}/>
    </div>
  );
}

export default App;
