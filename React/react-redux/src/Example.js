import React, { Component } from 'react'
import { connect } from 'react-redux';

export class Example extends Component {
    constructor(props){
        super(props)
        this.state = {
            input: ""
        }
    }

    handleOnChange = e => this.setState({[e.target.name]: e.target.value})

    render() {
        var {input} = this.state
        return (
            <div>
                <p>Please enter your name</p>
                <input type="text" name="input" value={input} onChange={this.handleOnChange} />
                <button onClick={() => this.props.greeting(input)}>GREETING</button>
                <p>{this.props.message}</p>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    message: state.example.message
})

const mapDispatchToProps = dispatch => ({
    greeting: input => dispatch({ type: "getGreeting", name: input })
})

export default connect(mapStateToProps, mapDispatchToProps)(Example)
