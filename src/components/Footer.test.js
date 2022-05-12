import React from 'react'

import Enzyme, { shallow } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'

import Footer from './Footer'

Enzyme.configure({adapter: new Adapter()})

describe("When Footer renders", () => {
    it(" shows 3 nav links", () => {
      const renderedFooter = shallow(<Footer />)
      const renderedNavLinks = renderedFooter.find("NavLink")
      expect(renderedNavLinks.length).toEqual(3)
    })
})