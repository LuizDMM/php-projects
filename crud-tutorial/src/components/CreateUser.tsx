import React, { useState } from 'react'
import axios from 'axios'

export default function CreateUser() {
  const [inputs, setInputs] = useState({})

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/user/save', inputs)
    console.log(inputs)
  }

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget

    setInputs(values => ({...values, [name]: value}))
  }

  return (
    <div>
      <h1>Create User</h1>
      <form onSubmit={handleSubmit}>
        <table cellSpacing="10">
          <tbody>
            <tr>
              <th>
                <label htmlFor="name">Name: </label>
              </th>
              <td>
                <input type="text" name="name" id="name" onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="email">Email: </label>
              </th>
              <td>
                <input type="email" name="email" id="email" onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="mobile">Mobile:</label>
              </th>
              <td>
                <input type="tel" name="mobile" id="mobile" onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <td colSpan={2} align="right">
                <button type="submit">Save</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  )
}
