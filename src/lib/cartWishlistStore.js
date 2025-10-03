export function getCart() {
  try {
    return JSON.parse(localStorage.getItem('cart') || '[]');
  } catch {
    return [];
  }
}

export function getWishlist() {
  try {
    return JSON.parse(localStorage.getItem('wishlist') || '[]');
  } catch {
    return [];
  }
}

function emitCounts() {
  const cartCount = getCart().length;
  const wishlistCount = getWishlist().length;
  window.dispatchEvent(new CustomEvent('cartUpdated', { detail: { count: cartCount } }));
  window.dispatchEvent(new CustomEvent('wishlistUpdated', { detail: { count: wishlistCount } }));
}

export function addToCart(item) {
  const cart = getCart();
  // avoid duplicates by id
  if (!cart.find(i => i.id === item.id)) {
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    emitCounts();
  }
}

export function addToWishlist(item) {
  const wishlist = getWishlist();
  if (!wishlist.find(i => i.id === item.id)) {
    wishlist.push(item);
  } else {
    // remove if exists (toggle)
    const idx = wishlist.findIndex(i => i.id === item.id);
    wishlist.splice(idx, 1);
  }
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
  emitCounts();
}

export function isInWishlist(id) {
  return getWishlist().some(i => i.id === id);
}