let lineAnim = document.querySelector('.work_line');
let title = document.querySelector('.title_portfolio')
let workItem = document.querySelectorAll('.work_item')
let itemsLine = document.querySelectorAll('.item_line')
let lineWrap = document.querySelector('.wrap_elements_line')
let wrapWorks = document.querySelector('.wrap_works')
let modal = document.querySelector('.modal')
let closeIconModal = document.querySelector('.close_modal')
let textModal = document.querySelector('.text_modal')
let boxModal = document.querySelector('.more_modal_info')
let imageBoxModal = document.querySelector('.modal_image_work1')
let imageBoxModal2 = document.querySelector('.modal_image_work2')
let modalGitBtn = document.querySelector('.git_link')
let burgerIco = document.querySelector('.burger_ico')
let burgerMenu = document.querySelector('.burger_nav')
let headerMenu = document.querySelector('.header')

const lineObserver = new IntersectionObserver((entries)=>{
    if(entries[0].isIntersecting) {
        entries[0].target.classList.add('active_line')
    }
},{
    threshold: 0.5
});
lineObserver.observe(lineAnim);

const titleObserver = new IntersectionObserver((entries)=>{
    if(entries[0].isIntersecting) {
        entries[0].target.classList.add('active_title')
    }
},{
    threshold: 0.5
});
titleObserver.observe(title);




let circleLine = document.querySelectorAll('.circle_line')
let intervalAnimLIne = setInterval(() => {
    let parentHeight = lineAnim.parentElement.getBoundingClientRect().height;
    let height = lineAnim.getBoundingClientRect().height;
    let percentHeight = (height / parentHeight) * 100;
    if(percentHeight > 99) {
        clearInterval(intervalAnimLIne)
    }
    else if(percentHeight > 30 && percentHeight < 70) {
        circleLine[0].style.width = '500%'
            workItem[0].style.opacity = 1
            workItem[1].style.opacity = 1
        setTimeout(()=>{
            workItem[2].style.opacity = 1
            workItem[3].style.opacity = 1
        },1000)
    } else if(percentHeight > 80) {
        circleLine[1].style.width = '500%'
    }
}, 100);



wrapWorks.addEventListener('click', (event)=>{
    let item = event.target.closest('.work_item')
    let modal = document.querySelector('.modal')
    headerMenu.classList.toggle('show_menu')
    if(item.classList.contains('gitlab')) {
        modal.classList.add('visib_modal')
        boxModal.classList.add('box_modal_active')
        modalGitBtn.style.display = 'none'
        imageBoxModal.src = 'img/atworks/cicd.jpg'
        imageBoxModal2.style.display = 'inline'
        imageBoxModal2.src = 'img/atworks/cicd2.jpg'
        textModal.innerHTML = 'Work with <span class="ci_cd">GitLab CI/CD</span> to automate the processes of building, testing and deploying applications. Setting up GitLab CI/CD integration with Docker for application containerization and container management.'
    } else if(item.classList.contains('pipeline')) {
        modal.classList.add('visib_modal')
        boxModal.classList.add('box_modal_active')
        modalGitBtn.style.display = 'inline-block'
        imageBoxModal.src = 'img/atworks/pipelines1.jpg'
        imageBoxModal2.style.display = 'inline'
        imageBoxModal2.src = 'img/atworks/pipelines2.jpg'
        textModal.innerHTML = 'GitLab Pipelines: We have configured GitLab Pipelines to automatically build, test and deploy the application: Thanks to the use of GitLab Pipelines, we have significantly simplified the development process, accelerated the time to release new versions of the application and increased the overall stability of the code base. Feedback and Improvements: While using GitLab Pipelines has brought us a lot of value, we also see potential to improve the build and deployment process, for example by adding more granular process monitoring.'
    } else if(item.classList.contains('aws')) {
        modal.classList.add('visib_modal')
        boxModal.classList.add('box_modal_active')
        modalGitBtn.style.display = 'none'
        imageBoxModal.src = 'img/atworks/bash1.jpg'
        imageBoxModal2.style.display = 'inline'
        imageBoxModal2.src = 'img/atworks/bash2.jpg'
        textModal.innerHTML = 'Support and administration of servers based on Linux (Ubuntu, Debian). Creating and editing Bash scripts to automate data monitoring and backup tasks. Management of Linux-based infrastructure (Ubuntu, CentOS), including installation, configuration and maintenance of servers.'
    } else if(item.classList.contains('yaml')) {
        modal.classList.add('visib_modal')
        boxModal.classList.add('box_modal_active')
        modalGitBtn.style.display = 'none'
        imageBoxModal.src = 'img/atworks/yaml1.jpg'
        imageBoxModal2.style.display = 'none'
        textModal.innerHTML = 'I have experience with the YAML data serialization language, which is widely used in configuration files, CI/CD scripts, application settings and many other areas Results: Improved development process, faster delivery of new versions of the application. Skills and knowledge: Confident knowledge of YAML syntax. Experience using YAML to create and edit configuration files and CI/CD scripts. Ability to effectively structure and manage data using YAML.'
    } 
})
closeIconModal.addEventListener('click', ()=>{
    modal.classList.remove('visib_modal')
    boxModal.classList.remove('box_modal_active')
    headerMenu.classList.toggle('show_menu')
})

burgerIco.addEventListener('click', ()=>{
    burgerMenu.classList.toggle('active_menu')
    burgerIco.classList.toggle('active_ico')
})



