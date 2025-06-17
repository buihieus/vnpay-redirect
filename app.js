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

  // const params = new URLSearchParams(window.location.search);
  // const query = params.toString();

  // const isAndroid = /Android/i.test(navigator.userAgent);
  // const isiOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

  // const deepLink = `ecommerce_app://payment/return${query}`;
  // const fallbackUrl = 'https://yourwebsite.com/download'; // Link tải app (App Store / CH Play)

  // if (isAndroid) {
  //   // Android: dùng intent cho chắc chắn mở được
  //   const intentUrl = `intent://payment/return?${query}#Intent;scheme=ecommerce_app;package=com.yourapp.package;end`;

  //   window.location.href = intentUrl;

  //   // Fallback sau 3s nếu không mở app
  //   setTimeout(() => {
  //     window.location.href = fallbackUrl;
  //   }, 3000);
  // } else if (isiOS) {
  //   // iOS: mở scheme trực tiếp
  //   window.location.href = deepLink;

  //   setTimeout(() => {
  //     window.location.href = fallbackUrl;
  //   }, 3000);
  // } else {
  //   // Không phải thiết bị mobile
  //   document.body.innerHTML = `
  //     <p style="margin-top: 20px;">⚠️ Vui lòng mở liên kết này trên <strong>điện thoại</strong> có cài app.</p>
  //   `;
  // }

