$(document).ready(function(){
    /*  Contact form   */
    $('#characterLeft').text('500 оставащи символа');
    $('#message').keydown(function () {
        var max = 500;
        var len = $(this).val().length;
        if (len >= max) {
            $('#characterLeft').text('Вие достигнахте максималната дължина за съобщение!');
            $('#characterLeft').addClass('red');
            $('#btnSubmit').addClass('disabled');
        }
        else {
            var ch = max - len;
            $('#characterLeft').text(ch +" "+ 'оставащи символа');
            $('#btnSubmit').removeClass('disabled');
            $('#characterLeft').removeClass('red');
        }
    });



});