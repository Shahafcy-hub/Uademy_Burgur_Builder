import React from 'react';
import classes from './BuildControls.css';
import Controls from './AddOrRemoveControl/AddOrRemoveControl';

const controls =[
    {label: 'Salad', type:'salad'},
    {label: 'Bacon', type:'bacon'},
    {label: 'Cheese', type:'cheese'},
    {label: 'Meat', type:'meat'},

];

const buildControls = (props) => (
<div className ={classes.BuildControls}>
{controls.map(ctrl =>(
<Controls 
        key={ctrl.label} label = {ctrl.label} 
        add = {()=>props.ingredientAdded(ctrl.type)} 
        remove = {()=> props.ingredientRemoved(ctrl.type)}
        />))}
<p>Total Price: <strong>{props.price.toFixed(2)}</strong> shekkel</p>

<button className = {classes.OrderButton} disabled = {!props.perchaseable}>Checkout</button>
</div>
);

export default buildControls;