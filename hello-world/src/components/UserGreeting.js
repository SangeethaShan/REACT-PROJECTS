import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
    render() {
       
        //1st way
        /* if(this.state.isLoggedIn){
            return(
                <div>Welcome Vishwas</div>
            )
        }else{
            return(
                <div>Welcome Guest</div>
            )
        } */
        //2nd way : element variables
       /*  let message
        if(this.state.isLoggedIn){
            message = <div>Welcome Vishwas</div>
        }else{
            message = <div>Welcome Guest</div>
        }
        return <div>{message}</div> */ 

        //3rd approach : ternary conditional operator

        /* return(
            this.state.isLoggedIn ? 
            <div>Welcome Vishwas!!</div> : 
            <div>Welcome Guest!!</div>
        ) */

        //4th: short circuit operator approach
        return this.state.isLoggedIn && <div>Welcome Vishwas!!</div> 
    }
}

export default UserGreeting
