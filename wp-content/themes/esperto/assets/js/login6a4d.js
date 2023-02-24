jQuery(document).ready(function ($) {
    /*----------------------Login Form Script--------------------*/
    $('form#loginfom').on('submit', function (e) {
          var redirect_url =  $(".redirect_url").val();

        swal.showLoading();
        
      
        var action = $(this).attr('action');
        var button = $(this).find('input[type="submit"]');
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: action,
            data: $(this).serialize(),
            beforeSend: function () {

                $(button).prop('disable', true);
            },
            
            success: function (data) {
                $("form#loginfom .message-box").removeClass("alert alert-info");
                $('form#loginfom .message-box').html(data.message);
                 sweetAlert(data.message);
                 //if (data.loggedin === true) {
                    window.location = redirect_url;
                //}
               
            },
            fail: function(res) {

            }
        });
        e.preventDefault();
    });

    /*----------------------Registration Form Script--------------------*/
       $('form#registerfom').on('submit', function (e) {

        swal.showLoading();
        
        var redirect_url = $(this).children('.redirect_url').val();
        var action = $(this).attr('action');
        var button = $(this).find('input[type="submit"]');
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: action,
            data: $(this).serialize(),
            beforeSend: function () {

                $(button).prop('disable', true);
            },
            success: function (data) {
                $(button).prop('disable', false);
                 $("form#loginfom .message-box2").removeClass("alert alert-info");
                $('form#loginfom .message-box2').html(data.message);
                 sweetAlert(data.message);
               
                if (data.loggedin === true) {
                    window.location.href = redirect_url;
                }
            },
            fail: function(res) {

            }
        });
        e.preventDefault();
    });

});