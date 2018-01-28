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
        <button onClick={this.kasvataHyvaa}>hyvä</button>
        <button onClick={this.kasvataNeutraalia}>neutraali</button>
        <button onClick={this.kasvataHuonoa}>huono</button>
        
        <h1>Statistiikka</h1>
        <p>hyva {this.state.hyva}</p>
        <p>neutraali {this.state.neutraali}</p>
        <p>huono {this.state.huono}</p>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)