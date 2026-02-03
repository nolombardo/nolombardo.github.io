const modal = document.getElementById("demo-modal");
const frame = document.getElementById("demo-frame");
const closeBtn = document.getElementById("close-modal");

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".demo-btn");
  if (!btn) return;

  frame.src = btn.dataset.demo;
  modal.hidden = false;
});

closeBtn.addEventListener("click", closeModal);
modal.querySelector(".overlay").addEventListener("click", closeModal);

function closeModal() {
  modal.hidden = true;
  frame.src = "";
}
