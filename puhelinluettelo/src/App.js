import React from 'react';
import personService from './services/persons'
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
    personService
      .getAll()
      .then(persons => {
        this.setState({ 
          persons,
          newName: '',
          newNumber: '' 
        })
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

      personService
        .create(personObject)
        .then(newPerson => {
          this.setState({
            persons: this.state.persons.concat(newPerson),
            newName: '',
            newNumber: ''
          })
        })
      }
  }

  deletePerson = (id) => {
    if (this.state.persons.every(
      person => person.name !== this.state.newName)) {
      
      personService
        .deleteObject(id)
        .then(() => {
          
          this.setState({
            persons: this.state.persons.filter(person => person.id !== id),
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
          newNumber={this.state.newNumber}
          handleNameChange={this.handleNameChange}
          handleNumberChange={this.handleNumberChange}
        />
        <h2>Numerot</h2>
        <Yhteystiedot
          persons={this.state.persons}
          delete={this.deletePerson}
        />
      </div>
    )
  }
}

export default App