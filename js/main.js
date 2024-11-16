$(document).ready(function () {
    // Configura a exibição das imagens
    $('#carousel-imagens').slick({
        autoplay: true
    });
    
    // Exibe e oculta o menu
    $('.menu-hamburguer').click(function () {
        $('nav').slideToggle();
    });

    // Aplica máscara ao telefone
    $('#telefone').mask('(00) 00000-0000');
    // { // placeholder: '(99)99999-9999 ' // }

    // Validação do formulário
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            veiculoInteresse: {
                required: false
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome',
            email: 'Por favor, insira um e-mail válido',
            telefone: 'Por favor, insira seu telefone',
            mensagem: 'Por favor, insira sua mensagem'
        },
        submitHandler: function(form) {
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
            console.log('Formulário enviado:', nome.value, email.value, telefone.value, mensagem.value);
            form.reset();
        },
        invalidHandler: function(event, validator) {
            let camposIncorretos = validator.numberOfInvalids();
            console.log('Campos incorretos:', camposIncorretos);
            if (camposIncorretos) {
                alert("Por favor, preencha os campos para prosseguir com a solicitação!");
            }
        }
    });

    // Rola a página para o formulário de contato e preenche o veículo de interesse
    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html, body').animate({
            scrollTop: destino.offset().top
        }, 1000);
    });
});
