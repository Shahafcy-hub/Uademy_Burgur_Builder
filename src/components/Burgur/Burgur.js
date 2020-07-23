import React from "react";
import classes from './Burgur.css';
import BurgurIngrediants from './BurgurIngrediants/BurgurIngrediants';

const burgur = (props) =>{
    let transformedIngreadiants = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])]
        .map((_,i) => {return <BurgurIngrediants key={igKey +i} type={igKey}/>;
    });
    }).reduce((arr, el)=>{
    return arr.concat(el)
    },[] );

    if(transformedIngreadiants.length === 0){
        transformedIngreadiants = <p>Start adding ingredients</p>
    }

    return(
        <div className = {classes.Burgur}>
            <BurgurIngrediants type = "bread-top" />
            {transformedIngreadiants}
            <BurgurIngrediants type = "bread-bottom"/>
        </div>
    );
};

export default burgur;