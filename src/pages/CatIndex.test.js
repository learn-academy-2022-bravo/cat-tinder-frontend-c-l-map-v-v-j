import React from 'react'

import Enzyme, { shallow } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'

import CatIndex from './CatIndex'

Enzyme.configure({adapter: new Adapter()})

describe("When CatIndex renders", () => {
    it(" displays a heading", () => {
      const catIndex = shallow(<CatIndex />)
      const renderedCatIndexText = catIndex.find("h3").text()
      expect(renderedCatIndexText).toEqual('Cat Index')
    })
})