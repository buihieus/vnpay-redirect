// const params = new URLSearchParams(window.location.search);
// const query = params.toString();
// const redirectUrl = `ecommerce_app://payment/return?${query}`;

// // Redirect đến app sau 1.5 giây
// setTimeout(() => {
//   window.location.href = redirectUrl;

//   // Fallback: nếu không mở được app sau 3 giây thì về trang chủ
//   setTimeout(() => {
//     window.location.href = "/";
//   }, 3000);
// }, 1500);

const params = new URLSearchParams(window.location.search);
const query = params.toString();
const redirectUrl = `ecommerce_app://payment/return?${query}`;

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

setTimeout(() => {
  if (isMobile) {
    window.location.href = redirectUrl;
  } else {
    // Hiển thị hướng dẫn tải app nếu không phải mobile
    document.body.innerHTML += `
      <p style="margin-top: 20px;">⚠️ Vui lòng mở liên kết này trên điện thoại có cài app!</p>
    `;
  }
}, 1500);
