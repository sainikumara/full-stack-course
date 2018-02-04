import React from 'react';
import Osa from './Osa';

const Sisalto = (props) => {
    return (
        <div>
            <ul>
                {props.osat.map(osa => <Osa key={osa.id} osa={osa} />)}
            </ul>
        </div>
    )
}

export default Sisalto