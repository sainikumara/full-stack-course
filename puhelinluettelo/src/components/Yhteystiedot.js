import React from 'react';
import Person from './Person';

const Yhteystiedot = (props) => {
    return (
      <table>
        {props.persons.map(
          person => <Person key={person.name} person={person} />
        )}
      </table>
    )
  }

  export default Yhteystiedot