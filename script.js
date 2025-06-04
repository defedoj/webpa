window.products = [
    {
      id: 'p1',
      name: 'Класична футболка',
      category: 'tshirt',
      price: 899,
      image: '',
      onSale: true,
    },
    {
      id: 'p2',
      name: 'Чорне худі',
      category: 'hoodie',
      price: 1999,
      image: 'data:image/jpeg;base64,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',
      onSale: false,
    },
    {
      id: 'p3',
      name: 'Спортивні штани',
      category: 'pants',
      price: 1499,
      image: '',
      onSale: false,
    },
    {
      id: 'p4',
      name: 'Бейсболка',
      category: 'accessories',
      price: 499,
      image: '',
      onSale: true,
    },
    {
      id: 'p5',
      name: 'Спортивна футболка',
      category: 'tshirt',
      price: 949,
      image: '',
      onSale: false,
    },
    {
      id: 'p6',
      name: 'Світло-сіре худі',
      category: 'hoodie',
      price: 1799,
      image: '',
      onSale: true,
    },
    {
      id: 'p7',
      name: 'Класичні джогери',
      category: 'pants',
      price: 1399,
      image: '',
      onSale: false,
    },
    {
      id: 'p8',
      name: 'Спортивні рукавички',
      category: 'accessories',
      price: 699,
      image: '',
      onSale: false,
    }
  ];
  
  // Ключі localStorage
  const CART_KEY = 'clothique_cart';
  
  const productGrid = document.getElementById('product-grid');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const cartCountEl = document.getElementById('cart-count');
  
  // Функція завантаження кошика з localStorage
  function loadCart() {
    const cartJSON = localStorage.getItem(CART_KEY);
    if (!cartJSON) return {};
    try {
      return JSON.parse(cartJSON);
    } catch {
      return {};
    }
  }
  
  // Збереження кошика в localStorage
  function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartCount();
  }
  
  // Оновлення лічильника кількості товарів у кошику
  function updateCartCount() {
    const cart = loadCart();
    const count = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
    cartCountEl.textContent = count;
    cartCountEl.style.display = count === 0 ? 'none' : 'inline-block';
  }
  
  // Відмалювання каталогу за фільтром
  function renderProducts(filter = 'all') {
    if (!productGrid) return;
  
    productGrid.innerHTML = '';
    const template = document.getElementById('product-card-template');
    if (!template) return;
  
    const filteredProducts = filter === 'all' ? window.products : window.products.filter(p => p.category === filter);
  
    filteredProducts.forEach(product => {
      const clone = template.content.cloneNode(true);
      const card = clone.querySelector('.product-card');
      const img = clone.querySelector('.product-img');
      const name = clone.querySelector('.product-name');
      const price = clone.querySelector('.product-price');
      const btn = clone.querySelector('.add-to-cart-btn');
      const saleBadge = clone.querySelector('.sale-badge');
  
      img.src = product.image;
      img.alt = product.name;
      name.textContent = product.name;
      price.textContent = `${product.price.toLocaleString('uk-UA')} ₴`;
      saleBadge.style.display = product.onSale ? 'block' : 'none';
  
      btn.addEventListener('click', () => addToCart(product, btn));
  
      productGrid.appendChild(clone);
    });
  }
  
  // Анімація додавання в кошик
  function animateAddToCart(button) {
    const circle = document.createElement('div');
    circle.classList.add('add-to-cart-animation');
  
    const rect = button.getBoundingClientRect();
    circle.style.width = '25px';
    circle.style.height = '25px';
    circle.style.left = `${rect.left + rect.width / 2 - 12.5}px`;
    circle.style.top = `${rect.top + rect.height / 2 - 12.5}px`;
  
    document.body.appendChild(circle);
  
    circle.addEventListener('animationend', () => {
      circle.remove();
    });
  }
  
  // Додавання товару в кошик
  function addToCart(product, button) {
    animateAddToCart(button);
    const cart = loadCart();
    if (cart[product.id]) {
      cart[product.id]++;
    } else {
      cart[product.id] = 1;
    }
    saveCart(cart);
  }
  
  // Ініціалізація фільтрів
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      renderProducts(button.dataset.filter);
    });
  });
  
  // Таймер акції
  function startPromoTimer(durationSeconds) {
    const timerEl = document.getElementById('promo-timer');
    if (!timerEl) return;
  
    let remaining = durationSeconds;
  
    function updateTimer() {
      const hrs = String(Math.floor(remaining / 3600)).padStart(2, '0');
      const mins = String(Math.floor((remaining % 3600) / 60)).padStart(2, '0');
      const secs = String(remaining % 60).padStart(2, '0');
      timerEl.textContent = `Залишилось: ${hrs}:${mins}:${secs}`;
  
      if (remaining <= 0) {
        clearInterval(interval);
        timerEl.textContent = 'Акція завершена!';
        return;
      }
      remaining--;
    }
  
    updateTimer();
    const interval = setInterval(updateTimer, 1000);
  }
  

  renderProducts();
  updateCartCount();
  startPromoTimer(900); // 15 хвилин
  