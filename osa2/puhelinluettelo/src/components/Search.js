import React from 'react'

const Search = ({search, handleSearch}) => {
  return (
    <form>
      <div>
        find person:
        <input
          value={search}
          onChange={handleSearch}
        />
      </div>
    </form>
  )
}

export default Search