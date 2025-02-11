const campoInput = document.querySelectorAll('.input');
const botao = document.querySelector('.botao');
const campoObrigatorio = document.querySelectorAll('.campo-obrigatorio');


botao.addEventListener('click', function () {
    campoInput.forEach(function (item1, index) {
        if (item1.value === "") {
            item1.classList.add('mostrar');
            item1.classList.remove('esconder');
        } else {
            item1.classList.add('esconder');
            item1.classList.remove('mostrar')
        }

        //iteração sobre o campoObrigatório
        if (item1.value === "") {
            campoObrigatorio[index].classList.add('mostrar');
            campoObrigatorio[index].classList.remove('esconder');
        } else {
            campoObrigatorio[index].classList.add('esconder');
            campoObrigatorio[index].classList.remove('mostrar');
        }
    })
})



