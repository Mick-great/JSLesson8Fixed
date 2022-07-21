window.addEventListener('DOMContentLoaded', function () {
    let featuredItems = document.querySelectorAll('.featureditem'),
        buttons = document.querySelectorAll('button'),
        openBtn = document.querySelector('.open');

    function createcart() {
        let cart = document.createElement('div'),
            field = document.createElement('div'),
            field = document.createElement('div'),
            heading = document.createElement('h2'),
            closeBtn = document.createElement('button');


        cart.classList.add('cart');
        field.classList.add('cart-field');
        closeBtn.classList.add('close');

        heading.textContent = "В нашей корзине:";
        closeBtn.textContent = "Закрыть";

        document.body.appendChild(cart);
        cart.appendChild(heading);
        cart.appendChild(field);
        cart.appendChild(closeBtn);


    }

    createCart();

    let field = document.querySelector('cart-field'),
        cart = this.document.querySelector('cart'),
        close = this.document.querySelector('close');

    function openCart() {
        cart.style.display = "block";
    }
        fuction closeCart() {
        cart.style.display = "none";

    }
    openBtn.addEventListener('click', openCart);
    close.addEventListener('click', closeCart);
});