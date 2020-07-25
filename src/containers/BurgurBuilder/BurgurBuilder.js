import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Burgur from '../../components/Burgur/Burgur';
import BuildControls from '../../components/Burgur/BuildControls/BuildControls';

const INGREDIANT_PRICES = {
    salad: 1,
    cheese: 2,
    meat: 3,
    bacon: 2.5,
};

const MINIMUM_PRICE = 15;

class BurgurBuilder extends Component{
    state = {
        ingredients:{
        salad: 0,
        bacon: 0,
        cheese:0,
        meat:0,
        },
        totalPrice: MINIMUM_PRICE,
        perchaseable: false
    }

    addIngrediantHandler = (type) =>{
        const oldAmount = this.state.ingredients[type];
        const newAmount = oldAmount+1;
        const updatedIngrediants = {...this.state.ingredients};
        updatedIngrediants[type] = newAmount;

        const priceAddition = INGREDIANT_PRICES[type];
        const newPrice = this.state.totalPrice + priceAddition;

        this.setState({totalPrice: newPrice, ingredients: updatedIngrediants, perchaseable: true});
    }

    removeIngrediantHandler = (type) =>{

        const oldAmount = this.state.ingredients[type];
        if (oldAmount !== 0){
        const newAmount =  oldAmount-1;
        const updatedIngrediants = {...this.state.ingredients};
        updatedIngrediants[type] = newAmount;

        const priceAddition = INGREDIANT_PRICES[type];
        const newPrice = this.state.totalPrice - priceAddition;

        const newPerchaseable = (newPrice !== MINIMUM_PRICE);

        this.setState({totalPrice: newPrice, ingredients: updatedIngrediants, perchaseable: newPerchaseable});
        }
        

    }

    render(){
        return(
            <Aux>
                <Burgur ingredients = {this.state.ingredients}/>
                <BuildControls 
                    ingredientAdded = {this.addIngrediantHandler} 
                    ingredientRemoved = {this.removeIngrediantHandler}
                    price = {this.state.totalPrice}
                    perchaseable = {this.state.perchaseable}/>
            </Aux>
        )
    }
}

export default BurgurBuilder;