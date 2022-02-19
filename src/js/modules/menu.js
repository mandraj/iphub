const menu = (trigger, close, item, activeClass) => {
    const openBtn = document.querySelector(trigger),
          closeBtn = document.querySelector(close),
          menu = document.querySelector(item),
          link = document.querySelectorAll('.nav-link');


    openBtn.addEventListener('click', () => {
        menu.classList.add(activeClass);
        document.body.style.overflow = "hidden";
    })

    link.forEach(item => {
        item.addEventListener('click', () => {
            closeMenu();
        })
    })

    closeBtn.addEventListener('click', () => {
        closeMenu();
    })

    const closeMenu = () => {
        menu.classList.remove(activeClass);
        document.body.style.overflow = "";
    }
}

export default menu;