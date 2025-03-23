import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="card" style={{ backgroundColor: '#1e1e1e', padding: '10px', borderRadius: '10px', boxShadow: '0 0 10px #000' }}>
      <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '10px' }} />
      <h3 style={{ color: '#f1c40f' }}>{product.name}</h3>
      <p style={{ color: '#fff' }}>{product.price}</p>
      <small style={{ color: '#bbb' }}>{product.category}</small>
    </div>
  );
}

export default ProductCard;

