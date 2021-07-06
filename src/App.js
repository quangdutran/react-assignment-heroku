import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Home } from './components/Home';
import { Post } from './components/Post';
import { Profile } from './components/Profile';
import { Login } from './components/Login';
import PostDetail from './components/PostDetail';

function App() {
  const loggedInUser = localStorage.getItem("userInfo");
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={Post} />
        <Route exact path="/posts/:id" component={PostDetail} />
        <Route exact path="/profile" component={Profile} />
        {loggedInUser ? (
          <Route exact path="/logout" key="logout">
          <Login action="logout"/>
          </Route>
        ) : (
          <Route exact path="/login" key="login">
          <Login action="login" />
          </Route>
        )}
        
      </Switch>
      </Router>
      
    </div>
  );
}

export default App;
