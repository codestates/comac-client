import react, { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './pages/login'   
import Signup from './pages/Signup'
import Mypage from './pages/Mypage'
import Home from './pages/Home'
import Writing from './pages/Writingpage'
import './pages/Home.css'
// react-router-dom 구현

function App() {
  const [login, setLogin] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/Signup" component={Signup} />
        <Route path="/Mypage" component={Mypage} />
        <Route path="/Home" component={Home} />   
        <Route path="/Writing" component={Writing} />   
      </Switch>
    </Router>    
  );
}

export default App;
