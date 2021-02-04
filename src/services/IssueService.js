import {Component} from 'react';
import axios from 'axios';

class IssueService extends Component{

    constructor(props){
        super(props);
        this.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJicmF2ZXVzZXIiLCJqdGkiOiIyN2M1OTZjNi0yNDdjLTQ2OTQtODk2My0wYTgzZGExOWNhNzUiLCJpYXQiOjE2MTIzMzI1ODIsInJvbCI6ImFwaV9hY2Nlc3MiLCJpZCI6IjhjYzg0OTRkLTljNDYtNGFiNC05ZmJkLTc3ZTA1Nzk0ZjY2NyIsIm5iZiI6MTYxMjMzMjU4MSwiZXhwIjoxNjQzODY4NTgxLCJpc3MiOiJ3ZWJBcGkiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjUwMDAvIn0.cq2H8_L5Ug3TkmTNlBG3OGZR2NGzqx_kOrxYkWDUSZ0';
    }


    getIssues= async () =>{
        return axios.get('http://stapi.wispa.me/api/Issues/Get',{
         headers: {
           Authorization: 'Bearer ' + this.token //the token is a variable which holds the token
         }
        });
     }
    
    getAllIssues= async () =>{
       return axios.get('http://stapi.wispa.me/api/Issues/GetAll',{
        headers: {
          Authorization: 'Bearer ' + this.token //the token is a variable which holds the token
        }
       });
    }

    saveData = async ()=>{
        return axios.post('http://stapi.wispa.me/api/Issues/Save',{
            "id": 268,
            "name": "string",
            "description": "string",
            "targetDate": "2021-02-03T10:02:54.905Z",
            "resolvedDate": "2021-02-03T10:02:54.905Z",
            "createdBy": 0,
            "createdOn": "2021-02-03T10:02:54.905Z",
            "modifiedBy": 0,
            "modifiedOn": "2021-02-03T10:02:54.905Z",
            "companyId": 16
          }
        ,{
            headers: {
              Authorization: 'Bearer ' + this.token //the token is a variable which holds the token
            }
           })
    }

}


export default IssueService;

