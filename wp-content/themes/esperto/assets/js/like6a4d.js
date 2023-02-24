
var esperto;

(function($){

    var webinane = {
     like_it : function(obj) {      
        $('a.add-to-wishlist').on('click', function(e){
            var id = $(this).data('id');
            var thisis = this;
            var like_it = ( $(this).find('.fa-heart-o').length ) ? 'like' : 'unlike';
            var data = { action : 'esperto_ajax', subaction: 'esperto_like_it', id : id, type: like_it, nonce: esperto_data.nonce };
            var loggedin = $(this).data('loggedin');

            if ( loggedin === 0 ) {
                sweetAlert('Login', 'Please loggedin first to like or unlike this post', 'error');
                return false;
            }

            if ( ! like_it ) {
                return false;
            }
            
            swal.showLoading();

            $.ajax({
                url: esperto_data.ajaxurl,
                type: 'POST',
                data: data,
                success: function( res ) {

                    if ( res.type !== undefined ) {
                        if( like_it === 'like' ) {
                            
                            $(thisis).find('i.fa').removeClass('fa-heart-o').addClass('fa-heart');
                        } else if ( like_it === 'unlike' ) {
                            
                            $(thisis).find('i.fa').removeClass('fa-heart').addClass('fa-heart-o');
                        }
                        $(thisis).find('span').text(res.count);
                        sweetAlert( res.title, res.message, res.type );
                        
                    } else {
                        sweetAlert('Error', 'Something wrong you can not like this.', 'error');
                    }
                },
                complete: function( res ) {
                  
                }
            });

            return false;
        }
    )},
        

        post_rating : function(obj) {
            
            $('.rating_id .stars').on('click', function(e){
            $(this).attr("checked");
            var id = $('.rating_id').data('id');

            var date = $('.rating_id').data('date');
            var rating = $(this).val();
            var data = { action : 'esperto_ajax', subaction: 'esperto_post_rating', id : id, date: date, rating: rating, nonce: esperto_data.nonce };
            var loggedin = $(obj).data('loggedin');
   
            if ( loggedin === 0 ) {
                sweetAlert('Login', 'Please login first to add rating on this course.', 'error');
                return false;
            }

            if ( ! rating ) {
                return false;
            }
            
            swal.showLoading();

            $.ajax({
                url: esperto_data.ajaxurl,
                type: 'POST',
                data: data,
                success: function( res ) {

                    if ( res.type !== 'error' ) {

                        sweetAlert( res.message );
                         $(this).attr("checked");
                        
                    } else {
                        sweetAlert('Error', 'Please loggedin first to add rating.', 'error');
                    }
                },
                complete: function( res ) {
               
                }
            });

            return false;
            });
        },


        
    }

    esperto = webinane;


    $(document).ready(function(){
        webinane.like_it();
        webinane.post_rating();

    });


})(jQuery);