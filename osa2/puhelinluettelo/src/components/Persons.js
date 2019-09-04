import React from 'react'

const Persons = ({ persons, search }) => {

  const filteredNames = persons.filter(person =>
    person.name.toLowerCase().includes(search.toLowerCase()))
  
  const printNames = () => filteredNames.map(person => {
    return (
      <li key={person.name}>
      {person.name} {person.number}
      </li>
    )
  })

  return (
    <ul>
      {printNames()}
    </ul>
  )

}

export default Persons