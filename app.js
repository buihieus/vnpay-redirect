const params = new URLSearchParams(window.location.search);
      const query = params.toString();
      const redirectUrl = `ecommerce_app://home`;

      setTimeout(() => {
        window.location.href = redirectUrl;
      }, 1500);