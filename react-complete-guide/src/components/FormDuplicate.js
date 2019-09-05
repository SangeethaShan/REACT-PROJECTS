import React, { Component } from 'react'


class FormDuplicate extends Component{
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }
    handleInputChangeEmail = event => {      
        this.setState({
            email: event.target.value           
        })
    }
    handleInputChangePassword = event => {
        this.setState({
            password: event.target.value
        })
    }
    handleFormSubmit = event => {      
        const { email, password } = this.state
        alert("Login form sumbited with:" + email + password )
        event.preventDefault();
    }
    render(){
        return(
            <div className="duplicate-form">
                <form onSubmit={this.handleFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="text"
                            name="email"
                            className="form-control"
                            value={this.state.email}
                            onChange={this.handleInputChangeEmail} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            value={this.state.password}
                            onChange={this.handleInputChangePassword}
                            />
                    </div> 
                    <button type="submit"> Sign up</button>
                </form>
            </div>
        )
    }
}

export default FormDuplicate