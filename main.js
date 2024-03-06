$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-limpar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        /*
        const novaTarefa = $('#tarefa').val();
        const novaLinha = $(`<li style="display: none">` + novaTarefa + `</li>`);
        $(`
            <button id="check-button" type="button">Check</button>
        `).appendTo(novaLinha);
        $(`
            <button id="cancel-button" type="reset">Limpar</button>
        `).appendTo(novaLinha);

        $(novaLinha).appendTo('ul');
        $('ul').appendTo(`<div class="container></div>`);
        $(novaLinha).fadeIn(800);
        $('#tarefa').val('');

        $('#cancel-button').on('click', function() {
        $(novaLinha).fadeOut(200);
        })

        $('#check-button').on('click', function() {
        $(novaLinha).toggleClass('checked');
        })
        */
        
        const novaTarefa = $('#tarefa').val();
        const novaLinha = $(`<li style="display: none">` + novaTarefa + `</li>`);
        const checkButton = $(`<button id="check-button" type="button">V</button>`);
        const cancelButton = $(`<button id="cancel-button" type="reset">X</button>`);

        checkButton.appendTo(novaLinha);
        cancelButton.appendTo(novaLinha);

        novaLinha.appendTo('ul');
        novaLinha.fadeIn(800);
        $('#tarefa').val('');

        cancelButton.on('click', function () {
            novaLinha.fadeOut(200);
        });

        checkButton.on('click', function () {
            novaLinha.toggleClass('checked');
        });
        
    })

})