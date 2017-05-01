import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Application from './presenters/application'
import Main from './presenters/main'

export default (
  <Route path={"/"} component={Application}>
    <IndexRoute component={Main} />
  </Route>
)
