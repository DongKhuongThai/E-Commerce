import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Switch, Route, Link} from 'react-router-dom';
const Welcome = (props) => {
  return (
    <div>Welcome to :{props.match.params.username} </div>
  );
}
function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
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

export default App;
