import {Component} from 'react';
import axios from 'axios';
import {token} from '../utils';

class AuthService extends Component{

    constructor(props){
        super(props);
        console.log(token)
    }


    isUserAuthorized = async (user) =>{
        return axios.post("http://stapi.wispa.me/api/Auth/login",user);
     } 
}


export default AuthService;


