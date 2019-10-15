var pesta = document.querySelectorAll(".blog a");
var week = document.querySelectorAll(".day");
var show = week[0];

window.onload = function() {
  console.log(show);

  pesta[0].addEventListener("click", () => {
    show.classList.add("hidden");
    show = week[0];
    show.classList.remove("hidden");
    console.log(show);
  });
  pesta[1].addEventListener("click", () => {
    show.classList.add("hidden");
    show = week[1];
    show.classList.remove("hidden");
    console.log(show);
  });

  pesta[2].addEventListener("click", () => {
    show.classList.add("hidden");
    show = week[2];
    show.classList.remove("hidden");
    console.log(show);
  });

  pesta[3].addEventListener("click", () => {
    show.classList.add("hidden");
    show = week[3];
    show.classList.remove("hidden");
    console.log(show);
  });

  pesta[4].addEventListener("click", () => {
    show.classList.add("hidden");
    show = week[4];
    show.classList.remove("hidden");
    console.log(show);
  });
};
