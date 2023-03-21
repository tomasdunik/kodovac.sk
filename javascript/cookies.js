// document
//   .querySelector(".cookies-button")
//   .addEventListener("click", function () {
//     document.querySelector(".cookies").style.opacity = 0;
//   });

const cookies = document.querySelector(".cookies"),
  cookiesButton = cookies.querySelector("button");
cookiesButton.onclick = () => {
  document.cookie = "CookieBy=kodovac.sk; max-age=" + 60 * 60 * 24 * 30;
  if (document.cookie) {
    cookies.classList.add("hide");
  } else {
    alert(
      "Nie je možné nastaviť súbory cookies. Pre pokračovanie odblokujte túto stránku z nastavenia cookies vo Vašom prehlaidači."
    );
  }
};
let checkCookie = document.cookie.indexOf("CookieBy=kodovac.sk");
checkCookie != -1
  ? cookies.classList.add("hide")
  : cookies.classList.remove("hide");

// menu
document
  .querySelector("#nav-burger-icon")
  .addEventListener("click", function () {
    document.querySelector("#nav-cancel-icon").style.display = "inline-block";
  });

document
  .querySelector("#nav-burger-icon")
  .addEventListener("click", function () {
    document.querySelector("#nav-burger-icon").style.display = "none";
  });

document
  .querySelector("#nav-cancel-icon")
  .addEventListener("click", function () {
    document.querySelector("#nav-burger-icon").style.display = "inline-block";
  });

document
  .querySelector("#nav-cancel-icon")
  .addEventListener("click", function () {
    document.querySelector("#nav-cancel-icon").style.display = "none";
  });

// menu
document
  .querySelector("#nav-burger-icon")
  .addEventListener("click", function () {
    document.querySelector(".nav-mobile").style.display = "flex";
  });

document
  .querySelector("#nav-cancel-icon")
  .addEventListener("click", function () {
    document.querySelector(".nav-mobile").style.display = "none";
  });
