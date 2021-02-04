import React,{Component} from 'react';

class AddIssue extends Component{
    render(){
        return(
            <React.Fragment>
                <form>
                    Issue Id: <input type="text" name="id" placeholder="" />                  <br></br><br></br>   
                    Issue Name: <input type="text" name="name" placeholder="" /><br></br><br></br>
                    Description: <input type="text" name="description" placeholder="" /><br></br><br></br>
                    Target Date: <input type="text" name="targetDate" placeholder="" /><br></br><br></br>
                    Resolved Date: <input type="text" name="resolvedDate" placeholder="" /><br></br><br></br>
                    Created By: <input type="text" name="createdBy" placeholder="" /><br></br><br></br>
                    Created On: <input type="text" name="createdOn" placeholder="" /><br></br><br></br>
                    Modified By: <input type="text" name="modifiedBy" placeholder="" /><br></br><br></br>
                    Modified On: <input type="text" name="modifiedOn" placeholder="" /><br></br><br></br>
                    Company Id: <input type="text" name="companyId" placeholder="" /><br></br><br></br>

                    <button onClick={this.addNewIssue}>Add Issue</button>
                </form>
            </React.Fragment>
        )
    }
}

export default AddIssue;
