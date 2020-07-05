import React, { Component } from 'react';
import './App.css';
import ROUTERS from './data/routers';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBars,
  faChevronLeft,
  faChevronRight,
  faCopyright,
  faTimes,
  faHome,
  faHotel,
  faMapMarkerAlt,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

library.add(faTimes);
library.add(faBars);
library.add(faChevronLeft);
library.add(faChevronRight);
library.add(faCopyright);
library.add(faHome);
library.add(faMapMarkerAlt);
library.add(faHotel);
library.add(faPhone);

class App extends Component {
  render() {
    return (
      <div className="App h-screen w-screen">
        <Router>
          <div className="h-screen w-screen">
            {ROUTERS.map(
              ({ path, component: Comp, exact, hideMenu, data }, key) => (
                <Route
                  key={key}
                  exact
                  path={path}
                  render={props => <Comp {...props} data={data} />}
                />
              ),
            )}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
