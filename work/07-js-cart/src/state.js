const PAGES = {
  PRODUCTS: 'products',
  CART: 'cart',
};


const state = {
  products: [
    { name: "kitty1", price: 0.99, imgUrl: 'http://placekitten.com/100/100?image=1' },
    { name: "kitty2", price: 3.14, imgUrl: 'http://placekitten.com/100/100?image=2' },
    { name: "kitty3", price: 2.73, imgUrl: 'http://placekitten.com/100/100?image=3' }
  ],
  cartItems: [],
  page: PAGES.PRODUCTS,
  totalPrice: 0,
  totalNum: 0
};


function addProduct (index) {
  const product = state.products[index];

  let isExist = false;

  for (const item of state.cartItems) {
    if (item.name === product.name) {
      isExist = true;
      item.quantity++;
      break;
    }
  }

  if (!isExist) {
    state.cartItems.push({
      name: product.name,
      quantity: 1,
      price: product.price,
      imgUrl: product.imgUrl
    });
  }

  state.totalPrice += product.price;
  state.totalNum += 1;
}


function decreaseQuantity (index) {
  const item = state.cartItems[index];
  item.quantity--;
  state.totalPrice -= item.price;
  state.totalNum -= 1;

  if (item.quantity === 0) { state.cartItems.splice(index, 1); }

}


function increaseQuantity (index) {
  const item = state.cartItems[index];
  item.quantity++;
  state.totalPrice += item.price;
  state.totalNum += 1;
}


function clearCart () {
  state.cartItems = [];
  state.totalPrice = 0;
  state.totalNum = 0;
  state.page = PAGES.PRODUCTS;
}



export default state;
export { PAGES, increaseQuantity, decreaseQuantity, addProduct, clearCart };

