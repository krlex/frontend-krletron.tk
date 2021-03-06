import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Pages
import {
  Auth,
  NoPage,
  rest,
} from 'freenit'
import Dashboard from 'pages/dashboard'
import About from 'pages/about'
import Blog from 'pages/blog'
import Landing from 'pages/landing'
import Gallery from 'pages/gallery'
import Event from 'pages/event'
import Profile from 'pages/profile'
import Role from 'pages/role'
import User from 'pages/user'


const API_ROOT = '/api/v0'
window.rest = rest(API_ROOT)
window.rest.API_ROOT = API_ROOT


const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing.detail} />
      <Route exact path="/about" component={About.detail} />
      <Route exact path="/blog" component={Blog.detail} />
      <Route exact path="/confirm/:token" component={Auth.confirm} />
      <Route exact path="/dashboard" component={Dashboard.detail} />
      <Route exact path="/login" component={Auth.login} />
      <Route exact path="/profile" component={Profile.detail} />
      <Route exact path="/event/:year" component={Event.detail} />
      <Route exact path="/events" component={Event.list} />
      <Route exact path="/register" component={Auth.register} />
      <Route exact path="/reset" component={Auth.reset} />
      <Route exact path="/reset/:token" component={Auth.changePassword} />
      <Route exact path="/role/:id" component={Role.detail} />
      <Route exact path="/roles" component={Role.list} />
      <Route exact path="/roles/:page" component={Role.list} />
      <Route exact path="/user/:id" component={User.detail} />
      <Route exact path="/users" component={User.list} />
      <Route exact path="/users/:page" component={User.list} />
      <Route exact path="/:year/gallery" component={Gallery.detail} />
      <Route path="*" component={NoPage.detail} />
    </Switch>
  )
}


export default Routing
