import React, { useState } from 'react'


const FormEvent: React.FC = () => {
  const [value, setValue] = useState<string | undefined>("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    setValue(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(e)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} placeholder='enter your data' />
        <button type='submit'>Submit</button>
        <div>{value}</div>
      </form>
    </>
  )
}

export default FormEvent
