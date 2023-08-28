$(document).ready(function () {
    $('header button').click(function () {
        $('form').slideDown();
    });

    $('#btn-cancelar').click(function (e) {
        $('form').slideUp();
    });

    $('form').on('submit', function (e) {
        e.preventDefault();

        const enderecoNovaImagem = $('#endereco-nova-imagem').val();
        const novoItem = $('<li style="display: none;"></li>');

        $(`<img src="${enderecoNovaImagem}" />`).appendTo(novoItem);
        $(
            `<div class="overlay-image-link">
        <a href="${enderecoNovaImagem}" title="Ver imagem em tamanho real" target="_blank">Ver imagem em tamanho real</a>
            </div>`
        ).appendTo(novoItem);

        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#endereco-nova-imagem').val('');
    });

});