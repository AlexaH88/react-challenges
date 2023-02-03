import React, { Component } from 'react'
import css from './css/NavBarForm.module.css'

export class NavBarForm extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            isLoggedIn: true,
            buttonText: "Login"
        }
    }

    handleClick() {
        this.setState((prevState) => {
            console.log("Previous State:", prevState)
            return {
                isLoggedIn: prevState.isLoggedIn === true ? false : true,
                buttonText: prevState.buttonText === "Login" ? "Submit" : "Login"
            }
        })
    }

    render() {
        return (
        <div className={css.NavBar}>
            <h1>My Gallery</h1>
            {
            this.state.isLoggedIn 
            ? 
            (<button onClick={() => {this.handleClick()}}>{this.state.buttonText}</button>) 
            : 
            (
            <form action="">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" />
                <button onClick={() => {this.handleClick()}}>{this.state.buttonText}</button>
            </form>
            )
            }
        </div>
        )
    }
}

export default NavBarForm