import React, { useState } from 'react'

// Pages
import {
  Auth,
  Resolution,
  Role,
  Store,
  User,
} from 'freenit'
import Landing from 'pages/landing'
import Gallery from 'pages/gallery'
import Profile from 'pages/profile'
import { withRouter } from 'react-router-dom'

// Templates
import { EmptyTemplate } from 'freenit'


export const data = {}


const StoreProvider = (props) => {
  const store = {
    auth: new Auth.store(useState(Auth.initial.detail)),
    history: props.history,
    landing: new Landing.store(useState(Landing.initial.detail)),
    notification: new EmptyTemplate.store(
      useState(EmptyTemplate.initial.detail),
    ),
    gallery: new Gallery.store(
      useState(Gallery.initial.detail),
      useState(Gallery.initial.detail),
    ),
    profile: new Profile.store(
      useState(Profile.initial.detail),
    ),
    resolution: new Resolution.store(useState(Resolution.initial.detail)),
    role: new Role.store(
      useState(Role.initial.detail),
      useState(Role.initial.list),
    ),
    user: new User.store(
      useState(User.initial.detail),
      useState(User.initial.list),
    ),
  }
  data.store = store
  return (
    <Store.Provider value={store}>
      {props.children}
    </Store.Provider>
  )
}


export default withRouter(StoreProvider)
