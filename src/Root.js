import React, {Component} from 'react';
import Home from './views/Home';
import Contact from './views/Contact';
import About from './views/About'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { routes } from './routes/routes';
class Root extends Component {

  render(){
    return(
     <BrowserRouter>
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route exact path={routes.contact} component={Contact} />
        <Route exact path={routes.about} component={About} />
      </Switch>
     </BrowserRouter>
    )
  }
}
export default Root;
