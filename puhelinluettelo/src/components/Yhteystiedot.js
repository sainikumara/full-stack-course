import React from 'react';
import Person from './Person';

const Yhteystiedot = (props) => {
    return (
      <table>
        {props.persons.map(
          person => <Person 
            key={person.name} 
            person={person} 
            delete={props.delete}
            />
        )}
      </table>
    )
  }

  export default Yhteystiedot