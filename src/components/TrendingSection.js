import React from 'react';
import ProductCard from './ProductCard';
import products from '../data/products';

function TrendingSection() {
  const trendingProducts = products.filter(product => product.trending);

  return (
    <section>
      <h2>🔥 Trending Products</h2>
      <div className="product-grid">
        {trendingProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default TrendingSection;
