
//header animations
gsap.from('.header', {
    duration: 1 , y: '-100%', ease: 'bounce.out'
})
gsap.to('.logo', {
    rotate: 360, duration: 1.5, delay: 1
})
gsap.from('.nav_link', {
    opacity: 0 , duration: 0.5, delay: 0.5, stagger: 0.25
})

gsap.from('.p1 h1', {
    x: 200, duration: 3, ease: "elastic.out(1, 0.3)"
})

//header camera flash logo
const tl3 = gsap.timeline()
tl3
    .from('.flash', {
        opacity: 0, duration: 0.25, delay: 3.5
    })
    .to(".flash", {
        autoAlpha:0, repeat:0, yoyo:true, duration: 0.25
    })

//header dropdown menu
var tl2 = new TimelineMax({ paused: true });
tl2.from(".dropdown-content", {
    opacity: 0, y: 30, duration: 0.1
})
tl2.from(".dropTest", {
    x: 10, opacity: 0, stagger: 0.1, ease: 'bounce.out',
});

document.querySelector(".dropdown").addEventListener("mouseenter", drop);

function drop() {
    if (!tl2.isActive()) {
        tl2.play(0);
    }
}





//home page chevron animation
const tl = gsap.timeline()
tl
    .from('.p1 h2', {opacity: 0, duration: 1.5, ease: "power1.in"})
    .from('.p1 .chevron', {opacity: 0, duration: 1.5, ease: "power1.in"})
    .to(".p1 .chevron",  {autoAlpha:0, repeat:3, yoyo:true})


gsap.registerPlugin(ScrollTrigger);

// home page photo scroll
gsap.from('.foto-rij1', {
    scrollTrigger: {
        trigger: '.foto-rij1',
        start: "-50% 60%",
        end: "bottom center",
        markers: false,
        scrub: 1.5,
    },
    x: 2950,
    duration: 5,
})

gsap.from('.foto-rij2', {
    scrollTrigger: {
        trigger: '.foto-rij2',
        start: "-50% 60%",
        end: "bottom center",
        markers: false,
        scrub: 1.5,
    },
    x: -2950,
    duration: 5,
})
gsap.from('.foto-rij3', {
    scrollTrigger: {
        trigger: '.foto-rij3',
        start: "-50% 60%",
        end: "bottom center",
        markers: false,
        scrub: 1.5,
    },
    x: 2950,
    duration: 5,
})

gsap.from('.foto-rij4', {
    scrollTrigger: {
        trigger: '.foto-rij4',
        start: "-50% 60%",
        end: "bottom center",
        markers: false,
        scrub: 1.5,
    },
    x: -2950,
    duration: 5,
})

//home page button animation and trigger
gsap.from('.button', {
    scrollTrigger: {
        trigger: '.foto-rij4',
        start: "75% center",
    },
    opacity: 0, rotate: 10 ,x: 200, duration: 2, ease: "elastic.out(1, 0.3)"
})

gsap.fromTo(".button", {
    boxShadow: "0 0 0 0px rgba(42, 175, 32, 1)"
}, {
    boxShadow: "0 0 0 10px rgba(42, 175, 32, 0)",
    repeat: -1,
    duration: 2,
});






//gallery page animation
const tl4 = gsap.timeline()
tl4
    .from('.main-head', {
        opacity: 0, duration: 1, ease: "power3.in"
    })
    .from('.photo-container', {
        opacity:0,duration: 1, ease: "power3.in"
    })

//gallery page photo hover animation
document.querySelector(".photo1").addEventListener("mouseenter", photoHover);
document.querySelector(".photo1").addEventListener("mouseleave", photoLeave);
function photoHover() {
    if (!p1.isActive()) {
        p1.play(0);
    }
}
function photoLeave() {
    if (!p11.isActive()) {
        p11.play(0);
    }
}
var p1 = new TimelineMax({ paused: true });
p1.to(".photo1 img", {
    boxShadow: '0px 0px 20px 5px rgba(42,175,32,1)',
});
var p11 = new TimelineMax({ paused: true });
p11.to(".photo1 img", {
    boxShadow: '0px 0px 20px 5px rgba(42,175,32,0)',
});


document.querySelector(".photo2").addEventListener("mouseenter", photoHover2);
document.querySelector(".photo2").addEventListener("mouseleave", photoLeave2);
function photoHover2() {
    if (!p2.isActive()) {
        p2.play(0);
    }
}
function photoLeave2() {
    if (!p22.isActive()) {
        p22.play(0);
    }
}
var p2 = new TimelineMax({ paused: true });
p2.to(".photo2 img", {
    boxShadow: '0px 0px 20px 5px rgba(42,175,32,1)',
});

var p22 = new TimelineMax({ paused: true });
p22.to(".photo2 img", {
    boxShadow: '0px 0px 20px 5px rgba(42,175,32,0)',
});

document.querySelector(".photo3").addEventListener("mouseenter", photoHover3);
document.querySelector(".photo3").addEventListener("mouseleave", photoLeave3);
function photoHover3() {
    if (!p3.isActive()) {
        p3.play(0);
    }
}
function photoLeave3() {
    if (!p33.isActive()) {
        p33.play(0);
    }
}
var p3 = new TimelineMax({ paused: true });
p3.to(".photo3 img", {
    boxShadow: '0px 0px 20px 5px rgba(42,175,32,1)',
});

var p33 = new TimelineMax({ paused: true });
p33.to(".photo3 img", {
    boxShadow: '0px 0px 20px 5px rgba(42,175,32,0)',
});

document.querySelector(".photo4").addEventListener("mouseenter", photoHover4);
document.querySelector(".photo4").addEventListener("mouseleave", photoLeave4);
function photoHover4() {
    if (!p4.isActive()) {
        p4.play(0);
    }
}
function photoLeave4() {
    if (!p44.isActive()) {
        p44.play(0);
    }
}
var p4 = new TimelineMax({ paused: true });
p4.to(".photo4 img", {
    boxShadow: '0px 0px 20px 5px rgba(42,175,32,1)',
});

var p44 = new TimelineMax({ paused: true });
p44.to(".photo4 img", {
    boxShadow: '0px 0px 20px 5px rgba(42,175,32,0)',
});




