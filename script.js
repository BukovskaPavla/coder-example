const scrollUpButton = document.getElementById("scroll-up-btn");
scrollUpButton.addEventListener("click", () =>
  console.log("scroll up button click")
);

const scrollUpWrapper = document.querySelector(".scroll-up-wrapper-hide");

window.addEventListener("scroll", () => {
  if (window.scrollY < 1000) {
    FadeOut();
  } else FadeIn();
});

const FadeIn = () => {
  scrollUpWrapper.classList.remove("scroll-up-wrapper-hide");
  scrollUpWrapper.classList.add("scroll-up-wrapper");
};

const FadeOut = () => {
  scrollUpWrapper.disabled = true;
  scrollUpWrapper.classList.remove("scroll-up-wrapper");
  scrollUpWrapper.classList.add("scroll-up-wrapper-hide");
};
