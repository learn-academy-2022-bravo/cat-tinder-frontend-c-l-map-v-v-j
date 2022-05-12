import React from 'react'

import Enzyme, { shallow } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'

import Header from './Header'

Enzyme.configure({adapter: new Adapter()})

describe("When Header renders", () => {
    it(" shows 3 nav links", () => {
      const renderedHeader = shallow(<Header />)
      const renderedNavLinks = renderedHeader.find("NavLink")
      expect(renderedNavLinks.length).toEqual(3)
    })
})