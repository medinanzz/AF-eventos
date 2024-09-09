document.addEventListener('DOMContentLoaded', function() {
    const botao = document.getElementById('MyButton');
    if (botao) {
        botao.addEventListener('click', function() {
            alert('Click no titulo!');
        });
    } else {
        console.error('Botão não encontrado!');
    }
});