import React from 'react';
import ProductCard from './ProductCard';
import products from '../data/products';

function ProductList() {
  return (
    <section>
      <h2>All Products</h2>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
