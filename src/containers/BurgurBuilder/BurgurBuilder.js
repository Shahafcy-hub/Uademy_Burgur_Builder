import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Burgur from '../../components/Burgur/Burgur';
import BuildControls from '../../components/Burgur/BuildControls/BuildControls';


class BurgurBuilder extends Component{
    state = {
        salad: 0,
        bacon: 0,
        cheese:0,
        meat:0,
    }

    render(){
        return(
            <Aux>
                <Burgur ingredients = {this.state}/>
                <BuildControls/>
            </Aux>
        )
    }
}

export default BurgurBuilder;