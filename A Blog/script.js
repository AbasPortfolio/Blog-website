const trigger = document.querySelector('.menu-trigger'),
      addClass = document.querySelector('.site');
trigger.addEventListener('click', function(){
        addClass.classList.toggle('showmenu');
        document.body.classList.toggle('overflow')
    })

// Show sub menu
const submenu = document.querySelectorAll('.has-child > a');
submenu.forEach((menu)=> menu.addEventListener('click', toggle));

function toggle(){
    submenu.forEach((item) => item != this ? item.classList.remove('expand') : null );

    if(this.parentNode.classList != 'expand'){
        this.parentNode.classList.toggle('expand')
    }
}

// Fixed header
const nav = document.querySelector('.site > header');
function fixednav() {
    // this will add the class scroll at 1000px
    if(window.scrollY > 1000){
        nav.classList.add('fixed');
    }else{
        nav.classList.remove('fixed');
    }
}
window.addEventListener('scroll', fixednav)

//Search Form
const search  = document.querySelector('.search-trigger'),
      closeTrigger = document.querySelector('.search-close'),
      theclass = document.querySelector('.site');

search.addEventListener('click', function(){
    theclass.classList.toggle('showsearch')
})
closeTrigger.addEventListener('click', function(){
    theclass.classList.remove('showsearch')
})