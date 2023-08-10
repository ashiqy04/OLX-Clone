import React, {useEffect, useContext} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Signup from './Pages/Signup'
import './App.css';
import Post from './store/PostContext'

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import Login from './Components/Login/Login';
import Create from './Pages/Create'
import view from './Pages/ViewPost'
import { AuthContext, FirebaseContext } from './store/Context';
import View from './Components/View/View';

function App() {
  const {setUser} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
    
  })

  return (
    <div>
    <Post>
      <Router>
        <Route exact path = '/'>
         <Home />
        </Route>

        <Route path = '/signup'>
         <Signup />
        </Route>

        <Route path = '/login'>
         <Login />
        </Route>

        <Route path = '/create'>
         <Create />
        </Route>

        <Route path = '/view'>
        <View/>
        </Route>

      </Router>
      
      </Post>

      
    </div>
  );
}

export default App;
