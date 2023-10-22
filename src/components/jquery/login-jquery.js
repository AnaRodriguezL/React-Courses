import $ from 'jquery';

$(function () {
    // Función para manejar el evento de foco
    const handleFocus = function () {
        $(this).parent().addClass('focus');
    };

    // Función para manejar el evento de pérdida de foco
    const handleBlur = function () {
        if (!$(this).val().length > 0) {
            $(this).parent().removeClass('focus');
        }
    };

    // Función para manejar el evento de tecla pulsada
    const handleKeyUp = function () {
        if ($(this).val().length > 0) {
            $(this).parent().addClass('active');
        } else {
            $(this).parent().removeClass('active wrong success');
            $('label').text('Email');
        }
    };

    // Función para manejar el evento de tecla presionada
    const handleKeyPress = function (event) {
        const keyCode = event.which;

        if (keyCode === 13) {
            if ($(this).val().length > 0) {
                const isEmailValid = $(this).val() === 'success@gmail.com';
                const group = $('.group');

                group.removeClass('wrong success');

                if (isEmailValid) {
                    group.addClass('success');
                    $('label').text('Email');
                } else {
                    group.addClass('wrong');
                    $('label').text('Email format invalid');
                }
            }
        }
    };

    // Asigna los manejadores de eventos a los elementos
    $('body').on('focus', 'input', handleFocus);
    $('body').on('blur', 'input', handleBlur);
    $('body').on('keyup', 'input', handleKeyUp);
    $('body').on('keypress', 'input', handleKeyPress);
});
