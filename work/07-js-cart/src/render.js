import { PAGES } from './state'


function render (state, rootEl) {

  if (state.page === PAGES.PRODUCTS) {
    renderProducts(state, rootEl);
  }
  if (state.page === PAGES.CART) {
    renderCart(state, rootEl);
  }
}


function renderProducts (state, rootEl) {
  const html = state.products.map((product, index) => {
    return `
      <li class='product' data-index="${index}">
        <img src="${product.imgUrl}" name="${product.name}"/>
        <span>${product.name}: $${product.price}</span>
        <button class="add-to-cart" data-index="${index}">Add to Cart</button>
      </li>
    `;
  }).join('');

  rootEl.innerHTML = `
    <div class="center-container">
      <p>Cat List</p> 
    </div> 
    <ul class="products">${html}</ul>
    <button class="view-cart">View Cart${state.totalNum ? '(' + state.totalNum + ')' : ''}</button>
  `;
};


function renderCart (state, rootEl) {
  const html = state.products.map((product, index) => {
    return `
      <li class='product' data-index="${index}">
        <img src="${product.imgUrl}" name="${product.name}"/>
        <span>${product.name}: $${product.price}</span>
        <button class="add-to-cart" data-index="${index}">Add to Cart</button>
      </li>
    `;
  }).join('');


  const cart_html = state.cartItems.map((item, index) => {
    const totalPrice = (item.price * item.quantity).toFixed(2);
    return `
    <li class='cart-item'>
      <div class='left'>
        <img src="${item.imgUrl}"/>
        <span>${item.name}</span>    
      </div>
      <div class='right'>
        <button data-index="${index}" class="decrease"> - </button>        
        <span>${item.quantity}</span> 
        <button data-index="${index}" class="increase"> + </button>                
        <span class="total-price">$${totalPrice}</span> 
      </div>         
    </li>
    `;
  }).join('');


  const totalCost = state.totalPrice;

  rootEl.innerHTML = `
    <div class="center-container">
      <p>Cat List</p> 
    </div>
    <ul class="products">${html}</ul>  
    <div class="center-container-2">
      <p>Shopping Cart</p>  
    </div>
    <div class="button-container">
      <button class="checkout">Checkout</button>
      <button class="hide-cart">Hide Cart</button>
    </div> 
    <span>${totalCost ? 'Total Cost: $' + totalCost.toFixed(2) : 'Nothing in the cart'}</span>
    <ul class="carts">${cart_html}</ul>
  `;

}

export default render;



