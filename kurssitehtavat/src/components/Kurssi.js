import React from 'react';
import Otsikko from './Otsikko';
import Sisalto from './Sisalto';
import Yhteensa from './Yhteensa';

// Kaikki ovat omina moduuleinaan nyt. Yolo.
const Kurssi = (props) => {
    return (
        <div>
            <Otsikko kurssinNimi={props.kurssi.nimi} />
            <Sisalto osat={props.kurssi.osat} />
            <Yhteensa osat={props.kurssi.osat} />
        </div>
    )
}

export default Kurssi