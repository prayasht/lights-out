import React from 'react'
import { mount } from 'enzyme'
import Application from '../../../src/presenters/application'
import Repo from '../../../src/repo'

it('mounts without exploding', function () {
  const el = mount(<Application repo={new Repo()} />)
  expect(el).toBeTruthy()
})
