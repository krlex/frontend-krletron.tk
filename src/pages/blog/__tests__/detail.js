import React from 'react'
import { mount } from 'enzyme'
import { act } from 'react-dom/test-utils'
import TestApp from 'TestApp'


it('blog', async () => {
  let wrapper
  await act(async () => {
    wrapper = await mount(
      <TestApp path="/blog" />
    )
  })
  let title = wrapper.find('a[data-id="app"]')
  expect(title.text()).toEqual('NOTHING ABOUT ME')
})
