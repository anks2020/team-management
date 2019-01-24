import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import LandingScreen from './containers/Screens/Landing Screen';
import AddPlayerScreen  from './containers/Screens/Add Player Screen';
import DeletePlayerScreen from './containers/Screens/DeletePlayerScreen';
import EditPlayerScreen from './containers/Screens/EditPlayerScreen';

const App = () => {
    return (
        <div >
          <Header />
          <Redirect from="/" to="/playerlist" />
          <Route exact path="/playerlist" component ={LandingScreen} />
          <Route exact path="/editPlayer" component ={EditPlayerScreen}/>
          <Route exact path="/addPlayer"  component ={AddPlayerScreen} />
          <Route exact path="/edit-delete" component ={DeletePlayerScreen} />
        </div>
    );
}
export default App;

