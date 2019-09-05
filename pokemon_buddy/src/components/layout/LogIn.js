import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { async } from 'q';
import Axios from 'axios';

export default class LogIn extends Component {
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
  
    LogInUser = async ()=>{
        try {
            const body = {username: this.state.userName, password: this.state.password}
        const logInResponse = await Axios.post('/login', body)
        this.props.fetchUser()
        this.props.history.push('/home')
        console.log(logInResponse.data)
       
        } catch (error) {
            alert('NO')
        }
        
    }
    render() {
        return (
                   <div className ="wrapper">
                    <div className ="form-wrapper ">
                        <h1 className="LogIn">Log In</h1>
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
                        {/* <Link to="/Home"> */}
                        <button className="loginButton" onClick={this.LogInUser} > Log In</button>
                        {/* </Link> */}
                        <Link to="/CreateAccount">
                        <button className="loginButton" >Create an Account</button>
                        </Link>
                        </div>
                    </div>
                </div>
        )
    }
}
