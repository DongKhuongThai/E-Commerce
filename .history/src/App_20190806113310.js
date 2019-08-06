import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Switch, Route} from 'react-router-dom';
function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/about/' render={()=>{
          return (<div>About</div>);
        }}/>
      </Switch>
    </div>
  );
}

export default App;
