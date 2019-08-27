import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const data = require('./data.json');
  let ikä = 66
  let puolue = "PS"
  const newData = data.filter(yo => yo.age <= ikä && yo.abbr === puolue)
  const printti = newData.map(aight => 
    "<li>" + aight.firstName + " " + aight.lastName + ", " + aight.occupation + "</li>")
  return (
    <div>
      <ul>
        {printti}
      </ul>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
  );

// const App = () => {
//   const [ good, setGood ] = useState(0)
//   const [ neutral, setNeutral ] = useState(0)
//   const [ bad, setBad ] = useState(0)
//   const handleGood = () => (setGood(good + 1))
//   const handleNeutral = () => (setNeutral(neutral + 1))
//   const handleBad = () => (setBad(bad + 1))

//   return (
//     <div>
//       <h1>
//         anna palautetta
//       </h1>
//       <Button handleWhat={handleGood} buttonText="Hyvä" />
//       <Button handleWhat={handleNeutral} buttonText="Neutraali" />
//       <Button handleWhat={handleBad} buttonText="Huono" />
//       <h1>Statistiikka</h1>
//       <Statistics good={good} neutral={neutral} bad={bad} />      
//     </div>
//   )
// }

// const Button = (props) => {
//   return (
//     <>
//     <button onClick={props.handleWhat}>{props.buttonText}</button>
//     </>
//   )
// }

// const Statistics = ({good, neutral, bad}) => {
//   if (good === 0 && neutral === 0 && bad === 0) {
//     return (
//       <>
//       <p>Ei yhtään palautetta. Paina nappia, hullu!</p>
//       </>
//     )
//   } else {
//     return (
//       <>
//       <Statistic text="hyvä" value={good} />
//       <Statistic text="neutraali" value={neutral} />
//       <Statistic text="huono" value={bad} />
//       <Statistic text="yhteensä" value={good + neutral + bad} />
//       <Statistic text="keskiarvo" value={good * 1 + neutral * 0 + bad * -1 / ( good + neutral + bad )} />
//       <Statistic text="positiivisia" value={good / (good + neutral + bad) * 100} />
//       </>
//     )
//   }
// }

// const Statistic = ({text, value}) => {
//   return (
//     <>
//     {/* <p>{text} {value}</p> */}

//     <table>
//       <tbody>
//         <tr>
//           <td>{text}</td>
//           <td>{value}</td>
//         </tr>
//       </tbody>
//     </table>

//     </>
//   )
// }

// ReactDOM.render(<App />, 
//   document.getElementById('root')
//   );

