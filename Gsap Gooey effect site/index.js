function animation(){

let animating = false;
if(!animating)
{
    animating = true;
    Shery.imageEffect(".bg-container", {
        style:5,
        gooey:true,
        config:{"a":{"value":0.69,"range":[0,30]},"b":{"value":0.98,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.209436094691232},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.06,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":3}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.41,"range":[0,2]},"noise_scale":{"value":12.98,"range":[0,100]}},
           
    })
    animating = false
}
}

animation();

const elem = [
    {
        heading: ["peter parker",
        "Tony stark",
        "Steve rogers",
        "thor"]
    },
    {
        heading :["The Ultimate",
        "Genius, billionair",
        "The sield of justice",
        "The god of"]
        
    },
    {
        heading:["Spiderman",
        "Iron man",
        "Captain america",
        "thunder"]       
    }
]


let clutter="";
elem.forEach((e)=>{
    clutter += `<div class="elem">`;

    e.heading.forEach((text) => {
        clutter += `<h1>${text}</h1>`;
    });

    clutter += `</div>`;


})
console.log(clutter)

document.querySelector(".elem-box").innerHTML = clutter;


let elems = document.querySelectorAll(".elem");


elems.forEach((e)=>{    
    
    let main = document.querySelector("main");
    let index = 0;
    let animate = false;
    
    
    main.addEventListener("click", function(){
        let h1 = e.querySelectorAll("h1");
        
            if (animate) return; 
                
            animate = true;
                
            gsap.to(h1[index], {
                top: "-100%",
                duration: 1,
                ease: Expo.easeInOut,
                onComplete: function () {
                    gsap.set(this._targets[0], {top: "100%"});

                    animate = false;
                }
            });

            index === h1.length-1 ? index=0 : index++; 

            gsap.to(h1[index], {
                top:"0%",
                duration:1,
                ease:Expo.easeInOut
            })
        

        
        
    })

})