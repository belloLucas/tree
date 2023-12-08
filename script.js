const body = document.querySelector("body");
const themeBtn = document.querySelector(".theme-btn");
const mainTitle = document.querySelector(".main-title");
const subTitle = document.querySelector(".subtitle");

let isActive = false;

const changeTheme = function () {
  isActive = !isActive;

  themeBtn.removeEventListener("click", changeTheme);

  if (isActive) {
    body.style.backgroundColor = "#fffefd";
    mainTitle.style.color = "#000";
    subTitle.style.color = "#000";
    themeBtn.style.color = "#000";
    themeBtn.style.border = "1px solid #000";
  } else {
    body.style.backgroundColor = "#212529";
    mainTitle.style.color = "#FFFF";
    subTitle.style.color = "#FFFF";
    themeBtn.style.color = "#FFFF";
    themeBtn.style.border = "1px solid #FFFF";
  }

  themeBtn.addEventListener("click", changeTheme);
};

themeBtn.addEventListener("click", changeTheme);
