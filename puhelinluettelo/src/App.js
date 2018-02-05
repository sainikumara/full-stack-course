import React from 'react';
import axios from 'axios';
import Lomake from './components/Lomake';
import Yhteystiedot from './components/Yhteystiedot';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: ''
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        this.setState({ persons: response.data })
      })
  }

  addPerson = (event) => {
    event.preventDefault()

    if (this.state.persons.every(
      person => person.name !== this.state.newName)) {

      const personObject = {
        name: this.state.newName,
        number: this.state.newNumber
      }

      axios.post('http://localhost:3001/persons', personObject)
      .then(response => {
        this.setState({
          persons: this.state.persons.concat(response.data),
          newName: '',
          newNumber: ''
        })
      })
    }
  }

  handleNameChange = (event) => {
    this.setState({ newName: event.target.value })
  }

  handleNumberChange = (event) => {
    this.setState({ newNumber: event.target.value })
  }
  
  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <Lomake 
          addPerson={this.addPerson}
          newName={this.state.newName}
          newNumber={this.setState.newNumber}
          handleNameChange={this.handleNameChange}
          handleNumberChange={this.handleNumberChange}
        />
        <h2>Numerot</h2>
        <Yhteystiedot persons={this.state.persons}/>
      </div>
    )
  }
}

export default App