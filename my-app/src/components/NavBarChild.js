import React from 'react'

function NavBarChild(props) {
    return (
        <div>
            {
            props.isLoggedIn 
            ? 
            (<button onClick={props.handleClick}>Login</button>) 
            : 
            (
            <form action="">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" />
                <button onClick={props.handleClick}>Submit</button>
            </form>
            )
            }
        </div>
    )
}

export default NavBarChild