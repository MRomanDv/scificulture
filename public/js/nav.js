const navMenu = document.querySelector('.nav')

const paintNav = ()=>{
    navMenu.innerHTML = `<div class="logo">
    <h2>SCI FI <span class="culture">CULTURE</span></h2>
</div>
<nav>
    <ul>
        <li class="homeli"><a href="/sci-fi/">Home page</a></li>
        <li><a href="/sci-fi/music">Sci fi Music</a></li>
        <li><a href="/sci-fi/films">Arts & Films</a></li>
        <li class="loginli"><a href="/sci-fi/login">Log in</a><a href="/sci-fi/register">Register</a></li>
    </ul>
</nav>
<div class="menu-btn"><i class="fas fa-bars"></i></div>`
}

paintNav()




//RESPONSIVE NAV
const menuBtn = document.querySelector('.menu-btn')
const nav = document.querySelector('nav')
const body = document.querySelector('body')

menuBtn.addEventListener('click',()=>{
    nav.classList.toggle('mobile-menu')
    if(nav.classList.contains('mobile-menu')){
        body.style.position = 'fixed'
    }else {
        body.style.position = 'static'
    }
    
})