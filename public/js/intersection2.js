const imgs = document.querySelector('.scifi-records')

const loadimg = (entry,observer)=>{
    entry.forEach((entrada)=>{
        if(entrada.isIntersecting) {
            entrada.target.classList.add('visible')
        }else {
            entrada.target.classList.remove('visible')
        }
    })
}

const observer = new IntersectionObserver(loadimg, {
    root:null,
    rootMargin:'0px 0px 0px 0px ',
    threshold:0.1
})

observer.observe(imgs)