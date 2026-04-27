import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { SlidersHorizontal, X } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';
import './Shop.css';

const allCats = [{ id: 'all', label: 'All Products' }, ...categories];

const sortOptions = [
  { value: 'default', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'name-asc', label: 'Name: A–Z' },
];

export default function Shop() {
  const [params, setParams] = useSearchParams();
  const [sort, setSort] = useState('default');
  const [filterOpen, setFilterOpen] = useState(false);

  const activeCat = params.get('cat') || 'all';

  const setCategory = (cat) => {
    if (cat === 'all') params.delete('cat');
    else params.set('cat', cat);
    setParams(params, { replace: true });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeCat]);

  const filtered = products.filter(p =>
    activeCat === 'all' ? true : p.category === activeCat
  );

  const sorted = [...filtered].sort((a, b) => {
    if (sort === 'price-asc') return a.price - b.price;
    if (sort === 'price-desc') return b.price - a.price;
    if (sort === 'name-asc') return a.name.localeCompare(b.name);
    return 0;
  });

  const activeLabel = allCats.find(c => c.id === activeCat)?.label || 'All Products';

  return (
    <main className="shop">
      {/* Page Header */}
      <section className="shop-hero">
        <div className="container shop-hero__inner">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="section-label">Our Collection</p>
            <h1 className="shop-hero__title">{activeLabel}</h1>
            <p className="shop-hero__count">{sorted.length} product{sorted.length !== 1 ? 's' : ''}</p>
          </motion.div>
        </div>
      </section>

      <div className="container shop__layout">
        {/* Sidebar */}
        <aside className={`shop__sidebar ${filterOpen ? 'shop__sidebar--open' : ''}`}>
          <div className="shop__sidebar-header">
            <span>Filter</span>
            <button className="shop__sidebar-close" onClick={() => setFilterOpen(false)}>
              <X size={20} />
            </button>
          </div>
          <div className="shop__filter-group">
            <p className="shop__filter-label">Category</p>
            <ul className="shop__cat-list">
              {allCats.map(cat => (
                <li key={cat.id}>
                  <button
                    className={`shop__cat-btn ${activeCat === cat.id ? 'shop__cat-btn--active' : ''}`}
                    onClick={() => { setCategory(cat.id); setFilterOpen(false); }}
                  >
                    {cat.label}
                    <span className="shop__cat-count">
                      {cat.id === 'all' ? products.length : products.filter(p => p.category === cat.id).length}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {filterOpen && (
          <div className="shop__overlay" onClick={() => setFilterOpen(false)} />
        )}

        {/* Main Content */}
        <div className="shop__main">
          <div className="shop__toolbar">
            <button className="shop__filter-toggle" onClick={() => setFilterOpen(true)}>
              <SlidersHorizontal size={16} />
              Filters
            </button>
            <div className="shop__sort">
              <label htmlFor="sort-select">Sort by:</label>
              <select
                id="sort-select"
                value={sort}
                onChange={e => setSort(e.target.value)}
              >
                {sortOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Pills (horizontal scroll on mobile) */}
          <div className="shop__pills">
            {allCats.map(cat => (
              <button
                key={cat.id}
                className={`shop__pill ${activeCat === cat.id ? 'shop__pill--active' : ''}`}
                onClick={() => setCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCat + sort}
              className="products-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {sorted.length > 0 ? (
                sorted.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))
              ) : (
                <motion.div
                  className="shop__empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <p>No products found in this category.</p>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
