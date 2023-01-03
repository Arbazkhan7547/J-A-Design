 
 var h1=document.querySelector(".div h1");
var clutter="";
for(var i=0;i<=h1.textContent.length;i++)
{
    clutter+=`<span data-delay="${i}">${h1.textContent.charAt(i)}</span>`;
}
h1.innerHTML=clutter;
document.querySelectorAll(".div h1 span")
.forEach(function(elem){
    document.querySelector(".div")
    .addEventListener("mouseenter",function(){
        gsap.to(elem,{
            y:-30,
            ease:Expo.easeInout,
            delay:elem.dataset.delay*.1,
            duration:1
        })
    })
    document.querySelector(".div")
    .addEventListener("mouseleave",function(){
        gsap.to(elem,{
            y:20,
            ease:Expo.easeInout,
            duration:1,
            delay:elem.dataset.delay*.1
        })
    })
})
var a=document.querySelector(".div a");
var clutter="";
for(var i=0;i<=a.textContent.length;i++)
{
    clutter+=`<span data-delay="${i}">${a.textContent.charAt(i)}</span>`
}
a.innerHTML=clutter;
 document.querySelectorAll(".div a span")
 .forEach(function(elem){
    document.querySelector(".div")
    .addEventListener("mouseenter",function(){
        gsap.to(elem,{
            // y:-30,
            opacity:0,
            ease:Expo.easeInout,
            duration:1,
            delay:.1,
            delay:elem.dataset.delay*.1
        })
    })
    document.querySelector(".div")
    .addEventListener("mouseleave",function(){
        gsap.to(elem,{
            // y:0,
            opacity:1,
            ease:Expo.easeInout,
            duration:1,
            delay:elem.dataset.delay*.1
        })
    })
 })