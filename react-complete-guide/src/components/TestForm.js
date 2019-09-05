import React, { Component } from 'react';

class TestForm extends Component {
    constructor(props){
        super(props)

        this.state={
           /*  email: '',
            password: '' */
            task: ''
        }
    }
   /*  inputHandler = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    submitHandler = event => {        
        console.log(this.state)
        alert(`You logged in Successfull with ${this.state.email} and ${this.state.password}`)
        event.preventDefault();
    } */

    render() {
        const names = ['san', 'geetha', 'deepa']
        const nameList = names.map((name) => <li> {name} </li>)
        return (
            <div>
               {/*  <p>{this.props.myObj.a}</p>
                <p>{this.props.myArray[1]}</p>
                <p>{this.props.myFun(10, 25)}</p>

                <p>{JSON.stringify(this.props.myObj)}</p>
                <form onSubmit={this.submitHandler}>
                    <input
                        type="text"
                        placeholder="Email"
                        name="email"
                        value={this.state.email}
                        onChange={this.inputHandler}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={this.state.password}
                        onChange={this.inputHandler}
                    />
                    <button type="submit">Login here</button>
                </form> */}

               {/*  taskInputHandler = event => {
                    this.setState({
                        task: event.target.value
                    })
                }
                addTaskHandler = () =>{
                    event.preventDefault()

                }
 */}
                <form onSubmit={this.addTaskHandler}>
                    <input 
                        type="text"
                        placeholder="Enter new task here"
                        name="task"
                        value={this.state.task}
                        onChange={this.taskInputHandler} 
                        />
                        <button type="submit"> Add Task</button>
                </form>
                <ul>
                    {nameList}
                </ul>
            </div>
        )
    }

}

export default TestForm;