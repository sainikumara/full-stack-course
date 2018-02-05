import React from 'react';

const Person = (props) => {
  return (
    <tbody> 
      <tr>
        <td> {props.person.name} </td>
        <td> {props.person.number} </td>
        <td><button 
          onClick={() => props.delete(props.person.id)}>poista</button></td>
      </tr>
    </tbody>
  )
}

export default Person
