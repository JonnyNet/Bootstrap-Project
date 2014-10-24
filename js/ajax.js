$(document).on('ready',inicio);

function inicio () {
	$('.registro').on('submit',registro);
}

function registro (data) {
	console.log();
	data.preventDefault();
	var form = $(this);
	$.ajax({
		beforeSend: function(){
			$('.mensajes').html('');
		},
		url: form.attr('action'),
		type: form.attr('method'),
		data: form.serialize(),
		success: function (resp){
			//aqui devuelve un objeto json con datos ya sea correcto o incorrecto
			console.log(resp);
			if(resp.success == false){
				for(datos in resp.errors){
					$('.mensajes').append('<p class="text-danger">*'+resp.errors[datos]+'</p>');
				}
			}else{
				location.href='equipo';
			}

		},
		error: function(error){
			//solo entra cuando ocurre un error al procesar los datos
			console.log(error);
		},
		complete: function(dato){
			//aqui algo que pueda agregar cuando se complete la acción
		}
		

	});
}

