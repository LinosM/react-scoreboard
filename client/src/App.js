import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Scoreboard from './pages/Scoreboard';
import ControlPanel from "./pages/ControlPanel";

function App() {
  return (
    <div className="App">
      <div className="main-view">
        <Switch>
          <Route exact path="/" component={Scoreboard} />
          <Route exact path="/cp" component={ControlPanel} />
        </Switch>
      </div>
    </div>
  )
}

export default App;
