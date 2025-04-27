// function locomotive() {
//   gsap.registerPlugin(ScrollTrigger);

//   // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

//   const locoScroll = new LocomotiveScroll({
//     el: document.querySelector("#all"),
//     smooth: true
//   });
//   // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
//   locoScroll.on("scroll", ScrollTrigger.update);

//   // tell ScrollTrigger to use these proxy methods for the "#all" element since Locomotive Scroll is hijacking things
//   ScrollTrigger.scrollerProxy("#all", {
//     scrollTop(value) {
//       return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//     }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//     getBoundingClientRect() {
//       return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
//     },
//     // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//     pinType: document.querySelector("#all").style.transform ? "transform" : "fixed"
//   });


//   // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
//   ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

//   // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
//   ScrollTrigger.refresh();

// }
// locomotive();



// function animetion(){
//   var tl = gsap.timeline()
//   .from("#nav", {
//     y: -100,
//     duration: 1.5,
//     delay: 1,
//     opacity: -1,

//   })
//   .from("#page1 .pg1-h h1", {
//     y: 50,
//     opacity: 0,
//     duration: 1,
//     stagger: 0.3,
//   })
//   .from("#page1 .pg1-text ", {
//     y: 50,
//     opacity: 0,
//     duration: 1,
//   })
//   .from("#page2 #pg2-img ", {
//     y: 50,
//     opacity: 0,
//     duration: 1,
//     scrollTrigger: {
//       trigger: "#page2 #pg2-img ",
//       scroller: "#all",
//       // markers:true,
//       start: "top 90%",
//       end: "top 70%",
//       scrub: 1,
//     }
//   })
//   .from("#page3 .pg3-head ", {
//     y: 50,
//     opacity: 0,
//     duration: 1,
//     scrollTrigger: {
//       trigger: "#page3 .pg3-head",
//       scroller: "#all",
//       // markers:true,
//       start: "top 90%",
//       end: "top 70%",
//       scrub: 1,
//     }
//   })
//   .from("#page3 .pg3-body", {
//     y: 50,
//     opacity: 0,
//     duration: 1,
//     scrollTrigger: {
//       trigger: "#page3 .pg3-body",
//       scroller: "#all",
//       // markers:true,
//       start: "top 90%",
//       end: "top 70%",
//       scrub: 1,
//     }
//   })
//   .from("#page4 .imgdiv1", {
//     y: 50,
//     opacity: 0,
//     duration: 1,
//     scrollTrigger: {
//       trigger: "#page4 .imgdiv1",
//       scroller: "#all",
//       // markers:true,
//       start: "top 90%",
//       end: "top 70%",
//       scrub: 1,
//       stagger: 1.2,
//     }
//   })
//   .from("#page5 .pg5-head", {
//     y: 50,
//     opacity: 0,
//     duration: 1,
//     scrollTrigger: {
//       trigger: "#page5 .pg5-head",
//       scroller: "#all",
//       // markers:true,
//       start: "top 90%",
//       end: "top 70%",
//       scrub: 1,
//       stagger: 1.2,
//     }
//   })
//   .from("#page5 .pg5-main .brand", {
//     y: 50,
//     opacity: 0,
//     duration: 1,
//     scrollTrigger: {
//       trigger: "#page5 .pg5-main .brand",
//       scroller: "#all",
//       // markers:true,
//       start: "top 90%",
//       end: "top 70%",
//       scrub: 1,
//       stagger: 1.2,
//     }
//   })
//   .from("#page5 .pg5-main .imgdiv5", {
//     y: 50,
//     opacity: 0,
//     duration: 1,
//     scrollTrigger: {
//       trigger: "#page5 .pg5-main .imgdiv5",
//       scroller: "#all",
//       // markers:true,
//       start: "top 90%",
//       end: "top 70%",
//       scrub: 1,
//       stagger: 1.2,
//     }
//   })
//   .from("#page5 .pg5-main .visual", {
//     y: 50,
//     opacity: 0,
//     duration: 1,
//     scrollTrigger: {
//       trigger: "#page5 .pg5-main .visual",
//       scroller: "#all",
//       // markers:true,
//       start: "top 90%",
//       end: "top 70%",
//       scrub: 1,
//       stagger: 1.2,
//     }
//   })
//   .from("#page5 .pg5-main .menu", {
//     x: 100,
//     opacity: 0,
//     // duration: 1,
//     scrollTrigger: {
//       trigger: "#page5 .pg5-main .menu",
//       scroller: "#all",
//       // markers:true,
//       start: "top 90%",
//       end: "top 70%",
//       scrub: 1,
//       stagger: 1.2,
//     }
//   })
//   .from("#page5 .pg5-main .menu2", {
//     x: 100,
//     opacity: 0,
//     // duration: 1,
//     scrollTrigger: {
//       trigger: "#page5 .pg5-main .menu2",
//       scroller: "#all",
//       // markers:true,
//       start: "top 90%",
//       end: "top 70%",
//       scrub: 1,
//       stagger: 1.2,
//     }
//   })
//   .from("#page6 .pg6-head", {
//     x: -100,
//     opacity: 0,
//     // duration: 1,
//     scrollTrigger: {
//       trigger: "#page6 .pg6-head",
//       scroller: "#all",
//       // markers:true,
//       start: "top 90%",
//       end: "top 70%",
//       scrub: 1,
//       stagger: 1.2,
//     }
//   })
//   .from("#page6 .mg", {
//     // x:-100,
//     scale: 1,
//     opacity: 0,
//     duration: 1,
//     scrollTrigger: {
//       trigger: "#page6 .mg",
//       scroller: "#all",
//       // markers:true,
//       start: "top 90%",
//       end: "top 70%",
//       scrub: 1,
//       stagger: 1.2,
//     }
//   })
//   .from("#page6 .pg6-foot", {
//     x: -100,
//     // scale:1,
//     opacity: 0,
//     duration: 1,
//     scrollTrigger: {
//       trigger: "#page6 .pg6-foot",
//       scroller: "#all",
//       // markers:true,
//       start: "top 90%",
//       end: "top 70%",
//       scrub: 1,
//       stagger: 1.2,
//     }
//   })
//   .from("#page7", {
//     y: 100,
//     // scale:1,
//     opacity: 1,
//     duration: 1,
//     // scrollTrigger: {
//     //   trigger: "#page7",
//     //   scroller: "#all",
//     //   // markers:true,
//     //   start: "top 90%",
//     //   end: "top 70%",
//     //   scrub: 1,
//     //   stagger: 1.2,
//     // }
//   }
// )
// }
// animetion();


function responsive(){
  var open = document.querySelector("#sidenav");
// var open = document.querySelector(".ri-menu-fold-line");

var resSide = document.querySelector("#res-side");

var close = document.querySelector(".ri-menu-unfold-line");
var nav22 = document.querySelector(".nav2");



open.addEventListener("click", function(){
  // alert("hyy");
  resSide.style.right = "-50%";
  open.style.display = "none";
  close.style.display = "block";
  document.body.style.overflowY = "hidden";

  gsap.from("#res-side .nav2 ",{
    x:100,
    opacity:0,
    duration:1.5,
    
  });
  
})

close.addEventListener("click", function(){

  resSide.style.right = "-150%";
  close.style.display = "none";
  open.style.display = "block";
  document.body.style.overflowY = "auto";
})
}
responsive();