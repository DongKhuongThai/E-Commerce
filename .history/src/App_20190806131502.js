import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Switch, Route, Link, NavLink} from 'react-router-dom';
const Welcome = (props) => {
  return (
    <div>Welcome to :{props.match.params.username} </div>
  );
}
// function App() {
class App extends Reacteact.Component {
  constructor() {
    super();
    this.state={
      loggedIn:false
    }
  }
  logginHandle = () => {
    this.setState({
      loggedIn:true
    });
  }
  render() {
  return (
    <div>
      <ul>
        {/* <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/welcome/john">John</Link>
        </li>
        <li>
          <Link to="/welcome/peter">Peter</Link>
        </li> */}

        <li>
          <NavLink to="/" exact activeStyle={{color:'red'}}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" exact activeStyle={{color:'red'}}>About</NavLink>
        </li>
        <li>
          <NavLink to="/welcome/john" exact activeStyle={{color:'red'}}>John</NavLink>
        </li>
        <li>
          <NavLink to="/welcome/peter" exact activeStyle={{color:'red'}}>Peter</NavLink>
        </li>
      </ul>
      <input type="button" value = "Login" onClick={() => {this.logginHandle}}/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/about' render={()=>{
          return (<div>About</div>);
        }}/>
        <Route exact path='/welcome/:username' component={Welcome}/>
      </Switch>
    </div>
  );
  }
}
// }

export default App;
