import React from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import Login from './containers/Auth/Login'
import Register from './containers/Auth/Register'
import NewsFeed from './containers/NewsFeed'
import NavBar from './components/NavBar'
import Profile from './containers/Profile'
import services from './services'
import {History} from 'history'
interface IAppProps {
  history: History
}
class App extends React.Component<IAppProps> {
  public state = {
    loading: true,
  }
  public componentDidMount(){
    const {auth} = services
    auth.onAuthStateChanged(user => {
      if(user){
        if(['/', '/register'].indexOf(window.location.pathname) > -1){
          const {history} = this.props
          history.push('/app/newsfeed')
        }
      } else {
        // /app/
        if(/\/app\/./.test(window.location.pathname)){
          const {history} = this.props
          history.push('/')
        }
      }
      //console.log(user)
      this.setState({
        loading: false
      })
    })
  }
  render(){
    const {loading} = this.state
    return (
      loading ? 'Loading' : <div>
        <Route exact path='/' component={Login}/>
        <Route exact path='/register' component={Register}/>
        <Route path='/app' component={NavBar}/>
        <Route exact path='/app/newsfeed' component={NewsFeed}/>
        <Route exact path='/app/profile' component={Profile}/>
      </div>
  );
}
}

export default App;
