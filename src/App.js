import React from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import TrendingSection from './components/TrendingSection';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <TrendingSection />
      <ProductList />
    </div>
  );
}

export default App;
