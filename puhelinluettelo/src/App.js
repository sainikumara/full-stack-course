import React from 'react';
import personService from './services/persons'
import Lomake from './components/Lomake';
import Yhteystiedot from './components/Yhteystiedot';
import Notification from './components/Notification';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      onnistuminen: null
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

  tryAddingAPerson = (event) => {
    event.preventDefault()

    if (this.state.persons.every(
      person => person.name !== this.state.newName)) {
      
      this.addPerson();
    } else {
      this.updateNumberOfExistingPerson()
    }
  }

  addPerson = (event) => {
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
          newNumber: '',
          onnistuminen: 'Lisättiin ' + newPerson.name          
        })
        setTimeout(() => {
          this.setState({onnistuminen: null})
        }, 5000)
      })
  }

  updateNumberOfExistingPerson = () => {
    const personFromDB =
    this.state.persons.find(
      person => person.name === this.state.newName
    )
    const samePersonDifferentNumber = {
      name: personFromDB.name,
      number: this.state.newNumber
    }
    personService
      .update(personFromDB.id, samePersonDifferentNumber)
      .then(() => {
        personService
          .getAll()
          .then(persons => {
            this.setState({ 
              persons,
              newName: '',
              newNumber: '',
              onnistuminen: 'Muutettiin henkilön ' + personFromDB.name + ' numero'         
            })
            setTimeout(() => {
              this.setState({onnistuminen: null})
            }, 5000)
          })
      }).catch(error => {
        this.addPerson()
      })
  }

  deletePerson = (id) => {
      let personToBeDeleted = this.state.persons.find(person => person.id === id)
      
      personService
        .deleteObject(id)
        .then(() => {
          this.setState({
            persons: this.state.persons.filter(person => person.id !== id),
            onnistuminen: 'Poistettiin henkilö ' + personToBeDeleted.name  
          })
          setTimeout(() => {
            this.setState({onnistuminen: null})
          }, 5000)
        })
    
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
        <Notification
          message={this.state.onnistuminen}
        />
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