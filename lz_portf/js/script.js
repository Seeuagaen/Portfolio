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
        textModal.innerHTML = 'Работа с <span class="ci_cd">GitLab CI/CD</span> для автоматизации процессов сборки, тестирования и развертывания приложений. Настройка интеграции GitLab CI/CD с Docker для контейнеризации приложений и управления контейнерами.'
    } else if(item.classList.contains('pipeline')) {
        modal.classList.add('visib_modal')
        boxModal.classList.add('box_modal_active')
        modalGitBtn.style.display = 'inline-block'
        imageBoxModal.src = 'img/atworks/pipelines1.jpg'
        imageBoxModal2.style.display = 'inline'
        imageBoxModal2.src = 'img/atworks/pipelines2.jpg'
        textModal.innerHTML = 'GitLab Pipelines: Мы настроили GitLab Pipelines для автоматической сборки, тестирования и деплоя приложения: Благодаря использованию GitLab Pipelines мы значительно упростили процесс разработки, ускорили время выкладки новых версий приложения и повысили общую стабильность кодовой базы. Обратная связь и улучшения: Использование GitLab Pipelines принесло нам много пользы, однако мы также видим потенциал для улучшения процесса сборки и развертывания, например, путем добавления более детального мониторинга процессов.'
    } else if(item.classList.contains('aws')) {
        modal.classList.add('visib_modal')
        boxModal.classList.add('box_modal_active')
        modalGitBtn.style.display = 'none'
        imageBoxModal.src = 'img/atworks/bash1.jpg'
        imageBoxModal2.style.display = 'inline'
        imageBoxModal2.src = 'img/atworks/bash2.jpg'
        textModal.innerHTML = 'Поддержка и администрирование серверов на базе Linux (Ubuntu, Debian). Создание и редактирование скриптов на Bash для автоматизации задач по мониторингу и резервному копированию данных. Управление инфраструктурой на базе Linux (Ubuntu, CentOS), включая установку, настройку и обслуживание серверов.'
    } else if(item.classList.contains('yaml')) {
        modal.classList.add('visib_modal')
        boxModal.classList.add('box_modal_active')
        modalGitBtn.style.display = 'none'
        imageBoxModal.src = 'img/atworks/yaml1.jpg'
        imageBoxModal2.style.display = 'none'
        textModal.innerHTML = 'Я обладаю опытом работы с языком сериализации данных YAML, который широко используется в конфигурационных файлах, сценариях CI/CD, настройках приложений и многих других областях Результаты: Улучшение процесса разработки, ускорение поставки новых версий приложения. Навыки и знания: Уверенное владение синтаксисом YAML. Опыт использования YAML для создания и редактирования конфигурационных файлов и сценариев CI/CD.Способность эффективно структурировать и управлять данными с помощью YAML.'
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



