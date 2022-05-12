import React from 'react'

import Enzyme, { shallow } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'

import NotFound from './NotFound'

Enzyme.configure({adapter: new Adapter()})

describe("When NotFound renders", () => {
    it("displays a Page Not Found", () => {
      const renderedNotFound = shallow(<NotFound />)
      const notFoundText = renderedNotFound.find("h2").text()
      expect(notFoundText).toEqual('Page Not Found')
    })
})