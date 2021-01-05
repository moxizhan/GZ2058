import React, { Component } from 'react'

export default class NewTodo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: ''
        }
    }

    changeHandler = (e) => {
        // console.log(e.target.value);
        this.setState({ value: e.target.value })
    }
    submitHandler = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state.value)
    }
    render() {
        return (
            <form action="#" method="get" onSubmit={this.submitHandler}>
                <input type="text" name="new" onChange={this.changeHandler} />
                <input type="submit" value="新增" />
            </form>
        )
    }
}
