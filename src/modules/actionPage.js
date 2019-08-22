//фильтр
import filter from "./filter";
export default function actionPage() {
  const cards = document.querySelectorAll(".goods .card");
  const discountCheckbox = document.getElementById("discount-checkbox");
  const min = document.getElementById("min");
  const max = document.getElementById("max");
  const search = document.querySelector(".search-wrapper_input");
  const searchBtn = document.querySelector(".search-btn");
  //фильтр по акции
  discountCheckbox.addEventListener("click", filter);
  //фильтр по цене
  min.addEventListener("change", filter);
  max.addEventListener("change", filter);
  //поиск
  searchBtn.addEventListener("click", () => {
    const searchText = new RegExp(search.value.trim(), "i"); //создаем регулярное выражение
    cards.forEach(card => {
      const title = card.querySelector(".card-title");
      if (!searchText.test(title.textContent)) {
        //получаем у title текст и проверяем есть ли этот текст в регулярном выражении и будет возвращать true или false
        card.parentNode.style.display = "none";
      } else {
        card.parentNode.style.display = "";
      }
    });
  });
}
//end фильтр
