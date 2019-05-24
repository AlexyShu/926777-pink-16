var btn_off = document.querySelector(".page-header__taggle-off");
var btn_on = document.querySelector(".page-header__taggle-on");
var popup = document.querySelector(".page-header");

btn_off.addEventListener("click", function(evt) {
  popup.classList.add("main-navigation--closed");
  btn_off.classList.add("page-header__taggle-off--hidden");
  btn_on.classList.add("page-header__taggle-on--show");
});

btn_on.addEventListener("click", function(evt) {
  popup.classList.remove("main-navigation--closed");
  btn_off.classList.remove("page-header__taggle-off--hidden");
  btn_on.classList.remove("page-header__taggle-on--show");
});
