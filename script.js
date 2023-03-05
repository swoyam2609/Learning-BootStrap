let namasteBtn = document.querySelector("button");
namasteBtn.addEventListener("click", inputText());

function inputText() {
  let name = prompt("What is your name?");
  namasteBtn.textContent = name;
}
