(() => {
    //start
    const burgerButton = document.getElementById('burgerIcon');
    const navBar = document.querySelector('nav');

    burgerButton.addEventListener('click', () => {
        navBar.classList.toggle('open');
    });
    //end
})();