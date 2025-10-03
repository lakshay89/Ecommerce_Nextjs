import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import wishlistReducer from './wishlistSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer
  }
});

// very small persistence: save relevant slices to localStorage
function saveState() {
  if (typeof window === 'undefined') return;
  try {
    const state = store.getState();
    localStorage.setItem('cart', JSON.stringify(state.cart.items || []));
    localStorage.setItem('wishlist', JSON.stringify(state.wishlist.items || []));
  } catch (e) {
    // ignore
  }
}

store.subscribe(saveState);

export default store;