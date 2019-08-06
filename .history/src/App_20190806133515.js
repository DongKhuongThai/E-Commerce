import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Switch, Route, Link, NavLink, Redirect} from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
  return (
    <div>
      
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPape}/>
      </Switch>
    </div>
  );
  }
}
// }

export default App;
