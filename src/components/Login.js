import React,{Component} from 'react';
import AuthService from '../services/AuthService';
import axios from 'axios';

class Login extends Component{

    constructor(props){
        super(props);
        this.state ={
            userName:"",
            password:""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.authService = new AuthService();
    }


    handleChange(event){
        this.setState({[event.target.name]:event.target.value});
     }


    handleSubmit(e){
        e.preventDefault();
        this.authService.isUserAuthorized(this.state)
        .then(response=>{
            localStorage.setItem("token", response.data.accessToken.token);
            console.log(response)
        })
        .catch(error=>{
            console.log(error);
        })
    }

    render(){
        const {userName,password} = this.state ;
    return(
        <div>
        <form onSubmit={this.handleSubmit}>
        <input type="text" name="userName" value={userName} placeholder="Enter email" onChange={ this.handleChange.bind(this)} >
        </input> <br></br>
        <br></br>
        <input type="password" name="password" value={password} placeholder="Enter password"  onChange={ this.handleChange.bind(this)}></input>
        <br></br><br></br>
       
       
        <button type="submit">login</button>
        </form>
        </div>
    )}
}

export default Login;

