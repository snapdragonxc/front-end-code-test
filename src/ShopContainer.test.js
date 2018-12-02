/* eslint-disable */

import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import { ShopContainer } from './ShopContainer';

// This is the unit test for the Shop Container

// Test Fixture
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

// Test Specs
describe('ShopContainer', () => {
    describe('it should fetch data', () => {
      const sandbox = sinon.sandbox.create();
      const server = sandbox.useFakeServer();
      let  wrapper;
      let instance;

      beforeEach((done) => {
        wrapper = shallow(<ShopContainer/>);
        instance = wrapper.instance();
        instance.componentDidMount(done);
        setTimeout(
          () => server.respond(
          [200,
          { 'Content-Type': 'application/json' },
          JSON.stringify(products)
        ]));
      });

      it('Loads the products', () => {
        expect(instance.products).toEqual(products);
      });

      it('Creates the filter', () => {
        expect(instance.filter.sort()).toEqual(filter.sort());
      });

      it('Has correct initial state', () => {
        expect(instance.state.filterValue).toEqual(filter[0]);
        expect(instance.state.filteredProducts).toEqual(products);
      });

      it('It changes the filtered products', () => {
        const event = { target: { value: 'L' }};
        instance.handleChange(event);
        expect(instance.state.filteredProducts).toEqual([products[0]]);
        expect(instance.state.filterValue).toEqual('L');
      });

      it('It allows all the filtered products to be selected', () => {
        const event = { target: { value: 'Filter by size' }};
        instance.handleChange(event);
        expect(instance.state.filteredProducts).toEqual(products);
        expect(instance.state.filterValue).toEqual('Filter by size');
      });
    });
});
