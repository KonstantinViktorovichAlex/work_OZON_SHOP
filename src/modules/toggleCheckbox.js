// checkbox
export default function toggleCheckbox() {
  let checkbox = document.querySelector("#discount-checkbox");
  checkbox.addEventListener("change", function() {
    if (this.checked) {
      this.nextElementSibling.classList.add("checked"); //nextElementSibling соседний элемент --> <span></span>
    } else {
      this.nextElementSibling.classList.remove("checked");
    }
  });
}
//end checkbox
