import React from 'react';
import classes from './AddOrRemoveControl.css';
//import { ProgressPlugin } from 'webpack';

const addOrRemoveControl = (props) =>{
    return(
        <div className = {classes.BuildControl}>
        <div className = {classes.Label}>{props.label}</div>
        <button className = {classes.Less} onClick = {props.remove}>Less</button>
        <button className = {classes.Morel} onClick = {props.add}>More</button>
        <div className = {classes.Label}>{props.value}</div>
    </div>
    );
    
};

export default addOrRemoveControl;