import React, {useState} from 'react';
import classes from './Buttons.module.css'

const Buttons = (props) => {

    return (
       <button className={classes.modalBtn} onClick={props.onClick}>
            {props.children}
       </button>
    );
};

export default Buttons;