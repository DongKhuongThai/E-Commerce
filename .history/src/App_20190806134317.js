import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Switch, Route, Link, NavLink, Redirect} from 'react-router-dom';
import ShopPage from './pages/shoppage/shoppage.component';

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
  return (
    <div>
      
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
  }
}
// }

export default App;
