import React from 'react'

import Enzyme, { shallow } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'

import CatNew from './CatNew'

Enzyme.configure({adapter: new Adapter()})

describe("When CatNew renders", () => {
    let newestCat 
    beforeEach(() => {
       newestCat = shallow(<CatNew />)
    })
    it(" displays a form", () => {
      const catNewForm = newestCat.find("Form")
      expect(catNewForm.length).toEqual(1)
    })
    it(" displays cat name input", () => {
      const catNewNameInput = newestCat.find('[name="name"]')
      expect(catNewNameInput.length).toEqual(1)
    })
})