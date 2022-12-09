import React, { useEffect, useState } from 'react'

const Intake = ({ submitForm }) => {
  const [formData, setFormData] = useState({
    name: "",
    club: "",

  })

  const onChange = (e) => {
    e.preventDefault()
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name] : e.target.value
    }))
  }

  // const submitForm = () => {
  //   console.log(formData)
  // }
  return (
    <form onSubmit={(e)=> submitForm(e, formData)}>
      <label htmlFor="name">Name</label>
      <input className='inputs' type="text" name="name" onChange={(e)=> onChange(e)}/>
      <label htmlFor="club">Club</label>
      <input className='inputs' type="text" name='club'  onChange={(e) => onChange(e)} />
      <button className='submit-button' type='submit'>Submit</button>
    </form>
  )
}

export default Intake
