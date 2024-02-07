let tl = gsap.timeline({scrollTrigger:{
    trigger:".page2",
    start:"0% 95%",
    end:"50% 50%",
    scrub:true,
    markers:false
}})

tl.to(".fanta",{
    width:"15vw",
    top:"121%",
    left:"10%"
},'orange')
tl.to(".orslice",{
    top:"160%",
    left:"20%"
},'orange')
tl.to(".orange",{
    top:"160%",
    right:"20%"
},'orange')
tl.to(".leaf",{
    top:"110%",
    rotateX:"175deg",
    left:"75%"
},'orange')
tl.to(".leaf2",{
    rotateX:"135deg",
    top:"100%",
    left:"5%"
},'orange')

let tl2 = gsap.timeline({scrollTrigger:{
    trigger:".page3",
    start:"0% 95%",
    end:"70% 50%",
    scrub:true,
    markers:false
}})

tl2.from(".lemon1",{
    rotate:"-90deg",
    left:"-80%",
    top:"150%"
},"coco")
tl2.from(".coco",{
    left:"-80%",
    bottom:"-550%",
    rotate:"-90deg",
},"coco")
tl2.from(".lemon3",{
    rotate:"-90deg",
    right:"-80%",
    top:"150%"
},"coco")

tl2.from(".pepsi",{
    right:"-80%",
    bottom:"-50%",
    rotate:"90deg",
},"coco")
tl2.to(".fanta",{
    width:"12vw",
    top:"230%",
    left:"45%"
},"coco")
tl2.from(".lemon",{
    rotate:"-90deg",
    top:"150%"
},"coco")

