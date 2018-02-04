import React from 'react';

const Yhteensa = (props) => {
    const tehtavienMaarat = props.osat.map(osa => osa.tehtavia)
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const yhteensa = tehtavienMaarat.reduce(reducer);
    
    
    return (
        <div>
            <p>yhteensä {yhteensa} tehtävää</p>
        </div>
    )
}

export default Yhteensa