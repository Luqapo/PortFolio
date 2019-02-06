document.addEventListener("DOMContentLoaded", () => {
    
    const hamburgerMenu = document.getElementById('hamburger');
    const menu = document.querySelector('.nav__menu');
    const menuListItems = document.querySelectorAll('li');
    const skillsDropdownButton = document.querySelectorAll('i.fa-angle-down');
    const skillsDropdownDiv = document.querySelectorAll('.skills__dropdown__item');

    hamburgerMenu.addEventListener('click', () => {
        menu.style.display = 'block';
        hamburgerMenu.style.display = 'none';
    });

    menuListItems.forEach(item => {
        item.addEventListener('click', () => {
            console.log(item.firstElementChild.innerHTML);  
            if(window.innerWidth < 900) {
                menu.style.display = 'none';
                hamburgerMenu.style.display = 'block';
                
            }
        })
    });

    skillsDropdownButton.forEach((button, index) => {
        button.addEventListener('click', () => {
            if(skillsDropdownDiv[index].style.display === 'none'){
                skillsDropdownDiv[index].style.display = 'block';
                skillsDropdownDiv[index].style.opacity = 1;
                skillsDropdownButton[index].classList.remove('fa-angle-down');
                skillsDropdownButton[index].classList.add('fa-angle-up');
            } else {
                skillsDropdownDiv[index].style.display = 'none';
                skillsDropdownButton[index].classList.remove('fa-angle-up');
                skillsDropdownButton[index].classList.add('fa-angle-down');
            }
        })
    })
})