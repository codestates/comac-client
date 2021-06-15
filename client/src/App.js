import react, { useState } from 'react'
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

const URL = 'http://localhost:3000'

function App() {
  const [ isLogin, setIsLogin ] = useState(false);
  const [ userInfo, setUserInfo ] = useState({
    id: 0,
    username: '',
    generation: '',
    img: '',
    createdAt: ''
  });
  const [ accessToken, setAccessToken] = useState("");

  const handleResponseSuccess = async (token) => {
    setAccessToken({ Authorization: `Bearer ${token}`})
    setIsLogin(true)
    await axios.get(`${URL}/api/user`, { 
      headers: accessToken  // 객체형태의 토큰
    })
    .then(({ data }) => {  // userinfo
      const { id, username, generation, img, createdAt} = data.data
      setUserInfo({ id, username, generation, img, createdAt })
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
        render={() => <Mypage userInfo={userInfo} accessToken={accessToken} />}/>
      <Route 
        path="/home"
        render={() => <Home userInfo={userInfo} accessToken={accessToken}/>}/>

      <Route 
        path="/writing"
        render={() => <Writing userInfo={userInfo} accessToken={accessToken} />}/>
    </Switch> 
  </Router>  
  );
}



export default App;
