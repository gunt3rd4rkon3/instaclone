import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom'
import './App.css';
import Login from './containers/Auth/Login'
import Register from './containers/Auth/Register'
import NewsFeed from './containers/NewsFeed'
import NavBar from './components/NavBar'
import Profile from './containers/Profile'


class App extends React.Component {
  render(){
    return (
      <BrowserRouter>
        <Route exact path='/' component={Login}/>
        <Route exact path='/register' component={Register}/>
        <Route path='/app' component={NavBar}/>
        <Route exact path='/app/newsfeed' component={NewsFeed}/>
        <Route exact path='/app/profile' component={Profile}/>
      </BrowserRouter>
  );
}
}

export default App;
