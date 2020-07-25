import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Burgur from '../../components/Burgur/Burgur';
import BuildControls from '../../components/Burgur/BuildControls/BuildControls';

const INGREDIANT_PRICES = {
    salad: 1,
    cheese: 2,
    meat: 3,
    bacon: 2,
};

class BurgurBuilder extends Component{
    state = {
        ingredients:{
        salad: 0,
        bacon: 0,
        cheese:0,
        meat:0,
        },
        totalPrice: 15
    }

    addIngrediantHandler = (type) =>{
        const oldAmount = this.state.ingredients[type];
        const newAmount = oldAmount+1;
        const updatedIngrediants = {...this.state.ingredients};
        updatedIngrediants[type] = newAmount;

        const priceAddition = INGREDIANT_PRICES[type];
        const newPrice = this.state.totalPrice + priceAddition;

        this.setState({totalPrice: newPrice, ingredients: updatedIngrediants});
    }

    removeIngrediantHandler = (type) =>{

        const oldAmount = this.state.ingredients[type];
        if (oldAmount !== 0){
        const newAmount =  oldAmount-1;
        const updatedIngrediants = {...this.state.ingredients};
        updatedIngrediants[type] = newAmount;

        const priceAddition = INGREDIANT_PRICES[type];
        const newPrice = this.state.totalPrice - priceAddition;

        this.setState({totalPrice: newPrice, ingredients: updatedIngrediants});
        }
        

    }

    render(){
        return(
            <Aux>
                <Burgur ingredients = {this.state.ingredients}/>
                <BuildControls 
                    ingredientAdded = {this.addIngrediantHandler} 
                    ingredientRemoved = {this.removeIngrediantHandler}/>
            </Aux>
        )
    }
}

export default BurgurBuilder;