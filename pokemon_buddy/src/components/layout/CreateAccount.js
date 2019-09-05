import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Axios from 'axios';
export default class CreateAccount extends Component {
    state={
        userName: "",
        password: ""
    }

    handleChange = (event)=>{
        const key = event.target.id;
        const value = event.target.value;

        this.setState({
            [key]: value
        })
    }

    SignUserUp =async () => {
            try {
                const body = {username: this.state.userName, password: this.state.password}
                const newUserResponse = await Axios.post('/CreateAccount',body)
                this.props.history.push('/Login')
                console.log(newUserResponse)

            } catch (error) {
                //alert('no can dosville baby doll ')
            }
    }

    render() {
        return (
            <div className ="wrapper">
            <div className ="form-wrapper ">
                <h1 className="LogIn">Create Account</h1>
                <form  noValidate>
                  
                    <div className ="Email" >
                        <lable> User Name </lable>
                        <input id="userName"
                        type="text"
                         className="" 
                         placeholder="UserName"
                         type =" text"
                         name="Email"
                         onChange={this.handleChange}
                        noValidate/>
                    </div>
                    <div className ="Password" >
                        <lable> Password </lable>
                        <input 
                        id ="password" 
                        type="text"
                         className="" 
                         placeholder="Password"
                         type =" text"
                         name="Password"
                         onChange={this.handleChange}
                        noValidate/>
                    </div>
                   
                </form> 
                <div className="loginButtons">
              
                <Link to= "/Login">
                <button className="Back_button">Back </button>
                </Link>
                <button className="loginButton" onClick={this.SignUserUp} >Create an Account</button>
                
                </div>
            </div>
        </div>
        )
    }
}
