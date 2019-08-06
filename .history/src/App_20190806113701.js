import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Switch, Route} from 'react-router-dom';
const User = (props) => {
  return (
    <div>Welcome to :{props.match.params.username} </div>
  );
}
function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/about' render={()=>{
          return (<div>About</div>);
        }}/>
        <Route exact path='/user/:username' component={User}/>
      </Switch>
    </div>
  );
}

export default App;
