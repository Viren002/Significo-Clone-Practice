// alert("Hey !");

function homepageAnimation() {

    gsap.set(".slidesm", {
        scale: 12
    });
    
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".home",
            start: "top top",
            end: "bottom bottom",
            
            scrub: 2,
            
        },
    });
    
    
    
    tl.to(".vdodiv", {
        
        '--clipvid' : "0%",
        ease: Power2,
    
    
    }, "a")
    
    
    tl.to(".slidesm", {
        
        scale: 1,
        ease: Power2,
    
    }, "a" )
    
    tl.to(".slidesm", {
        
        scale: 1,
        ease: Power2
    
    }, "a" )
    .to(".lft", {
        
        xPercent: -10,
        stagger: .03,
        ease: Power1
    
    }, "b" )
    .to(".rht", {
        
        xPercent: -10,
        stagger: .03,
        ease: Power1
    
    }, "b" );;
    
    

}

function slidespageAnimation() {

    gsap.to(".slide", {
        scrollTrigger: {
            trigger: ".real",
            start: "top top",
            end: "bottom bottom",
            
            scrub: 2,
            
        },
    
        xPercent: -200,
        ease: Power1,
    })

}

function teamsAnimation() {

    document.querySelectorAll(".member-name")
.forEach( function(el) {
    el.addEventListener("mousemove", function(dets) {

        // const elePic= this.querySelector(".picture");

        

        gsap.to(this.querySelector(".picture"), {
            opacity: 1,
            x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX) ,
            ease: Power4,
            duration: .7
        })


        
    })


    el.addEventListener("mouseleave", function(dets){

        // const elePic= this.querySelector(".picture");

        gsap.to(this.querySelector(".picture"), {
            opacity: 0,
            ease: Power4,
            duration: .7,
        })
    });

})

}

function loco() {

    (function () {
        let scroll = new LocomotiveScroll();
    })();

}

function capsulesAnimation() {

    gsap.to(".capsule:nth-child(2)", {
        scrollTrigger: {
            trigger: ".capsules",
            start: "top 30%",
            end: "bottom bottom",
            
            scrub: 1
        },

        y: 0,
        ease: Power4,
    });
}

function bodyColorChange() {

    document.querySelectorAll(".section")
.forEach( function(e) {
    ScrollTrigger.create( {
        trigger: e,
        start: "top 50%",
        end: "bottom 50%",
        

        onEnter: function() {
            document.body.setAttribute("theme", e.dataset.color );

        },

        onEnterBack: function() {
            document.body.setAttribute("theme", e.dataset.color );

        }
    }
    )
})

}



loco();

homepageAnimation();

slidespageAnimation();

teamsAnimation();

capsulesAnimation();

bodyColorChange();