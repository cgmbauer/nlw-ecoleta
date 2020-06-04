const buttonSearch = document.querySelector("#page-home main a");
const closeX = document.querySelector("#modal .header a");
const modal = document.querySelector("#modal");
const input = document.querySelector("#modal form input")

function toggleModal() {
    modal.classList.toggle("hide");
    input.focus(); // coloca foco no input, possibilitando usar "esc" para sair
    
}


buttonSearch.addEventListener("click", toggleModal)

closeX.addEventListener("click", toggleModal);

modal.addEventListener("keydown", e => { // utiliza "esc" para sair
    if(e.keyCode === 27) {
        modal.classList.toggle("hide");
    }
})