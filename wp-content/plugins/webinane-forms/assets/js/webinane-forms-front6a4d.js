

(function($){

	$(document).ready(function(){

		$('.wi-forms-render').each(function(ind, el){

			/*var $data = $(this).data('json'),
			hide_labels = $(this).data('labels'),
			thiscon = this;

			if ( $data.length ) {

				$(thiscon).formRender({
					formData: $data,
					dataType: 'json',
				});
			}
			console.log($(this).find('[data-grid]'));
			$(this).find('[data-grid]').each(function(index, elem){
				var grid_val = $(this).data('grid');

				$(this).parent('.form-group, div').addClass('col-lg-' + grid_val );

				$(this).removeAttr('data-grid');
			});

			if(hide_labels) {
				$(this).find('label').remove();
			}*/


			/*$(this).find('form').on('submit', function(e){

				e.preventDefault();

				var thisform = this,
				message = $(this).find('.response'),
				action = $(this).attr('action'),
			    button = $(this).find('button[type=submit]'),

			    buttn_text = button.text();
				
				button.html( buttn_text + ' <i class=\"fa fa-refresh fa-spin\"></i>' ).attr('disabled', 'disabled');
				message.slideUp();

			    var formdata = $(this).serialize() + '&action=_webinane_forms_ajax';

			    $.ajax({
				    type: 'POST',
				     url: action,
				     data: formdata,
				     dataType: 'json',

				     success: function (response) {

					    $(button).attr('disabled', false);

					    if (response.status === 'error') {

						    message.html( response.message );
						    message.slideDown( 'slow' );

					    } else {
						    message.html( response.message ).slideDown();
						    $(thisform).slideUp( 'slow' );
						    
					    }

					    button.text(buttn_text);

				    },
				    fail: function(res) {
				    	button.text(buttn_text).attr('disabled', false);
				    }
			     });
			});*/
		});

		$(document).on('submit', '.typerocket-ajax-form', function(e){

			if ( typeof sweetAlert !== undefined ) {
				swal.showLoading();
			}
		});

		if ( typeof TypeRocket !== undefined ) {

			TypeRocket.httpCallbacks.push(function(response) {
			    response.flash = false;

			    if (response.valid == true) {
			        type = 'success';
			        title = 'Success!';
			    } else {
			        type = 'error';
			        title = 'Error!'
			    }

			    sweetAlert(title, response.message, type);
			});
		}

	});
})(jQuery);