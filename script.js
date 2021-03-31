gsap.to('.videoplyr',{

    scrollTrigger:{
        trigger:"#main",
        start:"top top",
        scrub:2,
        pin:"#main"
    },
    width:"100%"

})

gsap.to('#one',{

    scrollTrigger:{
        trigger:"#main",
        start:"top top",
        scrub:3
       
    },
    
    left:'-600px',
    opacity:0
})

gsap.to('#two, #three',{

    scrollTrigger:{
        trigger:"#main",
        start:"top top",
        scrub:3
    },
    
    left:'-300px',
    opacity:0
})


gsap.to('#six',{

    scrollTrigger:{
        trigger:"#main",
        start:"top top",
        scrub:3
       
    },
    
    right:'-600px',
    opacity:0
})

gsap.to('#four, #five',{

    scrollTrigger:{
        trigger:"#main",
        start:"top top",
        scrub:3
    },
    
    right:'-300px',
    opacity:0
})