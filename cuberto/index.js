

const generatingBlogs = ()=>{

    let blogs = [
        {
            blog_img : "https://cuberto.com/assets/uploads/54299d9789b57642a5b0bd39efb37175_03a4f580f1_w1080.webp",
            blog_bage : "Design course",
            blog_desc : "How to make UI/Ux Website //Frontend development"
        },
        {
            blog_img : "https://cuberto.com/assets/uploads/0dc60d465222db37738a6e2222207dce_0175db0d83_w1080.webp",
            blog_bage : "Design course",
            blog_desc : "How to cook an emotional site //Web development"
        },
        {
            blog_img : "https://cuberto.com/assets/uploads/016aefcc0949accfcd0c31034dec17d6_d25cd7a401_w1080.webp",
            blog_bage : "Dev course",
            blog_desc : "Cuberto Mouse Follower"
        },

    ];

    let clutter="";
    blogs.forEach((b)=>{
        clutter += `<div class="blog">
                        <div class="blog-img-container">
                            <img src="${b.blog_img}" alt="">
                        </div>
                        <div class="blog-details">
                            <div class="bage"> 
                                <span>${b.blog_bage}</span>
                            </div>
                            <div class="desc">
                                <p>${b.blog_desc}</p>
                            </div>
                        </div>
                    </div>`
    })
    let blogs_container = document.querySelector(".blogs-container");
    blogs_container.innerHTML = clutter; 

}
generatingBlogs();


const generatingCards = ()=>{

    let cards = [
    {
        card_img : "https://www.justwords.in/wp-content/uploads/2021/04/free-stock-photos-websites.jpg",
        card_title : "CubertoDesign",
        card_desc : "in collaboration with Vogue, who help us with illustrations, working on the design of the oline education website which goal is to enhance nursing practice"
    },

    {
        card_img : "https://img.magnific.com/free-vector/team-members-moving-cards-large-kanban-board_335657-4407.jpg?semt:ais_hybrid&w:740&q:80",
        card_title : "cuberto",
        card_desc : "Partnering with Vogue for custom illustrations, we are designing an online education platform to elevate nursing practice.",
    },
    {
        card_img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReM6x126kIP0JWkx8DI9pkidRxDDk-8d6Rgg&s",
        card_title : "CubertoDesign",
        card_desc : "in collaboration with Vogue, who help us with illustrations, working on the design of the oline education website which goal is to enhance nursing practice"
    },
    {
        card_img : "https://img.magnific.com/free-vector/tiny-business-people-watching-digital-devices-screens-clock-screen-addiction-digital-overload-information-overload-implications-concept-bright-vibrant-violet-isolated-illustration_335657-1026.jpg",
        card_title : "Cuberto",
        card_desc : "Partnering with Vogue for custom illustrations, we are designing an online education platform to elevate nursing practice"
    }

]
let clutter ="";
    cards.forEach((c)=>{
        clutter+=`<div class="card">
                        <div class="card-img-container">
                        <img src="${c.card_img}"/>
                        </div>
                        <div class="card-details">
                            <div class="title"> 
                                <i class="ri-instagram-line"></i>
                                <h4>${c.card_title}</h4>
                            </div>
                            <div class="desc">
                                <p>${c.card_desc}</p>
                            </div>
                        </div>
                    </div>`
    })

    let cards_container = document.querySelector(".cards-container");
    cards_container.innerHTML = clutter;
    
}
generatingCards();


const  generatingScrollDetails = ()=>{

    let scrolldetails = [
        {
            heading:"Kyoto",
            subheading:"Official Travel Guide of Kyoto, Japan",
            desc:"Experience the timeless beauty of Kyoto with its ancient temples, peaceful gardens, and rich cultural heritage.",
            img:"https://images.unsplash.com/photo-1624253346805-df69ad2b3d7f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8S3lvdG98ZW58MHwxfDB8fHww"
        },
        {
            heading:"Santorini",
            subheading:"Official Tourism Portal of Santorini, Greece",
            desc:"Discover breathtaking sunsets, whitewashed villages, and crystal-clear waters on the beautiful island of Santorini.",
            img:"https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2FudG9yaW5pfGVufDB8fDB8fHww"
        },

        {
            heading:"Sydney",
            subheading:"Official Visitor Guide of Sydney, Australia",
            desc:"Explore Sydney's iconic Opera House, stunning beaches, and vibrant harbor with unforgettable experiences.",
            img:"https://images.unsplash.com/photo-1590716209211-ea74d5f63573?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3lkbmV5fGVufDB8MXwwfHx8MA%3D%3D"
        },

        {
            heading:"Barcelona",
            subheading:"Official Tourism Portal of Barcelona, Spain",
            desc:"Admire Gaudí's architectural masterpieces, lively streets, and Mediterranean beaches in vibrant Barcelona.",
            img:"https://images.unsplash.com/photo-1579282240050-352db0a14c21?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmFyY2Vsb25hfGVufDB8MXwwfHx8MA%3D%3D"
        },

    ]

    let clutter1="";
    let clutter2="";
    scrolldetails.forEach((sd)=>{

        if(sd === scrolldetails.at(-1)){
             clutter1 +=  `<div class="scroll-details last">
                                <h3 class="heading">${sd.heading}</h3>
                                <h2 class="subheading">${sd.subheading}</h2>
                                <p class="desc">${sd.desc}</p>        
                           </div>`

            clutter2 += `<img src="${sd.img}" />`
        }
        else{
            
            clutter1 += `<div class="scroll-details">
                            <h3 class="heading">${sd.heading}</h3>
                            <h2 class="subheading">${sd.subheading}</h2>
                            <p class="desc">${sd.desc}</p>        
                        </div>`

            clutter2 += `<img src="${sd.img}" />`
        }
        
        
    })
   
    let scroll_left = document.querySelector(".scroll-left");
    scroll_left.innerHTML = clutter1;

    let scroll_right_img_container = document.querySelector(".scroll-right .img-container");
    scroll_right_img_container.innerHTML = clutter2;
}
 generatingScrollDetails();


const mixeffect= ()=>{
Shery.mouseFollower();
Shery.hoverWithMediaCircle(".elem", {
    videos:["/cuberto/videos/1.mp4","/cuberto/videos/2.mp4","/cuberto/videos/3.mp4"]
})
Shery.makeMagnet(".magnet")


gsap.to(".scroll-details", {
    y: "-300%",
    ease: "power1.inout",
    scrollTrigger:{
        trigger:".scroll-container",
        // markers:true,
        pin:true,
        start:"top top",
        end:"bottom top",
        endTrigger:".last",
        scrub:1
    } 
})

let scrolldetails = document.querySelectorAll(".scroll-details")
Shery.imageEffect(".img-container", {
  style: 5,
//   config:{onMouse:{value:1}},
  slideStyle: (setScroll) => {
    scrolldetails.forEach((sd, idx)=>{
        ScrollTrigger.create({
            trigger:sd,
            start:"top top",
            scrub:1,
            onUpdate: function(dets){
                setScroll(dets.progress + idx)
            }
        })
    })
  },
});

}
mixeffect();
