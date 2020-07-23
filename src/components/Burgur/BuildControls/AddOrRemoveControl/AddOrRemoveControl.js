import React from 'react';
import classes from './AddOrRemoveControl.css';

const addOrRemoveControl = (props) =>{
    return(
        <div className = {classes.BuildControl}>
        <div className = {classes.Label}>{props.label}</div>
        <button className = {classes.Less}>Less</button>
        <button className = {classes.Morel}>More</button>
        <div className = {classes.Label}>{props.value}</div>
    </div>
    );
    
};

export default addOrRemoveControl;