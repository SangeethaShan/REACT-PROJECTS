import React, { Component } from 'react'
import withCounter from './WithCounter'

class HourCounter extends Component {
    render() {
        const {count, incrementCount} = this.props
        return (
            <div>
                <h1 onMouseOver={incrementCount} > Hovered {count} Times</h1>
            </div>
        )
    }
}

export default withCounter(HourCounter, 10)
