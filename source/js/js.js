var btn_off = document.querySelector(".page-header__taggle-off");
var btn_on = document.querySelector(".page-header__taggle-on");
var popup = document.querySelector(".page-header");

btn_on.addEventListener("click", function(evt) {
  popup.classList.remove("menu-active");
  btn_on.classList.add("page-header__taggle-on--hidden");
  btn_off.classList.add("page-header__taggle-off--show");
});

btn_off.addEventListener("click", function(evt) {
  popup.classList.remove("menu-active");
  btn_off.classList.remove("page-header__taggle-off--show");
  btn_on.classList.remove("page-header__taggle-on--hidden");
});
