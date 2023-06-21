const registerBtn = document.querySelector(".register");
const modal = document.querySelector(".backdrop");
const closeModalBtn = document.querySelector(".modal__close-btn");
registerBtn.addEventListener("click", openModal);

function openModal() {
  modal.classList.remove("is-hidden");
  closeModalBtn.addEventListener("click", closeModal);
}

function closeModal() {
  modal.classList.add("is-hidden");
  closeModalBtn.removeEventListener("click", closeModal);
}
