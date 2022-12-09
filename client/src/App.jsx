import './App.css';
import Intake from './components/Intake';
import { useEffect, useState, useRef } from 'react'
import List from './components/List'

function App() {
  const [members, setMembers] = useState([])

  const mounted = useRef(false)

  useEffect(() => {
    if(mounted.current === false) {
      getMembers()
      mounted.current = true
    }

  }, [])

  // Get Members
  const getMembers = async () => {
    const res = await fetch('http://localhost:9000/getMembers')
    // const data = res.json()
    const data = await res.json()
    console.log(data.data, 'response')
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
