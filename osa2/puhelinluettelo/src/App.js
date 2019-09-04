import React, { useState } from 'react'
import Persons from './components/Persons'
import Search from './components/Search'
import NewPerson from './components/NewPerson';

const App = () => {

  // tilat
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '0503263797' },
    { name: 'Leo', number: '040 325 6789' },
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ search, setSearch ] = useState('')

  // tapahtumankäsittelijät
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
    }
    if(persons.some(person => person.name === newName)) {
      alert(`${newName} already exists. Please check your spelling.`)
    } else {
        setPersons(persons.concat(personObject))
        setNewName('')
        setNewNumber('')
      }
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Search search={search} handleSearch={handleSearch} />
      <h2>Add person</h2>
      <NewPerson newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} addName={addName} />
      <h2>Numbers</h2>
      <Persons persons={persons} search={search} />
    </div>
  )

}

export default App