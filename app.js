const params = new URLSearchParams(window.location.search);
const query = params.toString();
const redirectUrl = `ecommerce_app://payment/return?${query}`;

// Redirect đến app sau 1.5 giây
setTimeout(() => {
  window.location.href = redirectUrl;

  // Fallback: nếu không mở được app sau 3 giây thì về trang chủ
  setTimeout(() => {
    window.location.href = "/";
  }, 3000);
}, 1500);
