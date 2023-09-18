const img = document.querySelector("#pic");
const pussy = document.querySelector("#puss");

puss.addEventListener("mouseover", function () {
  img.style.display = "inline";
});

puss.addEventListener("mouseout", function () {
  img.style.display = "none";
});
