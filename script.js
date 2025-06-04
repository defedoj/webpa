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
      image: '',
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
  