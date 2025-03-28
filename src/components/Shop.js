import React, { useState } from 'react';
import '../componentsstyle/Shop.css';
import { FaShoppingCart, FaHeart, FaSearch } from 'react-icons/fa';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const products = [
    // Travel Essentials
    {
      id: 1,
      name: "Travel Backpack 40L",
      price: "₹2,999",
      category: "essentials",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format",
      description: "Waterproof hiking backpack with laptop compartment"
    },
    {
      id: 2,
      name: "Universal Travel Adapter",
      price: "₹899",
      category: "essentials",
      image: "https://images.unsplash.com/photo-1621972750749-0fbb1abb7736?w=500&auto=format",
      description: "All-in-one international power adapter"
    },
    {
      id: 3,
      name: "Packing Cubes Set",
      price: "₹799",
      category: "essentials",
      image: "https://images.unsplash.com/photo-1581553680321-4fffae59fccd?w=500&auto=format",
      description: "6-piece travel organizer set"
    },
    
    // Camping Gear
    {
      id: 4,
      name: "2-Person Tent",
      price: "₹4,999",
      category: "camping",
      image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=500&auto=format",
      description: "Lightweight waterproof camping tent"
    },
    {
      id: 5,
      name: "Sleeping Bag",
      price: "₹1,999",
      category: "camping",
      image: "https://images.unsplash.com/photo-1520095972714-909e91b038e5?w=500&auto=format",
      description: "All-season sleeping bag (-5°C to 15°C)"
    },
    {
      id: 6,
      name: "Camping Stove",
      price: "₹2,499",
      category: "camping",
      image: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=500&auto=format",
      description: "Portable gas camping stove"
    },

    // Electronics
    {
      id: 7,
      name: "Action Camera",
      price: "₹24,999",
      category: "electronics",
      image: "https://images.unsplash.com/photo-1526186736589-b343fcb22b77?w=500&auto=format",
      description: "4K waterproof action camera"
    },
    {
      id: 8,
      name: "Power Bank 20000mAh",
      price: "₹1,999",
      category: "electronics",
      image: "https://images.unsplash.com/photo-1609592786331-b7f6ba63fb34?w=500&auto=format",
      description: "Fast-charging power bank with dual USB ports"
    },
    {
      id: 9,
      name: "Noise-Canceling Headphones",
      price: "₹14,999",
      category: "electronics",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format",
      description: "Wireless bluetooth headphones"
    },

    // Accessories
    {
      id: 10,
      name: "Travel Pillow",
      price: "₹699",
      category: "accessories",
      image: "https://images.unsplash.com/photo-1520443397534-3b95b103e984?w=500&auto=format",
      description: "Memory foam neck support pillow"
    },
    {
      id: 11,
      name: "RFID Travel Wallet",
      price: "₹899",
      category: "accessories",
      image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&auto=format",
      description: "Secure passport and card holder"
    },
    {
      id: 12,
      name: "Luggage Scale",
      price: "₹499",
      category: "accessories",
      image: "https://images.unsplash.com/photo-1622660676447-0d083a7b1186?w=500&auto=format",
      description: "Digital hanging luggage scale"
    },

    // Clothing
    {
      id: 13,
      name: "Quick-Dry Travel Towel",
      price: "₹799",
      category: "clothing",
      image: "https://images.unsplash.com/photo-1582482006749-e6b38cd1a4ad?w=500&auto=format",
      description: "Microfiber travel towel set"
    },
    {
      id: 14,
      name: "Rain Jacket",
      price: "₹2,499",
      category: "clothing",
      image: "https://images.unsplash.com/photo-1605763240000-7e93b172d754?w=500&auto=format",
      description: "Packable waterproof jacket"
    },
    {
      id: 15,
      name: "Travel Socks Set",
      price: "₹599",
      category: "clothing",
      image: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=500&auto=format",
      description: "3-pair compression socks"
    },

    // Safety & Security
    {
      id: 16,
      name: "First Aid Kit",
      price: "₹999",
      category: "safety",
      image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=500&auto=format",
      description: "Comprehensive travel medical kit"
    },
    {
      id: 17,
      name: "TSA Lock Set",
      price: "₹699",
      category: "safety",
      image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=500&auto=format",
      description: "2-pack TSA approved luggage locks"
    },
    {
      id: 18,
      name: "Money Belt",
      price: "₹599",
      category: "safety",
      image: "https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?w=500&auto=format",
      description: "Hidden travel wallet"
    },

    // Luggage
    {
      id: 19,
      name: "Hardshell Suitcase",
      price: "₹6,999",
      category: "luggage",
      image: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=500&auto=format",
      description: "28-inch spinner luggage"
    },
    {
      id: 20,
      name: "Daypack",
      price: "₹1,499",
      category: "luggage",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a45?w=500&auto=format",
      description: "Foldable lightweight backpack"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'essentials', name: 'Travel Essentials' },
    { id: 'camping', name: 'Camping Gear' },
    { id: 'electronics', name: 'Electronics' },
    { id: 'accessories', name: 'Accessories' },
    { id: 'clothing', name: 'Clothing' },
    { id: 'safety', name: 'Safety & Security' },
    { id: 'luggage', name: 'Luggage' }
  ];

  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="shop-container">
      <div className="shop-header">
        <h1>Travel Shop</h1>
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="cart-icon" onClick={() => setShowCart(!showCart)}>
          <FaShoppingCart />
          {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
        </div>
      </div>

      <div className="categories-container">
        {categories.map(category => (
          <button
            key={category.id}
            className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
              <div className="price-tag">{product.price}</div>
              <button className="wishlist-btn">
                <FaHeart />
              </button>
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <button 
                className="add-to-cart"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {showCart && (
        <div className="cart-modal">
          <div className="cart-content">
            <div className="cart-header">
              <h2>Shopping Cart</h2>
              <button className="close-cart" onClick={() => setShowCart(false)}>×</button>
            </div>
            {cart.length === 0 ? (
              <p className="empty-cart">Your cart is empty</p>
            ) : (
              <>
                <div className="cart-items">
                  {cart.map(item => (
                    <div key={item.id} className="cart-item">
                      <img src={item.image} alt={item.name} />
                      <div className="item-details">
                        <h4>{item.name}</h4>
                        <p>₹{item.price}</p>
                      </div>
                      <button 
                        className="remove-item"
                        onClick={() => removeFromCart(item.id)}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
                <div className="cart-footer">
                  <div className="cart-total">
                    <span>Total:</span>
                    <span>₹{calculateTotal()}</span>
                  </div>
                  <button className="checkout-btn">Proceed to Checkout</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop; 