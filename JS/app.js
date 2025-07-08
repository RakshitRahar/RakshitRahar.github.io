let cart = {};
const products = [
  { id: 1, name: "Product 1", price: 25 },
  { id: 2, name: "Product 2", price: 50 },
  { id: 3, name: "Product 3", price: 75 },
];

function addToCart(id) {
  cart = { ...cart, [id]: (cart[id] || 0) + 1 };
}

function increment(id) {
  cart = { ...cart, [id]: cart[id] + 1 };
}

function decrement(id) {
  cart = { ...cart, [id]: cart[id] - 1 };
}

function addToCartAndRender(id) {
  addToCart(id);
  render();
}

function incrementAndRender(id) {
  increment(id);
  render();
}

function decrementAndRender(id) {
  if (cart[id] > 0) {
    decrement(id);
    if (cart[id] === 0) delete cart[id];
    render();
  }
}

function render() {
  products.forEach(p => {
    const qty = cart[p.id] ?? 0;
    document.getElementById(`qty-${p.id}`).innerText = `Quantity: ${qty}`;
  });

  const total = products.reduce((sum, p) => {
    return sum + p.price * (cart[p.id] || 0);
  }, 0);

  document.getElementById('total').innerText = `Total: $${total}`;
}
