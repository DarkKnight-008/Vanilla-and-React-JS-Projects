window.addEventListener("load", function(){
requestAnimationFrame(()=>{

let video_btn = document.querySelector(".overlay-btn-container button")
    video_btn.addEventListener("mouseenter", function(){
        document.querySelector(".video-container video").style.opacity = 1;
})
video_btn.addEventListener("mouseleave", function(){
    document.querySelector(".video-container video").style.opacity = 0;
})

const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth:true
});

gsap.delayedCall(0.1, ()=>{
    
    gsap.from(".navlinks", {
        y:50,
        duration:1,
        ease: "Power3.out",
        opacity:0,
        stagger:0.2,
        
        
    })
    
    gsap.from(".heroes", {
        y:60,
        duration: 2,
        ease: "expo.out",
        opacity:0,
        stagger:0.05,
  
    
})

Shery.textAnimate(".overlay-text h1", {
    style: 2,
    y: 15,
    delay: 0.015,
    duration: 1.8,
    ease: "expo.out",
});

})



Shery.imageEffect(".hero-left .img-container img", {style:4 , config:{"uColor":{"value":false},"uSpeed":{"value":0.6,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":0.46,"range":[0,5]},"uFrequency":{"value":2.37,"range":[0,10]},"geoVertex":{"range":[1,64],"value":32},"zindex":{"value":9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6976908762180316},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.24,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}})

Shery.imageEffect(".hero-mid .img-container img", {style:4, config:{"uColor":{"value":true},"uSpeed":{"value":1.07,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":0.8,"range":[0,5]},"uFrequency":{"value":5.65,"range":[0,10]},"geoVertex":{"range":[1,64],"value":37.07},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7162635774819957},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.4,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}})


Shery.imageEffect(".sh-left .img-container img", {style:4,config:{"uColor":{"value":false},"uSpeed":{"value":0.46,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":1.64,"range":[0,5]},"uFrequency":{"value":3.89,"range":[0,10]},"geoVertex":{"range":[1,64],"value":13.98},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.690461176198935},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}})

Shery.imageEffect(".sh-right .img-container img", {style:4,config:{"uColor":{"value":false},"uSpeed":{"value":0.46,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":1.64,"range":[0,5]},"uFrequency":{"value":3.89,"range":[0,10]},"geoVertex":{"range":[1,64],"value":13.98},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.690461176198935},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}})

Shery.imageEffect(".biodegradable .img-container", {style:5, gooey:true, config:{"a":{"value":1.37,"range":[0,30]},"b":{"value":0.98,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.00253945728544},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1.06,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":31}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.44,"range":[0,2]},"noise_scale":{"value":19.08,"range":[0,100]}}})

})
})