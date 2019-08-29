import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
  const [selected, setSelected] = useState(0)

  const votesArray = new Array(anecdotes.length).fill(0)
  const [votes, setVotes] = useState(votesArray)

  const vote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  const generate = () => (setSelected(Math.floor(Math.random()*anecdotes.length)))

  let highscore = 0
  let votedMost

  votes.forEach(x => {
    if(x > highscore) {
      highscore = x
      votedMost = votes.indexOf(highscore)
    }
  })

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{props.anecdotes[selected]}</p>
      <p>Has {votes[selected]} votes</p>
      <button onClick={vote}>vote</button>
      <button onClick={generate}>next</button>
      <h2>Anecdote with most votes</h2>
      <p>{props.anecdotes[votedMost]}</p>
      <p>Has {highscore} votes</p>
    </div>
  )
}



const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />, 
  document.getElementById('root'));