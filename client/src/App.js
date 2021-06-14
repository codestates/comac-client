import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './pages/login'   
import Signup from './pages/Signup'
import Mypage from './pages/Mypage'
import Home from './pages/Home'
import PostingAndCommentList from './components/PostingAndCommentList'
import './pages/Home.css'
// react-router-dom 구현

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={PostingAndCommentList} />
        <Route path="/signup" component={Signup} />
        <Route path="/Mypage" component={Mypage} />
        <Route path="/Home" component={Home} />   
      </Switch>
    </Router>    
  );
}

export default App;
