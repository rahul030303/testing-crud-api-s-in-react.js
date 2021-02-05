import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Link,  Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ShowIssues from './components/ShowIssues';
import AddIssue from './components/AddIssues';
import IssueDetail from './components/IssueDetails';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="App">
   
    <Navbar/>
    
    <Switch>
                <Route exact path="/" render={ props => <Home/> } />
                <Route  path="/login" component={Login}/>
                <ProtectedRoute  path="/dashboard" component={Dashboard} />
                <ProtectedRoute path="/show-issues" component={ShowIssues} />
                <ProtectedRoute path="/add-issues" component={AddIssue} />
                <ProtectedRoute exact path="/issue-details/:id" component={IssueDetail} />
    </Switch>
    </div>
  );
}

export default App;

