import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Redirect, useHistory } from 'react-router-dom'
import Login from './pages/login'   
import Signup from './pages/Signup'
import Mypage from './pages/Mypage'
import Home from './pages/Home'
import Writing from './pages/Writingpage'
import './pages/Home.css'
import server from './apis/server'

function App() {
  const [ isLogin, setIsLogin ] = useState(false);
  const [ userInfo ] = useState(JSON.parse(localStorage.getItem('userInfo')));
  const [ accessToken, setAccessToken ] = useState(JSON.parse(localStorage.getItem('accessToken')));
  let history = useHistory();

  
  const handleResponseSuccess = async (token) => {
    if(token) {
      await server.get(`/user`, { 
        headers: { Authorization: `Bearer ${token}`}  // 객체형태의 토큰
      })
      .then(({ data }) => {  // userinfo
        const { id, username, name, generation, img, createdAt} = data.data
        setIsLogin(true)
        localStorage.setItem('accessToken', JSON.stringify({ Authorization: `Bearer ${token}` }))
        localStorage.setItem('userInfo', JSON.stringify({ id, username, name, generation, img, createdAt }))
      })
      window.location.reload();
    }
  }

  const handleLogout = () => {
    // localStorage.removeItem('accessToken')
    // localStorage.removeItem('userInfo')
    setAccessToken(null)
    localStorage.clear()
    // console.log(isLogin)
    // console.log(accessToken)
    server.post('/logout', {
      headers: accessToken,
    })
    // return <Redirect to='/' />
    // history.push('/')
  }
  
  useEffect(() => {
    // console.log('wow!')
    if(accessToken) setIsLogin(true)
    else setIsLogin(false);
  },[accessToken])

  return (
    <Router>
    <Switch>
      <Route
        exact 
        path="/"
        render={() => {
          return (
            <div>
              { isLogin ? <Redirect to='/home' />
              : <Login handleResponseSuccess={handleResponseSuccess} />}
            </div>
            )
        }}/>
      <Route 
        path="/signup"
        render={() => <Signup />}/>
      <Route 
        path="/mypage"
        render={() => <Mypage userInfo={userInfo} accessToken={accessToken} handleLogout={handleLogout}/>}/>
      <Route
        path="/home"
        render={() => <Home userInfo={userInfo} accessToken={accessToken} handleLogout={handleLogout}/>}/>

      <Route 
        path="/writing"
        render={() => <Writing userInfo={userInfo} accessToken={accessToken} />}/>
    </Switch> 
  </Router>  
  );
}



export default App;
