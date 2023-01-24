// togle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger-menu diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik diluar sidebar untuk menghilangkan nav

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

$(".page-scroll").on("click", function (e) {
  // ambil isi href atau tujuan
  var tujuan = $(this).attr("href");
  var elemenTujuan = $(tujuan);
  // pindahkan scroll dengan jquery.easing.js
  $("html, body").animate(
    {
      scrollTop: elemenTujuan.offset().top - 0,
    },
    1000,
    "easeInQuint"
  );

  e.preventDefault();
});
