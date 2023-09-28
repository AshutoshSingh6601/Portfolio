let open = document.querySelector(".opn");
let show = document.querySelector(".floatNav");
let close = document.querySelector("#cls");

open.addEventListener("click", () => {
  console.log("ashutosh");
  // show.style.transition = "display 1s ease";
  show.style.display = "block";
  open.style.display = "none";
  close.style.display = "block";
});

close.addEventListener("click", () => {
  console.log("ashutosh");
  show.style.display = "none";
  open.style.display = "block";
  close.style.display = "none";
});

var tl = gsap.timeline();

tl.from(".nav", {
  width: 0,
  scale: 0,
  opacity: 0,
  duration: 1,
  delay: 0.5,
});
tl.from(".text", {
  opacity: 0,
  stagger: 0.3,
});

let cur = document.querySelector("body");
let bodyCur = document.querySelector(".bodycur");

cur.addEventListener("mousemove", function name(params) {
  // console.log(params)
  bodyCur.style.left = `${params.x}px`;
  bodyCur.style.top = `${params.y}px`;
  // if ((params.x) == 0){
  //     bodyCur.style.display="none"
  // }
  // if ((params.y) == 0){
  //     bodyCur.style.display="none"
  // }
});
