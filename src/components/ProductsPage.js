import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/ProductsPage.css'; // Create this CSS

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('');
  const [availability, setAvailability] = useState('');
  const [sort, setSort] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => setProducts(res.data));
  }, []);

  const filtered = products
    .filter(p => (category ? p.category === category : true))
    .filter(p => (availability ? (availability === 'in' ? p.rating.count > 0 : p.rating.count === 0) : true))
    .sort((a, b) => {
      if (sort === 'price') return a.price - b.price;
      if (sort === 'popularity') return b.rating.count - a.rating.count;
      return 0;
    });

  const paginated = filtered.slice((page - 1) * 6, page * 6);
  const totalPages = Math.ceil(filtered.length / 6);

  return (
    <div className="container-fluid">
      {/* Filters */}
      <div className="row mb-4 g-2">
        <div className="col-md-3">
          <select onChange={e => setCategory(e.target.value)} className="form-select">
            <option value=''>All Categories</option>
            <option value='electronics'>Electronics</option>
            <option value='jewelery'>Jewelery</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
          </select>
        </div>
        <div className="col-md-3">
          <select onChange={e => setAvailability(e.target.value)} className="form-select">
            <option value=''>All Stock</option>
            <option value='in'>In Stock</option>
            <option value='out'>Out of Stock</option>
          </select>
        </div>
        <div className="col-md-3">
          <select onChange={e => setSort(e.target.value)} className="form-select">
            <option value=''>Sort By</option>
            <option value='price'>Price: Low to High</option>
            <option value='popularity'>Popularity</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="row g-4">
        {paginated.map(product => (
          <div key={product.id} className="col-md-4">
            <div className="product-card p-3 border rounded shadow-sm h-100 d-flex flex-column">
              <img src={product.image} alt={product.title} className="product-img mb-3" />
              <h5 className="text-primary">{product.title}</h5>
              <p className="text-muted small">{product.description.slice(0, 70)}...</p>
              <div className="mt-auto">
                <div className="text-success fw-bold mb-1">${product.price}</div>
                <div className="text-warning small">⭐ {product.rating.rate}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="d-flex justify-content-center gap-2 mt-4">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`btn ${i + 1 === page ? 'btn-primary' : 'btn-outline-primary'}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
