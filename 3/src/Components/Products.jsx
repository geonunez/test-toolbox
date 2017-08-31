import React, { Component } from 'react';

class Products extends Component {

    constructor() {
        super();
        this.state = { products: [] }
    }

    componentWillMount() {
    fetch('http://localhost:3000/products')
      .then((response) => {
        return response.json()
      })
      .then((products) => {
        this.setState({ products: products })
      })
  }

    render() {
        if (this.state.products.length > 0) {
            return (
                <ul>
                    <li> Name | Stock </li>
                    {
                        this.state.products.map(function(product) {
                            return (
                                <li>{ product.name } | { product.stock }</li>
                            );
                        }
                    )
                }
                </ul>
            )
        } else {
            return (
                <p className="text-center">Loading products...</p>
            );
        }
    }
}

export default Products;
