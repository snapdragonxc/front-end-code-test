/* eslint-disable */

import React from 'react';
import { shallow } from 'enzyme';
import Shop from './Shop';

// This is the unit test for the Shop

/* Test Fixture */
const products = [{
  "index": 0,
  "isSale": true,
  "isExclusive": false,
  "price": "$18.88",
  "productImage": "product-1.jpg",
  "productName": "Striped shirt",
  "size": ["XS", "S", "L", "XL"]
},
{
  "index": 1,
  "isSale": false,
  "isExclusive": false,
  "price": "$25.44",
  "productImage": "product-2.jpg",
  "productName": "Denim shirt",
  "size": ["XS", "S"]
},
{
  "index": 2,
  "isSale": false,
  "isExclusive": true,
  "price": "$12.93",
  "productImage": "product-3.jpg",
  "productName": "Plain cotton t-shirt",
  "size": ["S", "M"]
}];

const filter = ["Filter by size", "XS", "S", "M", "L", "XL"];
const filterValue = "Filter by size";

const props = {
  products,
  filter,
  filterValue,
  handleChange: jest.fn()
}

// Test Specs
describe('Shop', () => {
  const wrapper = shallow(<Shop {...props}/>);

  it('renders the correct number of products', () => {
    expect(wrapper.find('.product-list__item').length).toEqual(props.products.length);
  });

  it('renders the correct number of filters', () => {
    expect(wrapper.find('option').length).toEqual(props.filter.length);
  })

  it('renders the title', () => {
    expect(wrapper.find('h1').text()).toEqual("Women's tops");
  });

  it('renders the correct number of sale items', () => {
    expect(wrapper.find('.product-list__tab--sale').length).toEqual(1);
  });

  it('renders the correct number of exclusive items', () => {
    expect(wrapper.find('.product-list__tab--exclusive').length).toEqual(1);
  });

  describe('it calls the onChange callback', () => {
    jest.spyOn(props, 'handleChange');
    const event = { target: { value: 'L' }};
    wrapper.find('.header__sort').simulate('change', event);
    expect(props.handleChange).toHaveBeenCalled();
  })
});
