(function ($) {
    "use strict";
    var flaky = {
        count: 0,
        wishlist: function (options, selector)
        {
            options.action    = 'esperto_ajax';
            options.subaction = 'esperto_wishlist';
            var thiss = this;
            $(thiss).data('_sh_add_to_wishlist', true);
            swal.showLoading();
            $.ajax({
                url: esperto_data.ajaxurl,
                type: 'POST',

                data: options,

                dataType: "json",
                
                success: function (res) {
                    try {
                        var newjason = res;
                        if (newjason.code === 'fail') {
                            $(thiss).data('_sh_add_to_wishlist', false);
                            flaky.loading(false);
                            flaky.msg(newjason.msg, 'error');
                        } else if (newjason.code === 'exists') {
                            $(thiss).data('_sh_add_to_wishlist', true);
                            flaky.loading(false);
                            flaky.msg(newjason.msg, 'error');
                        } else if (newjason.code === 'success') {
                            flaky.loading(false);
                            $(thiss).data('_sh_add_to_wishlist', true);
                            flaky.msg(newjason.msg, 'success');
                            if(options.subaction == 'esperto_wishlist_del'){
                                $(selector).parent('span').parent('div').parent('div').parent('li').remove();
                            }
                        }
                    }
                    catch (e) {
                        flaky.loading(false);
                        $(thiss).data('_sh_add_to_wishlist', false);
                        flaky.msg('There was an error while adding product to whishlist ' + e.message, 'error');

                    }
                }
            });
        },
        loading: function (show) {
            if ($('.loading').length === 0) {
                $('body').append('<div class="loading" ><div class="loading-wishlist-pop">Loading</div></div>');
            }

            if (show === true) {
                $('.loading').show('slow');
            }
            if (show === false) {
                $('.loading').hide('slow');
            }
        },
        msg: function (msg, type) {
           sweetAlert(msg);
       }

   };

   $(document).ready(function () {
    $('.add_to_wishlist').on('click', function (e) {
        e.preventDefault();
        var opt = {data_id: $(this).attr('data-id')};
        swal.showLoading();
        flaky.wishlist(opt, this);
    });

});

   $(document).ready(function () {
    $('a[rel="product_del_wishlist"]').on('click',function (e) {
        e.preventDefault();
        if (confirm('Are you sure! you want to delete it')) {

            var opt = {del_subaction: 'esperto_wishlist_del', data_id: $(this).attr('data-id')};
            flaky.wishlist(opt, this);
        }
    });

});

})(jQuery);



