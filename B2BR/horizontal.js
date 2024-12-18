gsap.registerPlugin(ScrollTrigger);

const pageContainer = document.querySelector(".container");

const scroller = new LocomotiveScroll({
    el: pageContainer,
    smooth: true
});

scroller.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(pageContainer, {
    scrollTop(value) {
        return arguments.length
        ? scroller.scrollTo(value, 0, 0)
        : scroller.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return{
            left: 0,
            top: 0,
            width: window.innerWidth,
            height: window.innerHeight
        };
    },
    pinType: pageContainer.style.transform ? "transform" : "fixed"
});

window.addEventListener("load", function() {
    let pinBoxes = document.querySelectorAll(".pin_wrap > *");
    let pinWrap = document.querySelector(".pin_wrap");
    let pinWrapWidth = pinWrap.offsetWidth;
    let horizontalScrollLenght = pinWrapWidth - window.innerWidth;
    console.log(horizontalScrollLenght);
gsap.to(".pin_wrap", {
    scrollTrigger: {
      scroller: pageContainer, 
      trigger: "#scroll_two",
      start: "top top",
      end: pinWrapWidth,
      scrub: true,      pin: true,
    },
    x: -horizontalScrollLenght,
    ease: "none"
  });

  ScrollTrigger.addEventListener("refresh", () =>
scroller.update()); //locomotive-scroll

  ScrollTrigger.refresh();
});



