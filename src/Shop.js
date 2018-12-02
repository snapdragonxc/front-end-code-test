// @flow

import React from 'react';
import type { Product } from './PropTypes/Product';

/* This is the stateless presentation component for the Shop */

type ShopProps = {
  products: Array<Product>,
  filter: Array<string>,
  handleChange: (event: SyntheticInputEvent<EventTarget>) => void,
  filterValue: string,
};

const Shop = ({
  products,
  filter,
  handleChange,
  filterValue,
}: ShopProps) => (
  <div className="wrap">
    <header className="header">
      <h1 className="header__title">
        Women&#39;s tops
      </h1>
      <select className="header__sort" value={filterValue} onChange={event => handleChange(event)}>
        { filter.length > 0 && filter.map(size => <option key={size} value={size}>{size}</option>)}
      </select>
    </header>
    <main>
      <ul className="product-list">
        { products.length > 0 && products.map(({
          isSale,
          isExclusive,
          price,
          productImage,
          productName,
        }, index) => (
            <li className="product-list__item" key={index} >
              <a className="product-list__link" href="#">
                <div className="product-list__photo">
                  <img className="photo" src={`images/${productImage}`} alt="Striped Shirt"/>
                </div>
                <div className="product-list__tabs">
                  { isSale && <div className="product-list__tab product-list__tab--sale">
                      Sale
                    </div>
                  }

                  { isExclusive && <div className="product-list__tab product-list__tab--exclusive">
                      Exclusive
                    </div>
                  }
                  <div className="product-list__tab">&nbsp;</div>
                </div>
                <div className="product-list__details">
                  <div className="product-list__name">
                    {productName}
                  </div>
                  <div className="product-list__price">
                    {price}
                  </div>
                </div>
              </a>
            </li>
        ))
        }
      </ul>
    </main>
  </div>
);
export default Shop;
