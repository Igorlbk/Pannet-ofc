/*Abrir e Fechar botão hamburguer*/
const btnMobile = document.querySelector('#btn-mobile');

function toggleMenu(event){
    if (event.type === "touchstart") event.preventDefault();
    const nav = document.querySelector('#nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded','active');
    if(active){
        event.currentTarget.setAttribute('aria-label','Fechar Menu')
    }else{
        event.currentTarget.setAttribute('aria-label','Abrir Menu')
    }
}
btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

/*Modal login*/

const openModalLoginButton = document.querySelector('#modal-login');
const closeModalLoginButton = document.querySelector('#fechar-modal-login');
const modalLogin = document.querySelector('#modalLogin');
const fadeLogin = document.querySelector('#fadeLogin');

const toggleModalLogin = () => {
    [modalLogin, fadeLogin].forEach((el) => el.classList.toggle('hide'));
}

[openModalLoginButton, closeModalLoginButton, fadeLogin].forEach((el) => {
    el.addEventListener('click', () => toggleModalLogin());
});

/*Modal criar sala*/
const openModalSalaButton = document.querySelector('#btn_criar_sala');
const closeModalSalaButton = document.querySelector('#fechar-modal-sala');
const modalSala = document.querySelector('#modalSala');
const fadeSala = document.querySelector('#fadeSala');

const toggleModalSala = () => {
    [modalSala, fadeSala].forEach((el) => el.classList.toggle('hide'));
}

[openModalSalaButton, closeModalSalaButton, fadeSala].forEach((el) => {
    el.addEventListener('click', () => toggleModalSala());
});

/*Modal novo amigo*/
const openModalNovoAmigoButton = document.querySelector('#btn_novo_amigo');
const closeModalNovoAmigoButton = document.querySelector('#fechar-modal-novoAmigo');
const modalNovoAmigo = document.querySelector('#modalNovoAmigo');
const fadeNovoAmigo = document.querySelector('#fadeNovoAmigo');

const toggleModalNovoAmigo = () => {
    [modalNovoAmigo, fadeNovoAmigo].forEach((el) => el.classList.toggle('hide'));
}

[openModalNovoAmigoButton, closeModalNovoAmigoButton, fadeNovoAmigo].forEach((el) => {
    el.addEventListener('click', () => toggleModalNovoAmigo());
});