import React,{Component} from 'react';

class ShowIssues extends Component{

    constructor(props){
        super(props);
        this.issues = localStorage.getItem('issues');
        console.log(this.issues)
    }

    render(){
        return(
            <div>
            Hello
            </div>
        )
    }
}

export default ShowIssues;
