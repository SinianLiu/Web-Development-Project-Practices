import state, { PAGES, increaseQuantity, decreaseQuantity, addProduct, clearCart } from './state';
import render from './render';

const rootEl = document.querySelector('#root');

// add product to cart
function addToCart (rootEl) {
  rootEl.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart')) {
      const index = e.target.dataset.index;
      addProduct(index);
    }

    render(state, rootEl);
  })
}


// add or reduce the quantity of products
function changeQuantity (rootEl) {
  rootEl.addEventListener('click', (e) => {
    const index = e.target.dataset.index;

    if (e.target.classList.contains('decrease')) {
      decreaseQuantity(index);
    }

    if (e.target.classList.contains('increase')) {
      increaseQuantity(index);
    }

    render(state, rootEl);
  })
}


// change the page via buttons
function changePage (rootEl) {
  rootEl.addEventListener('click', (e) => {
    if (e.target.classList.contains('view-cart')) {
      state.page = PAGES.CART;
    }

    if (e.target.classList.contains('hide-cart')) {
      state.page = PAGES.PRODUCTS;
    }

    render(state, rootEl);
  });
}


function checkout (rootEl) {
  rootEl.addEventListener('click', (e) => {
    if (e.target.classList.contains('checkout')) clearCart();
    render(state, rootEl);
  });
}


render(state, rootEl);
addToCart(rootEl);
changeQuantity(rootEl);
changePage(rootEl);
checkout(rootEl);