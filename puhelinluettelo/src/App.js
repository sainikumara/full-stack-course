import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { 
          name: 'Arto Hellas',
        }
      ],
      newName: ''
    }
  }

  addName = (event) => {
    event.preventDefault()

    const personObject = {
      name: this.state.newName,
    }

    const persons = this.state.persons.concat(personObject)
    
    this.setState({
      persons,
      newName: ''
    })
  }

  handleNameChange = (event) => {
    this.setState({ newName: event.target.value })
  }
  
  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addName}>
          <div>
            nimi: 
            <input
              value={this.state.newName}
              onChange={this.handleNameChange}
            />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        <ul>
          {this.state.persons.map(person => <Name key={person.name} name={person.name} />)}
        </ul>
      </div>
    )
  }
}

const Name = (props) => {
  return (
    <div> 
      <p> {props.name} </p>
    </div>
  )
}

export default App

