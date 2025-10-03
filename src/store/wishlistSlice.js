import { createSlice } from '@reduxjs/toolkit';

const load = () => {
  try {
    if (typeof window === 'undefined') return [];
    return JSON.parse(localStorage.getItem('wishlist') || '[]');
  } catch {
    return [];
  }
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: { items: load() },
  reducers: {
    toggleWishlist(state, action) {
      const item = action.payload;
      const idx = state.items.findIndex(i => i.id === item.id);
      if (idx === -1) state.items.push({ ...item, _addedAt: Date.now() });
      else state.items.splice(idx, 1);
    },
    clearWishlist(state) {
      state.items = [];
    },
    replaceWishlist(state, action) {
      state.items = action.payload || [];
    }
  }
});

export const { toggleWishlist, clearWishlist, replaceWishlist } = wishlistSlice.actions;

export const selectWishlistItems = state => state.wishlist.items;
export const selectWishlistCount = state =>
  state.wishlist.items.length;

export default wishlistSlice.reducer;