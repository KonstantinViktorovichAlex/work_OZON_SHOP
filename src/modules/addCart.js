//start basked
export default function addCart() {
  const cards = document.querySelectorAll(".goods .card"); //обертка goods для получения всех кароточек товаров в обертке
  const cartWrapper = document.querySelector(".cart-wrapper");
  const cartEmpty = document.getElementById("cart-empty");
  const countGoods = document.querySelector(".counter");

  cards.forEach(card => {
    const btn = card.querySelector("button");
    btn.addEventListener("click", () => {
      const cardClone = card.cloneNode(true); //копирование карточки
      cartWrapper.appendChild(cardClone);
      showData();

      const removeBtn = cardClone.querySelector(".btn"); //берем кнопку из корзины
      removeBtn.textContent = "Удалить"; // меняем текст на удалить
      removeBtn.addEventListener("click", () => {
        // вешаем новое событие
        cardClone.remove();
        showData();
      });
    });
  });

  function showData() {
    const cardsCart = cartWrapper.querySelectorAll(".card");
    const cardsPrice = cartWrapper.querySelectorAll(".card-price");
    const cardTotal = document.querySelector(".cart-total span");
    let sum = 0; //объявляем переменную для записи суммы товаров
    countGoods.textContent = cardsCart.length;

    cardsPrice.forEach(cardPrice => {
      let price = parseFloat(cardPrice.textContent); //отделяем число от текста parseFloat()
      sum += price; //присваиваем полученное число
    });
    cardTotal.textContent = sum;

    if (cardsCart.length === 0) {
      cartWrapper.appendChild(cartEmpty);
    } else {
      cartEmpty.remove();
    }
  }
}
