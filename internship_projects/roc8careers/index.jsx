import React, { useState, useEffect } from 'react';

// Function to format price with commas
function formatPrice(price) {
  return price.toLocaleString('en-US');
}

// Function to truncate text
function truncateText(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + '...';
}

// Products component
function Products({ products }) {
  return (
    <div data-testid="products">
      {products.map((product, index) => (
        <div className="product-card" data-testid="product-card" key={index}>
          <h3>{product.title}</h3>
          <p>{truncateText(product.description, 30)}</p>
          <p>Price: ${formatPrice(product.price)}</p>
        </div>
      ))}
    </div>
  );
}

// App component
function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    // Fetch products from the API
    fetch('https://dummyjson.com/products?limit=10')
      .then((response) => response.json())
      .then((data) => {
        setAllProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchText(query);

    if (!query) {
      setFilteredProducts(allProducts);
    } else {
      const filtered = allProducts.filter(
        (product) =>
          product.title.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.price.toString().includes(query)
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div>
      <h1>MoonshotX Products</h1>
      <input
        type="text"
        data-testid="search"
        placeholder="Search products"
        value={searchText}
        onChange={handleSearch}
      />
      <Products products={filteredProducts} />
    </div>
  );
}

export default App;
