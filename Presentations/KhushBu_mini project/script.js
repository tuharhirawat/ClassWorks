
const products = [
  { id: 1, name: "Wireless Headphones", price: 99.99, image: "https://plus.unsplash.com/premium_photo-1677158265072-5d15db9e23b2?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/300" },
  { id: 2, name: "Smartwatch", price: 199.99, image: "https://images.unsplash.com/photo-1579721840641-7d0e67f1204e?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/300" },
  { id: 3, name: "Gaming Mouse", price: 49.99, image: "https://images.unsplash.com/photo-1627745214193-2bcefc681524?q=80&w=2865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/300" },
  { id: 4, name: "Bluetooth Speaker", price: 29.99, image: "https://images.unsplash.com/photo-1598034989845-48532781987e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/300" },
  { id: 5, name: "VR Headset", price: 299.99, image: "https://images.unsplash.com/photo-1660844116907-de0b4a60b018?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/300" },
];


const productGrid = document.querySelector('.product-grid');
const cartItemsContainer = document.querySelector('.cart-items');
const wishlistItemsContainer = document.querySelector('.wishlist-items');
const cartCount = document.getElementById('cart-count');
const wishlistCount = document.getElementById('wishlist-count');
const totalAmount = document.getElementById('total-amount');
const cartSection = document.getElementById('cart-section');
const wishlistSection = document.getElementById('wishlist-section');
const viewCartButton = document.getElementById('view-cart');
const viewWishlistButton = document.getElementById('view-wishlist');

let cart = [];
let wishlist = [];


function renderProducts() {
  products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
      productCard.innerHTML = `
          <div class="product-image">
              <img src="${product.image}" alt="${product.name}">
          </div>
          <div class="product-info">
              <h3>${product.name}</h3>
              <p>$${product.price.toFixed(2)}</p>
          </div>
          <div class="product-buttons">
              <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
              <button class="add-to-wishlist-btn" data-id="${product.id}">Add to Wishlist</button>
          </div>
      `;
      productGrid.appendChild(productCard);
  });
}


function addToCart(product) {
  const existingProduct = cart.find(item => item.id === product.id);
  if (existingProduct) {
      existingProduct.quantity += 1;
  } else {
      cart.push({ ...product, quantity: 1 });
  }
  updateCart();
}


function addToWishlist(product) {
  if (!wishlist.some(item => item.id === product.id)) {
      wishlist.push(product);
      updateWishlist();
  }
}


function updateCart() {
  cartItemsContainer.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
      cartItem.innerHTML = `
          <p>${item.name}</p>
          <p>$${(item.price * item.quantity).toFixed(2)} (${item.quantity})</p>
           <button class="decrease-qty-btn" data-id="${item.id}">-</button>
          <button class="increase-qty-btn" data-id="${item.id}">+</button>
          <button class="remove-cart-item-btn" data-id="${item.id}">Remove</button>
      `;
      cartItemsContainer.appendChild(cartItem);

      total += item.price * item.quantity;
  });

  totalAmount.textContent = `Total: $${total.toFixed(2)}`;
  cartCount.textContent = cart.length;
}


function updateWishlist() {
  wishlistItemsContainer.innerHTML = '';
  wishlist.forEach(item => {
      const wishlistItem = document.createElement('div');
      wishlistItem.classList.add('wishlist-item');
      wishlistItem.innerHTML = `
          <p>${item.name}</p>
          <p>$${item.price.toFixed(2)}</p>
          <button class="remove-wishlist-item-btn" data-id="${item.id}">Remove</button>
      `;
      wishlistItemsContainer.appendChild(wishlistItem);
  });
  wishlistCount.textContent = wishlist.length;
}


productGrid.addEventListener('click', (event) => {
  if (event.target.classList.contains('add-to-cart-btn')) {
      const productId = parseInt(event.target.dataset.id);
      const product = products.find(p => p.id === productId);
      addToCart(product);
  } else if (event.target.classList.contains('add-to-wishlist-btn')) {
      const productId = parseInt(event.target.dataset.id);
      const product = products.find(p => p.id === productId);
      addToWishlist(product);
  }
});

cartItemsContainer.addEventListener('click', (event) => {
  const productId = parseInt(event.target.dataset.id);
  if (event.target.classList.contains('decrease-qty-btn')) {
      const item = cart.find(p => p.id === productId);
      if (item.quantity > 1) {
          item.quantity -= 1;
      } else {
          cart = cart.filter(p => p.id !== productId);
      }
      updateCart();
  } else if (event.target.classList.contains('increase-qty-btn')) {
      const item = cart.find(p => p.id === productId);
      item.quantity += 1;
      updateCart();
  } else if (event.target.classList.contains('remove-cart-item-btn')) {
      cart = cart.filter(p => p.id !== productId);
      updateCart();
  }
});

wishlistItemsContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('remove-wishlist-item-btn')) {
      const productId = parseInt(event.target.dataset.id);
      wishlist = wishlist.filter(p => p.id !== productId);
      updateWishlist();
  }
});

viewCartButton.addEventListener('click', () => {
  cartSection.classList.toggle('hidden');
  wishlistSection.classList.add('hidden');
});

viewWishlistButton.addEventListener('click', () => {
  wishlistSection.classList.toggle('hidden');
  cartSection.classList.add('hidden');
});

renderProducts();




   
