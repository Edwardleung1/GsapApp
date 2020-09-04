// shop element on nav
const navButton = document.querySelector(".nav-button");

// nav open element on nav
const navOpen = document.querySelector(".nav-open");

// animate multiple things with timelineLite
const tl = new TimelineLite({ paused: true, reversed: true });

tl.to(".cover", 1, {
  width: "60%",
  ease: Power2.easeOut,
})
  .to(
    "nav",
    1,
    {
      height: "100%",
      ease: Power2.easeOut,
    },
    "-= 0.5" // start the animation halfway through the 1st one
  )
  .fromTo(
    ".nav-open",
    0.5,
    {
      opacity: 0, // animate from opacity 0
      x: 50,
      ease: Power2.easeOut,
    },
    {
      opacity: 1, // animation to opacity 1
      x: 0,
      onComplete: function () {
        navOpen.style.pointerEvents = "auto";
        console.log("done");
      },
    }
  );

// event listener
navButton.addEventListener("click", (e) => {
  // check if animation is going, stop animation from stopping when clicked
  if (tl.isActive()) {
    e.preventDefault();
    e.stopImmediatePropagation();
    return false;
  }
  // play the toggle animation
  toggleTween(tl);
});

// animate back
function toggleTween(tween) {
  tween.reversed() ? tween.play() : tween.reverse();
}
