import React from 'react'

const NewPerson = ({ newName, handleNameChange, newNumber, handleNumberChange, addName }) => {
  return (
    <form>
      <div>
        name: <input 
                value={newName}
                onChange={handleNameChange} 
              />
      </div>
      <div>
        number: <input
                  value={newNumber}
                  onChange={handleNumberChange}
                />
      </div>
      <div>
        <button 
          type="submit"
          onClick={addName}>
          add
        </button>
      </div>
    </form>
  )
}

export default NewPerson