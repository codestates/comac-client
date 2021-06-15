import react, { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Login from './pages/login'   
import Signup from './pages/Signup'
import Mypage from './pages/Mypage'
import Home from './pages/Home'
import Writing from './pages/Writingpage'
import './pages/Home.css'
import axios from 'axios'
// react-router-dom 구현

function App() {
  const [ isLogin, setIsLogin ] = useState(false);
  const [ userInfo, setUserInfo ] = useState({});
  const [ accessToken, setAccessToken] = useState("");

  const handleResponseSuccess = async (token) => {
    const objToken = { Authorization: `Bearer ${token}`}
    setIsLogin(true)
    setAccessToken(objToken)
    const url = "https://localhost:3000/user"
    await axios.get(url, { 
      headers: accessToken // 객체형태의 토큰
    })
    .then(({ data }) => { // userinfo
      setUserInfo(data)  
    })
  }

  return (
    <Router>
    <Switch>
      <Route 
        exact path="/"
        render={() => {
          return (
            isLogin ? <Redirect to='/home' />
            : <Login handleResponseSuccess={handleResponseSuccess} />
          )
        }}/>
      <Route 
        path="/signup"
        render={() => <Signup />}/>
      <Route 
        path="/mypage"
        render={() => <Mypage userInfo={userInfo}/>}/>
      <Route 
        path="/home"
        render={() => <Home userInfo={userInfo}/>}/>
      <Route 
        path="/writing"
        render={() => <Writing userInfo={userInfo}/>}/>
    </Switch> 
  </Router>  
  );
}



export default App;
