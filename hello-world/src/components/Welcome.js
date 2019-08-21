import React, { Component } from 'react';

class Welcome extends Component{
    render(){
        const {name, heroName} = this.props  // Destructuring Props 2nd way
        //const { state1, state2 } = this.state // Destructuring state objects
        return <h1> Welcome {name} a.k.a {heroName} </h1>
    }
}

export default Welcome