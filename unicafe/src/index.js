import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0
    }
  }

  talletaPalaute = (palaute) => {
    return () => {
      this.setState({
        [palaute]: this.state[palaute] + 1
      })
    }
  }

  render(){
    return (
      <div>
        <h1>Anna palautetta</h1>
        <Button action={this.talletaPalaute('hyva')} text='hyvä' />
        <Button action={this.talletaPalaute('neutraali')} text='neutraali' />
        <Button action={this.talletaPalaute('huono')} text='huono' />
        
        <h1>Statistiikka</h1>
        <Statistics 
          hyva={this.state.hyva}
          neutraali={this.state.neutraali}
          huono={this.state.huono}
        />
      </div>
    )
  }
}

const Button = (props) => {
  return (
    <div>
      <button onClick={props.action}> {props.text} </button>
    </div>
  )
}

const Statistics = (props) => {
  let palautteidenLukumaara = props.hyva + props.neutraali + props.huono
  let keskiarvo = 0
  let positiivistenOsuus = 0
  
  if (palautteidenLukumaara !== 0) {
    keskiarvo = (props.hyva - props.huono) / palautteidenLukumaara
    keskiarvo = keskiarvo.toFixed(1)
    positiivistenOsuus = props.hyva / palautteidenLukumaara
    positiivistenOsuus = positiivistenOsuus.toFixed(2) + " %"

    return (
      <div>
        <table>
          <Statistic text='hyvä' value={props.hyva} />
          <Statistic text='neutraali' value={props.neutraali} />
          <Statistic text='huono' value={props.huono} />
          <Statistic text='keskiarvo' value={keskiarvo} />
          <Statistic text='positiivisia' value={positiivistenOsuus} />
        </table>
      </div>
    )
  }

  return (
      <div>
        Palautteita ei ole vielä annettu.
      </div>
  )
}

const Statistic = (props) => {
  return (
    <tbody>
      <tr><td>{props.text}</td><td>{props.value}</td></tr>
    </tbody>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)