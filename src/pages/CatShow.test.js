import React from 'react'

import Enzyme, { shallow } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'

import CatShow from './CatShow'

Enzyme.configure({adapter: new Adapter()})

describe("When CatShowrenders", () => {
    let cat = {
      name: "Bob",
      id: 4,
      age: 36,
      enjoys: "long walks on the beach"
    }
    it(" displays a heading", () => {
      const catShow = shallow(<CatShow cat={cat} />)
      const renderedCatShowText = catShow.find("h2").text()
      expect(renderedCatShowText).toEqual('Cat Show')
    })
})