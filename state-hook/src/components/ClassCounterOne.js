import React, { Component } from 'react'

class ClassCounterOne extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0,
             name: ''
        }
    }
    componentDidMount(){
        document.title = `Clicked ${this.state.count} times`
    }
    componentDidUpdate(prevProps, prevState){
        console.log("Updating Document tilte")
        document.title = `Clicked ${this.state.count} times`
    }
    render() {
        return (
            <div>
                <input 
                    type="text"
                    onChange={e => this.setState({name: e.target.value})}
                />
                <button onClick={() => this.setState({count: this.state.count +1})} >
                    Clicked {this.state.count} times
                </button>
            </div>
        )
    }
}

export default ClassCounterOne
