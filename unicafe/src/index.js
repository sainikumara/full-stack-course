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

  kasvataHyvaa = () => {
      this.setState({
          hyva: this.state.hyva + 1
      })
  }

  kasvataNeutraalia = () => {
      this.setState({
          neutraali: this.state.neutraali + 1
      })
  }

  kasvataHuonoa = () => {
      this.setState({
          huono: this.state.huono + 1
      })
  }

  render(){
    
    
    return (
      <div>
        <h1>Anna palautetta</h1>
        <Button action={this.kasvataHyvaa} text='hyvä' />
        <Button action={this.kasvataNeutraalia} text='neutraali' />
        <Button action={this.kasvataHuonoa} text='huono' />
        
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
      <button onClick={props.action}>{props.text}</button>
    </div>
  )
}

const Statistics = (props) => {
  let palautteidenLukumaara = props.hyva + props.neutraali + props.huono
  let keskiarvo = 0
  let positiivistenOsuus = 0
  if (palautteidenLukumaara !== 0) {
    keskiarvo = (props.hyva - props.huono) / palautteidenLukumaara
    positiivistenOsuus = props.hyva / palautteidenLukumaara
  }
  keskiarvo = keskiarvo.toFixed(1)
  positiivistenOsuus = positiivistenOsuus.toFixed(2) + " %"

  return (
      <div>
        <Statistic text='hyvä' value={props.hyva} />
        <Statistic text='neutraali' value={props.neutraali} />
        <Statistic text='huono' value={props.huono} />
        <Statistic text='keskiarvo' value={keskiarvo} />
        <Statistic text='positiivisia' value={positiivistenOsuus} />
      </div>
  )
}

const Statistic = (props) => {
  return (
    <div>
      <p>{props.text} {props.value}</p>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)