//корзина
export default function toggleCart() {
  const btncard = document.getElementById("cart");
  const modalCart = document.querySelector(".cart");
  const closeBtn = document.querySelector(".cart-close");

  btncard.addEventListener("click", () => {
    modalCart.style.display = "flex";
    document.body.style.overflow = "hidden";
  });

  closeBtn.addEventListener("click", () => {
    modalCart.style.display = "none";
    document.body.style.overflow = "";
  });
}
// конец корзины
