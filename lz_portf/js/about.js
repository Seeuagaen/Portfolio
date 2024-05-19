let closeIconModal = document.querySelector('.close_modal')
let burgerIco = document.querySelector('.burger_ico')
let burgerMenu = document.querySelector('.burger_nav')
let headerMenu = document.querySelector('.header')

closeIconModal.addEventListener('click', ()=>{
    modal.classList.remove('visib_modal')
    boxModal.classList.remove('box_modal_active')
    headerMenu.classList.toggle('show_menu')
})

burgerIco.addEventListener('click', ()=>{
    burgerMenu.classList.toggle('active_menu')
    burgerIco.classList.toggle('active_ico')
})

// obs
let titleAbout = document.querySelector('.title_about')
let titleExp = document.querySelector('.title_exp')
let titleSkills = document.querySelector('.skills_title')
let imageAbout = document.querySelector('.person_image')
let imageExp = document.querySelector('.exp_ico')
let descAbout = document.querySelector('.desc_about')
let descExp = document.querySelector('.desc_exp')

const titles = new IntersectionObserver((entries)=>{
    if(entries[0].isIntersecting) {
        entries[0].target.classList.add('active_title'),
        titleExp.classList.add('active_title')
        titleSkills.classList.add('active_title')
        imageAbout.classList.add('active_image')
        imageExp.classList.add('active_image')
        descAbout.classList.add('desc_active')
        descExp.classList.add('desc_active')
    }
},{
    threshold: 0.5
});
titles.observe(titleAbout);


