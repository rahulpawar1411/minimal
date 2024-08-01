function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#all"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#all" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#all", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#all").style.transform ? "transform" : "fixed"
  });


  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

}
locomotive();



// function loading() {
//   var tl = gsap.timeline()
//     .to("#loader ", {
//       y: -100,
//       duration: 1,
//       delay: 1,
//       opacity: -1,
//       // ease: "power2.out",
//     })
//   }
//   loading()


var tl = gsap.timeline()
  .from("#nav", {
    y: -100,
    duration: 1.5,
    delay:1,
    opacity: -1,
   
  })
  .from("#page1 .pg1-h h1",{
    y:50,
    opacity:0,
    duration: 1,
    stagger: 0.3,
  })
  .from("#page1 .pg1-text ",{
    y:50,
    opacity:0,
    duration: 1,
  })
  .from("#page2 #pg2-img ",{
    y:50,
    opacity:0,
    duration: 1,
    scrollTrigger: {
      trigger: "#page2 #pg2-img ",
      scroller: "#all",
      // markers:true,
      start: "top 80%",
      end: "top 40%",
      scrub: 1,
    }
    })
    .from("#page3 .pg3-head ",{
      y:50,
      opacity:0,
      duration: 1,
      scrollTrigger: {
        trigger: "#page3 .pg3-head",
        scroller: "#all",
        // markers:true,
        start: "top 80%",
        end: "top 40%",
        scrub: 1,
      }
  })
  .from("#page3 .pg3-body",{
    y:50,
    opacity:0,
    duration: 1,
    scrollTrigger: {
      trigger: "#page3 .pg3-body",
      scroller: "#all",
      // markers:true,
      start: "top 80%",
      end: "top 40%",
      scrub: 1,
    }
})
.from("#page4 .imgdiv1",{
  y:50,
  opacity:0,
  duration: 1,
  scrollTrigger: {
    trigger: "#page4 .imgdiv1",
    scroller: "#all",
    // markers:true,
    start: "top 80%",
    end: "top 40%",
    scrub: 1,
    stagger:1.2,
  }
})