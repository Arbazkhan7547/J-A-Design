function show(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
show();
function fsAnimation(){
  gsap.to("#fs h1",{
    opacity:0,
    delay:.3,
    ease:Expo.easeInout,
    duration:1
  })
  gsap.to("#fs",{
    height:0,
    ease:Power4.easeInout,
    duration:1,
    delay:1
   })
}
function textAnimation(){
  gsap.to("#part1 #text1 h1",{
    delay:2,
    top:0,
    ease:Expo.easeInout,
    duration:1
})
gsap.to("#part1 #text2 h1",{
    top:0,
    delay:2,
    ease:Expo.easeInout,
    duration:1
})
gsap.to("#part1 #text3 h1",{
    top:0,
    delay:2,
    ease:Expo.easeInout,
    duration:1
})
gsap.to("#text1 #card1",{
    height:"10vw",
    delay:2,
    ease:Expo.easeInout,
    duration:1,
})
gsap.to("#card2",{
    height:"10vw",
    delay:2,
    ease:Expo.easeInout,
    duration:1,
})
}
function parAnimation(){
  gsap.to("#part2 #text2 .line1 h1",{
    scrollTrigger:{
       scroller:"#main",
       trigger:"#part2",
       start:"top 60%"
    },
    y:10,
    stagger:.1,
    ease:Expo.easeInout,
    duration:.5
})
gsap.to(".textdiv",{
  scrollTrigger:{
     scroller:"#main",
     trigger:".textdiv",
     start:"top 50%"
    //  markers:true
  },
    y:30,
    ease:Expo.easeInout,
    duration:.5,
    opacity:1
})
}
function lineAnimation(){
  document.querySelectorAll(".texta")
  .forEach(function(text){
    text.addEventListener("mouseenter",function(dets){
       gsap.to(dets.target.children[1],{
           width:"100%",
           ease:Power3.easeInout,
           duration:.5
       })
    })
  })
  document.querySelectorAll(".texta")
  .forEach(function(text){
    text.addEventListener("mouseleave",function(dets){
       gsap.to(dets.target.children[1],{
           width:"0%",
           left:"100%",
           ease:Power3.easeInout,
           duration:.3,
           onComplete:function(){
              dets.target.children[1].style.left=0;
           }
       })
    })
  })
}
function bnavAnimation(){
  gsap.from("#bnav h1",{
    scrollTrigger:{
      scroller:"#main",
      trigger:"#bnav",
      start:"top 90%"
    },
    y:50,
    opacity:0,
    ease:Expo.easeInout,
    duration:1
  })
}
function cursor(){
  const cur=document.querySelector(".cursor");
document.addEventListener("mousemove",function(dets){
    cur.style.left=`${dets.x}px`;
    cur.style.top=`${dets.y}px`;
 })
//  document.querySelector("#text2")
//  .addEventListener("mouseenter",function(){
//    document.querySelector("h1").style.backgroundColor="red";
//    cur.style.backgroundColor="transparent";
//  })
//  document.querySelector("#part2 #text2")
//  .addEventListener("mouseleave",function(){
//    document.querySelector("h1").style.backgroundColor="transparent";
//    cur.style.backgroundColor="white";
//  })
}
 function navlineAnimation(){
  document.querySelectorAll(".atext")
  .forEach(function(text){
     text.addEventListener("mouseenter",function(dets){
       gsap.to(dets.target.children[1],{
          width:"100%",
          ease:Expo.easeInout,
          duration:.5
       })
     })
  })
  document.querySelectorAll(".atext")
  .forEach(function(text){
     text.addEventListener("mouseleave",function(dets){
       gsap.to(dets.target.children[1],{
          width:"0%",
          left:"100%",
          ease:Expo.easeInout,
          duration:.5,
          onComplete:function(){
            dets.target.children[1].style.left=0;
          }
       })
     })
  })
 }
function atextAnimation(){
   var h1=document.querySelector(".atext h1");
 var clutter="";
 for(i=0;i<=h1.textContent.length;i++)
 {
     clutter+=`<span data-delay="${i}">${h1.textContent.charAt(i)}</span>`;
 }
   h1.innerHTML=clutter;
   document.querySelectorAll(".atext h1 span")
   .forEach(function(elem){
       document.querySelector(".atext")
       .addEventListener("mouseenter",function(){
           gsap.to(elem,{
              y:-37,
              ease:Expo.easeInout,
              duration:.5,
              delay:elem.dataset.delay*.05

           })
       })
       document.querySelector(".atext")
       .addEventListener("mouseleave",function(){
           gsap.to(elem,{
              y:20,
              ease:Expo.easeInout,
              duration:.5,
              delay:elem.dataset.delay*.05
           })
       })
   })
  
   var a=document.querySelector(".atext a");
   var clutter="";
   for(i=0;i<=a.textContent.length;i++)
   {
      clutter+=`<span data-delay="${i}">${a.textContent.charAt(i)}</span>`
   }
   a.innerHTML=clutter;
   document.querySelectorAll(".atext a span")
   .forEach(function(elem){
      document.querySelector(".atext")
      .addEventListener("mouseenter",function(){
           gsap.to(elem,{
              z:50,
              // opacity:0,
              ease:Power3.easeInout,
              duration:1,
              delay:elem.dataset.delay*.05
           })
      document.querySelector(".atext")
           .addEventListener("mouseleave",function(){
            gsap.to(elem,{
              z:0,
              //  opacity:1,
               ease:Expo.easeInout,
               duration:1,
               delay:elem.dataset.delay*.05
            })
      })
       
      
   })
}
)}
function atextAnimation1(){
  var h1=document.querySelector(".atext h1");
 var clutter="";
 for(i=0;i<=h1.textContent.length;i++)
 {
     clutter+=`<span data-delay="${i}">${h1.textContent.charAt(i)}</span>`;
 }
   h1.innerHTML=clutter;
   document.querySelectorAll(".atext h1 span")
   .forEach(function(elem){
       document.querySelector(".atext")
       .addEventListener("mouseenter",function(){
           gsap.to(elem,{
              y:-37,
              ease:Expo.easeInout,
              duration:.5,
              delay:elem.dataset.delay*.1

           })
       })
      //  document.querySelector(".atext")
      //  .addEventListener("mouseleave",function(){
      //      gsap.to(elem,{
      //         y:20,
      //         ease:Expo.easeInout,
      //         duration:.5,
      //         delay:elem.dataset.delay*.1

      //      })
      //  })
   })
}

gsap.to(".mline .line2",{
  scrollTrigger:{
     scroller:"#main",
     trigger:".mline",
     start:"top 80%"
  },
  width:"80%",
  left:"100%",
  ease:Power1.easeInout,
  duration:1
})
gsap.to("#bnav .mline .line2",{
  scrollTrigger:{
     scroller:"#main",
     trigger:"#bnav .mline",
     start:"top 90%"
  },
  width:"80%",
  left:"100%",
  ease:Power1.easeInout,
  duration:1
})




cursor(); 
fsAnimation();    
textAnimation();
lineAnimation();
parAnimation();
bnavAnimation();
navlineAnimation();
// atextAnimation1();
// atextAnimation();