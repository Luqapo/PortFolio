document.addEventListener("DOMContentLoaded", () => {
    
    const hamburgerMenu = document.getElementById('hamburger');
    const menu = document.querySelector('.nav__menu');
    const menuListItems = document.querySelectorAll('li');
    
    
    hamburgerMenu.addEventListener('click', () => {
        menu.style.display = 'block';
        hamburgerMenu.style.display = 'none';
    })

    menuListItems.forEach(item => {
        item.addEventListener('click', () => {
            menu.style.display = 'none';
            hamburgerMenu.style.display = 'block';
        })
    })
})