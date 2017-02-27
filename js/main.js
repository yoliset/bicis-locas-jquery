function createSpan (element, message) {
    if ($('.'+ element+ ' span').length <= 0) {        
        $('.'+ element).append('<span>'+ message + '</span>');
    }
}
function validateForm(){
	    var nombre = $('#name').val();
        var apellido = $('#lastname').val();
        var email = $('#email').val();
        var password = $('#password').val();
   //el name tiene que tener los caracteres designados
	if (/^[A-Z][a-z]+$/.test(nombre) === false) {
        var message = "Es incorrecto, debe tener la primera letra mayúscula";
        createSpan('name', message);
	}
    else {
        $('.name span').remove();
    }
    //el lastname tiene que tener los caracteres designados
	if (/^[A-Z][a-z]+$/.test(apellido) === false) {
        var message = "Es incorrecto, debe tener la primera letra mayúscula";
        createSpan('lastname', message);
	}
    else {
        $('.lastname span').remove();
    }
    //el email tiene que tener los caracteres designados
	if (/^\S+@\S+\.\S+$/.test(email) === false) {
        var message = "email incorrecto";
        createSpan('email', message);
	}
    else {
        $('.email span').remove();
    }
    //el password tiene que tener los caracteres designados
    if (password.length>=6 === false || (/^[0-9]+$/.test(password) !== false)|| (/^[a-zA-Z]+$/.test(password) !== false) ) {
        var message = "El password debe tener 6 carácteres con letras y números";
        createSpan('password', message);
	}
    else {
        $('.password span').remove();
    }
}