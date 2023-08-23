(function () {
  const field1 = document.querySelector(".menubutton");
  const field2 = document.querySelector(".menubutton__line");
  const field3 = document.querySelector(".mobile_nav");
  const n1 = document.getElementById("mob-nav-links1");
  const n2 = document.getElementById("mob-nav-links2");
  const n3 = document.getElementById("mob-nav-links3");
  const n4 = document.getElementById("mob-nav-links4");
  // mobile navigation state
  let isAnimate = false;
  const toggle = () => {
    if (isAnimate) {
      field1.classList.remove("animate");
      field2.classList.remove("animate");
      field3.classList.remove("active");
      isAnimate = !isAnimate;
      return;
    }
    field1.classList.add("animate");
    field2.classList.add("animate");
    field3.classList.add("active");
    isAnimate = !isAnimate;
  };
  field1.addEventListener("click", toggle);
  n1.addEventListener("click", toggle);
  n2.addEventListener("click", toggle);
  n3.addEventListener("click", toggle);
  n4.addEventListener("click", toggle);
})();

const done = document.getElementById("done");

function showSuccess() {
  done.classList.add("active");
  setTimeout(() => {
    done.classList.remove("active");
  }, 5000);
}

document.getElementById("showSuccess").addEventListener("click", showSuccess);
