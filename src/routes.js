import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './presenters/application'
import Main from './presenters/main'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Main} />
  </Route>
)
