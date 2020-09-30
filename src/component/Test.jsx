import React, { Component } from 'react'

class Test extends Component{
    render(){
        return(
            <div>
                <h1>Hi i am {this.props.name}</h1>
            </div>
        )
    }
}

export default Test