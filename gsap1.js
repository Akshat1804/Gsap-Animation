var tl = gsap.timeline()

tl.from("nav h2",{
    duration: 0.7,
    y: -40,
    opacity: 0,
    delay: 0.25
})

tl.from(".tags h1",{
    duration: 0.7,
    y: -40,
    opacity: 0,
    delay: 0.25,
    stagger: 0.25
})

tl.from(".tags button",{
    duration: 0.7,
    y: -40,
    opacity: 0,
    delay: 0.25,
    scale: 0
})

tl.from(".left h1",{
    duration: 0.7,
    x: -40,
    opacity: 0,
    delay: 0.25
})

tl.from(".left p",{ 
    duration: 0.7,
    x: -40,
    opacity: 0,
    delay: 0.25
})

tl.from(".left button",{
    duration: 0.7,
    x: -40,
    opacity: 0,
    delay: 0.25,
    scale: 0
})

tl.from(".right img",{
    x: 100,
    opacity: 0,
    duration: 1.2,
})