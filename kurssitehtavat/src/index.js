import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10,
        id: 1
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7,
        id: 2
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14,
        id: 3
      },
      {
        nimi: 'Komponenttien piilottaminen eri tiedostoihin, jotta niitä ei löydä',
        tehtavia: 7,
        id: 4
      }
    ]
}

// const Yhteensa = (props) => {
//     let yhteensa = props.osat[0].tehtavia + props.osat[1].tehtavia + props.osat[2].tehtavia
//     return (
//         <div>
//             <p>yhteensä {yhteensa} tehtävää</p>
//         </div>
//     )
// }
  
ReactDOM.render(
    <App kurssi={kurssi} />,
    document.getElementById('root')
)

