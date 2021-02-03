import {Component} from 'react';
import axios from 'axios';


class AuthService extends Component{

    constructor(props){
        super(props);
        this.token = localStorage.getItem('token');
        console.log(this.token)
    }


    isUserAuthorized = async (user) =>{
        return axios.post("http://stapi.wispa.me/api/Auth/login",user);
     }

    getToken= async (token)=>{
        this.setState({token:token})
    }
    
}


export default AuthService;