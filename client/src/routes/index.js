import React from  'react'
import {Route,BrowserRouter } from 'react-router-dom'
import HelloWorld from '../screens/helloWorld'
import FacebookLogin from '../screens/LoginFacebook'

const Routes =()=>(
  <BrowserRouter>
      <Route exact path="/" component={HelloWorld}/>
      <Route exact path="/Login" component={FacebookLogin}/>


  </BrowserRouter>
)

export default Routes
