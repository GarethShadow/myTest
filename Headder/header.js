function menu() {
    const menuButton = document.querySelector('.button__menu');
    const menuHandel = document.querySelector(".dropdown__menu-content");
    menuButton.addEventListener('click', () => {
        menuHandel.classList.toggle('show');
    });

    document.body.addEventListener('click', (e) => {
        if (e.target.className !== 'button__menu') {
            menuHandel.classList.remove('show');
        }
    });
}
menu();

function authorization() {
    const authorizationButton = document.querySelector('.header__log-in--button');
    const authorization = document.querySelector('.header__log-in--content');
    const modalClose = document.querySelector('.modal__log-in--close');

    authorizationButton.addEventListener('click', () => {
        authorization.classList.toggle('show-flex');
    });

    modalClose.addEventListener('click', () => {
        authorization.classList.remove('show-flex');
    });
}
authorization();
