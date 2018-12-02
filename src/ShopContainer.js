// @flow

import * as React from 'react';
import Axios from 'axios';
import Shop from './Shop';
import type { Product } from './PropTypes/Product';

/* This is the container component for the Shop and has the state and code logic */

type Props = {};

type State = {
  filteredProducts?: Array<Product>,
  filterValue: string,
};

export class ShopContainer extends React.Component<Props, State> {
  state = {
    filterValue: 'Filter by size', // initial state is to show all products regardless of size
  };

  products = [];

  filter = ['Filter by size'];

  componentDidMount(done: any) {
    // make api call when page mounts to get products
    const { products, filter } = this;
    Axios.get('/api').then((response) => {
      response.data.forEach((product) => {
        products.push(product);
        product.size.forEach((item) => {
          if (filter.indexOf(item) === -1) {
            filter.push(item);
          }
        });
      });
      this.setState({ filteredProducts: products }); // update state with api response.
    }).then(done);
  }

  handleChange(event: SyntheticInputEvent<EventTarget>): void {
    // Handle the change in size filter event
    const { products, filter } = this;
    const filterValue = event.target.value;
    let filteredProducts = products;
    if (filterValue !== filter[0]) {
      filteredProducts = products.filter(product => (product.size.indexOf(filterValue) !== -1));
    }
    this.setState({ filterValue, filteredProducts });
  }

  render() {
    // Pass down the state and callbacks to the Shop Component for display
    const { filterValue } = this.state;
    const filteredProducts = this.state.filteredProducts || [];
    return (
      <Shop
        products={filteredProducts}
        filter={this.filter}
        handleChange={this.handleChange.bind(this)}
        filterValue={filterValue}
      />
    );
  }
}
