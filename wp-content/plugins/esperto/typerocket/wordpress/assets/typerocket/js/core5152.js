jQuery.typerocketHttp={get:function(e,t){this.send("GET",e,t)},post:function(e,t){this.send("POST",e,t)},put:function(e,t){this.send("PUT",e,t)},"delete":function(e,t){this.send("DELETE",e,t)},send:function(e,t,r,a){null==a&&(a=!0),a&&(t=this.tools.addTrailingSlash(t)),this.tools.ajax({method:e,data:r,url:t})},tools:{stripTrailingSlash:function(e){return"/"===e.substr(-1)?e.substr(0,e.length-1):e},addTrailingSlash:function(e){return e.indexOf(".php")?e:e.replace(/\/?(\?|#|$)/,"/$1")},ajax:function(e){var t,r;r=this,t={method:"GET",data:{},dataType:"json",success:function(e){return e.redirect?void(window.location=e.redirect):void r.checkData(e)},error:function(e,t,r){alert("Your request had an error. "+e.status+" - "+r)}},jQuery.extend(t,e),jQuery.ajax(t)},checkData:function(e){var t,r;for(t=0;TypeRocket.httpCallbacks.length>t;)"function"==typeof TypeRocket.httpCallbacks[t]&&TypeRocket.httpCallbacks[t](e),t++;r=e.message_type,e.flash===!0&&jQuery("body").prepend(jQuery('<div class="typerocket-ajax-alert tr-alert-'+r+' ">'+e.message+"</div>").fadeIn(200).delay(2e3).fadeOut(200,function(){jQuery(this).remove()}))}}},jQuery(document).ready(function(e){return e("form.typerocket-ajax-form").on("submit",function(t){t.preventDefault(),TypeRocket.lastSubmittedForm=e(this),e.typerocketHttp.send("POST",e(this).attr("action"),e(this).serialize())}),e(".tr-delete-row-rest-button").on("click",function(t){var r,a;if(t.preventDefault(),confirm("Confirm Delete."))return a=e(this).data("target"),e(a).remove(),r={_tr_ajax_request:"1",_method:"DELETE"},e.typerocketHttp.send("POST",e(this).attr("href"),r,!1)})}),this.Booyah=function(){function e(){this.templateTagKeys=[],this.templateTagValues=[],this.templateArray=[],this.templateString=""}return e.prototype.templateTagKeys=[],e.prototype.templateTagValues=[],e.prototype.templateArray=[],e.prototype.templateString="",e.prototype.ready=function(){return this.templateString=this.templateArray.join(""),this.replaceTags(),this.templateString},e.prototype.addTag=function(e,t){return this.templateTagKeys.push(e),this.templateTagValues.push(t),this},e.prototype.addTemplate=function(e){return this.templateArray.push(e),this},e.prototype.replaceTags=function(){var e,t,r,a;for(r=this.templateTagKeys.length,e=0;r>e;)t=this.templateTagKeys[e],a=this.templateTagValues[e],this.templateString=this.templateString.replace(new RegExp(t),a),e++},e}(),jQuery(document).ready(function(e){var t,r,a,n,i,o,l,s;o=function(){e(".wp-editor-wrap").each(function(){var t;t=e(this).find("iframe"),t.height()<30&&t.css({height:"auto"})})},o(),i=function(t){var r,a,n;e.isFunction(e.fn.sortable)&&(n=e(t).find(".tr-gallery-list"),r=e(t).find(".tr-items-list"),a=e(t).find(".tr-repeater-fields"),n.length>0&&n.sortable(),a.length>0&&a.sortable({connectWith:".tr-repeater-group",handle:".repeater-controls"}),r.length>0&&r.sortable({connectWith:".item",handle:".move"}))},a=function(t){e.isFunction(e.fn.datepicker)&&e(t).find(".date-picker[name]").each(function(){e(this).datepicker({beforeShow:function(t,r){e("#ui-datepicker-div").addClass("typerocket-datepicker")}})})},r=function(t){e.isFunction(e.fn.wpColorPicker)&&e(t).find(".color-picker[name]").each(function(){var t,r;t=e(this).attr("id")+"_color_palette",r={palettes:window[t]},e(this).wpColorPicker(r)})},n=function(t){var r;e.isFunction(e.fn.redactor)&&(r={formatting:["p","h1","h2","h3","h4","h5","blockquote"],buttons:["formatting","bold","italic","deleted","unorderedlist","orderedlist","outdent","indent","link","alignment","horizontalrule","html"]},e.isEmptyObject(window.TypeRocket.redactorSettings)||(r=window.TypeRocket.redactorSettings),e(t).find(".typerocket-editor[name]").each(function(){e(this).redactor(r)}))},t=e(".typerocket-container"),i(t),a(t),r(t),n(t),TypeRocket.repeaterCallbacks.push(a),TypeRocket.repeaterCallbacks.push(r),TypeRocket.repeaterCallbacks.push(n),t.on("input keyup",".redactor-editor",function(){var t=e(this).siblings("textarea");t.trigger("change")}),t.on("blur keyup change","input[maxlength], textarea[maxlength]",function(){var t;t=e(this),t.parent().hasClass("redactor-box")&&(t=t.parent()),t.next().find("span").text(s.len(this))}),e(".tr-tabs li").each(function(){e(this).click(function(t){var r;e(this).addClass("active").siblings().removeClass("active"),r=e(this).find("a").attr("href"),e(r).addClass("active").siblings().removeClass("active"),o(),t.preventDefault()})}),e(".contextual-help-tabs a").click(function(){o()}),l={init:function(){var t;t=this,e(document).on("click",".tr-repeater .controls .add",function(){var r,a,n,o,l,s,c,p;for(a=e(e(this).parent().parent().next().clone()).removeClass("tr-repeater-group-template").addClass("tr-repeater-group"),s=(new Date).getTime(),c=a.data("id"),l=a.find(".dev .field span"),n=a.find("[data-name]"),o=a.find(".tr-repeater-group-template [data-name]"),e(n).each(function(){var r;r=t.nameParse(e(this).data("name"),s,c),e(this).attr("name",r),e(this).attr("data-name",null)}),e(l).each(function(){var r;r=t.nameParse(e(this).html(),s,c),e(this).html(r)}),e(o).each(function(){e(this).attr("data-name",e(this).attr("name")),e(this).attr("name",null)}),i(a),p=0;TypeRocket.repeaterCallbacks.length>p;)"function"==typeof TypeRocket.repeaterCallbacks[p]&&TypeRocket.repeaterCallbacks[p](a),p++;r=e(this).parent().parent().next().next(),a.prependTo(r).hide().delay(10).slideDown(300).scrollTop("100%")}),e(document).on("click",".tr-repeater .repeater-controls .remove",function(t){e(this).parent().parent().slideUp(300,function(){e(this).remove()}),t.preventDefault()}),e(document).on("click",".tr-repeater .repeater-controls .collapse",function(t){var r;r=e(this).parent().parent(),r.hasClass("tr-repeater-group-collapsed")||90===r.height()?(r.removeClass("tr-repeater-group-collapsed"),r.addClass("tr-repeater-group-expanded"),r.attr("style","")):(r.removeClass("tr-repeater-group-expanded"),r.addClass("tr-repeater-group-collapsed")),t.preventDefault()}),e(document).on("click",".tr-repeater .controls .tr_action_collapse",function(t){var r,a;a=e(this).parent().parent().next().next(),"Contract"===e(this).val()?(e(this).val("Expand"),a.find("> .tr-repeater-group").animate({height:"90px"},200)):(e(this).val("Contract"),a.find("> .tr-repeater-group").attr("style","")),r=e(this).parent().parent().next().next(),r.hasClass("tr-repeater-collapse")?(r.toggleClass("tr-repeater-collapse"),r.find("> .tr-repeater-group").removeClass("tr-repeater-group-collapsed").attr("style","")):(r.toggleClass("tr-repeater-collapse"),r.find("> .tr-repeater-group").removeClass("tr-repeater-group-expanded")),t.preventDefault()}),e(document).on("click",".tr-repeater .controls .clear",function(t){confirm("Remove all items?")&&e(this).parent().parent().next().next().html(""),t.preventDefault()}),e(document).on("click",".tr-repeater .controls .flip",function(t){var r;confirm("Flip order of all items?")&&(r=e(this).parent().parent().next().next(),r.children().each(function(e,t){r.prepend(t)})),t.preventDefault()})},nameParse:function(e,t,r){var a,n;return a=e,n=new Booyah,a=n.addTemplate(a).addTag("{{ "+r+" }}",t).ready()}},l.init(),s={len:function(t){var r,a;return r=e(t),a=r.val().length,parseInt(r.attr("maxlength"))-a}}}),jQuery(document).ready(function(e){var t;t=function(t,r){return confirm("Remove all items?")&&(e(r).val(""),e(t).parent().next().html("")),!1},e(document).on("click",".items-list-button",function(){var t,r;t=e(this).parent().next(),r=t.attr("name"),r&&t.data("name",r),r=t.data("name"),t.prepend(e('<li class="item"><div class="move"></div><a href="#remove" class="remove" title="Remove Item"></a><input type="text" name="'+r+'[]" /></li>').hide().delay(10).slideDown(150).scrollTop("100%"))}),e(document).on("click",".items-list-clear",function(){var r;r=e(this).parent().prev(),t(e(this),r[0])}),e(document).on("click",".tr-items-list .remove",function(){e(this).parent().slideUp(150,function(){e(this).remove()})})}),jQuery(document).ready(function(e){var t,r,a,n,i;i=function(t,r){var a,n,i,o;return i="Select an Image",a="Use Image",o="image",n=wp.media({title:i,button:{text:a},library:{type:o},multiple:!1}),n.on("select",function(){var a,i;a=n.state().get("selection").first().toJSON(),i="",i=a.sizes.thumbnail?a.sizes.thumbnail.url:a.sizes.full.url,e(r).val(a.id),e(t).parent().next().html('<img src="'+i+'"/>')}),wp.media.frames.image_frame=n,wp.media.frames.image_frame.open(),!1},a=function(t,r){var a,n,i,o;return i="Select a File",a="Use File",o="",n=wp.media({title:i,button:{text:a},library:{type:o},multiple:!1}),n.on("select",function(){var a,i;a=n.state().get("selection").first().toJSON(),i='<a target="_blank" href="'+a.url+'">'+a.url+"</a>",e(r).val(a.id),e(t).parent().next().html(i)}),wp.media.frames.file_frame=n,wp.media.frames.file_frame.open(),!1},r=function(t,r){return e(r).val(""),e(t).parent().next().html(""),!1},n=function(t,r){var a,n,i;return i="Select Images",a="Use Images",n=wp.media({title:i,button:{text:a},library:{type:"image"},multiple:"toggle"}),n.on("select",function(){var a,i,o,l,s,c;for(a=n.state().get("selection").toJSON(),s=a.length,o=0;o<s;)i=e(t).parent().prev().clone(),c="",c=a[o].sizes.thumbnail?a[o].sizes.thumbnail.url:a[o].sizes.full.url,l=e('<li class="image-picker-placeholder"><a href="#remove" class="dashicons dashicons-no-alt" title="Remove Image"></a><img src="'+c+'"/></li>'),e(l).append(i.val(a[o].id).attr("name",i.attr("name")+"[]")),e(r).append(l),e(r).find("a").on("click",function(t){t.preventDefault(),e(this).parent().remove()}),o++}),wp.media.frames.gallery_frame=n,wp.media.frames.gallery_frame.open(),!1},t=function(t,r){return confirm("Remove all images?")&&e(r).html(""),!1},e(document).on("click",".image-picker-button",function(){var t;t=e(this).parent().prev(),i(e(this),t[0])}),e(document).on("click",".file-picker-button",function(){var t;t=e(this).parent().prev(),a(e(this),t[0])}),e(document).on("click",".image-picker-clear, .file-picker-clear",function(){var t;t=e(this).parent().prev(),r(e(this),t[0])}),e(document).on("click",".gallery-picker-button",function(){var t;t=e(this).parent().next(),n(e(this),t[0])}),e(document).on("click",".gallery-picker-clear",function(){var r;r=e(this).parent().next(),t(e(this),r[0])}),e(".tr-gallery-list a").on("click",function(t){t.preventDefault(),e(this).parent().remove()})}),jQuery(document).ready(function(e){e(".typerocket-container").on("click",".matrix-button",function(t){var r,a,n,i,o,l,s,c,p,d,u;n=e(this),n.is(":disabled")||(p=n.data("id"),l=n.data("folder"),c=n.data("group"),r=e("#"+p),a=e('select[data-mxid="'+p+'"]'),i=n.val(),d=a.val(),o=TypeRocket.repeaterCallbacks,n.attr("disabled","disabled").val("Adding..."),u="/tr_matrix_api/v1/"+c+"/"+d+"/"+l,s=a.data("group"),e.ajax({url:u,method:"POST",dataType:"html",data:{form_group:s},success:function(t){var a,l,s,c;for(t=e(t),c=0;o.length>c;)"function"==typeof o[c]&&o[c](t),c++;t.prependTo(r).hide().delay(10).slideDown(300).scrollTop("100%"),e.isFunction(e.fn.sortable)&&(s=r.find(".tr-gallery-list"),a=r.find(".tr-items-list"),l=r.find(".tr-repeater-fields"),s.length>0&&s.sortable(),l.length>0&&l.sortable({connectWith:".tr-repeater-group",handle:".repeater-controls"}),a.length>0&&a.sortable({connectWith:".item",handle:".move"})),n.val(i).removeAttr("disabled","disabled")},error:function(e){n.val("Try again - Error "+e.status).removeAttr("disabled","disabled")}}))})}),jQuery(document).ready(function(e){var t,r;r=e("#tr_page_type_toggle"),r.length>0&&(e("#tr_page_builder_control").hasClass("builder-active")?e("#builderStandardEditor").hide():e("#tr_page_builder").hide(),e(r).on("click","a",function(t){var r,a,n;t.preventDefault(),n=e(this),a=e(n.siblings()[0]),r=e("#builderSelectRadio input")[1],n.addClass("builder-active button-primary"),a.removeClass("builder-active button-primary"),e(n.attr("href")).show(),e(a.attr("href")).hide(),"tr_page_builder_control"===n.attr("id")?e(r).attr("checked","checked"):(e(r).removeAttr("checked"),e("#content-html").click(),e("#content-tmce").click())})),e(".tr-components").length>0&&(t=function(t,r){var a,n,i,o,l;for(o=TypeRocket.repeaterCallbacks,l=0;o.length>l;)"function"==typeof o[l]&&o[l](t),l++;e.isFunction(e.fn.sortable)&&(i=r.find(".tr-gallery-list"),a=r.find(".tr-items-list"),n=r.find(".tr-repeater-fields"),i.length>0&&i.sortable(),n.length>0&&n.sortable({connectWith:".tr-repeater-group",handle:".repeater-controls"}),a.length>0&&a.sortable({connectWith:".item",handle:".move"}))},e(".typerocket-container").on("click",".tr-builder-add-button",function(t){var r,a;return t.preventDefault(),a=e(this).next(),r=e("<div>").addClass("tr-builder-select-overlay").on("click",function(){return e(this).remove(),e(".tr-builder-select").fadeOut()}),e("body").append(r),a.fadeIn()}),e(".typerocket-container").on("click",".tr-builder-component-control",function(t){var r,a,n,i,o;return t.preventDefault(),e(this).parent().children().removeClass("active"),i=e(this).addClass("active").parent().data("id"),o=e(this).index(),n=e("#frame-"+i),a=n.children(),a.removeClass("active"),r=a[o],e(r).addClass("active")}),e(".typerocket-container").on("click",".tr-remove-builder-component",function(t){var r,a,n,i,o,l;if(t.preventDefault(),confirm("Remove component?"))return n=e(this).parent(),n.parent().children().removeClass("active"),o=n.parent().data("id"),l=e(this).parent().index(),i=e("#frame-"+o),a=i.children(),r=a[l],e(r).remove(),n.remove()}),e(".tr-components").sortable({start:function(e,t){return t.item.startPos=t.item.index()},update:function(t,r){var a,n,i,o,l,s,c;return c=r.item.parent(),o=c.data("id"),i=e("#frame-"+o),n=i.children().detach(),l=r.item.index(),s=r.item.startPos,a=n.splice(s,1),n.splice(l,0,a[0]),i.append(n)}}),e(".typerocket-container").on("click",".builder-select-option",function(r){var a,n,i,o,l,s,c,p,d,u,h;o=e(this),o.parent().fadeOut(),e(".tr-builder-select-overlay").remove(),o.hasClass("disabled")||(d=o.data("id"),l=o.data("folder"),c=o.data("group"),p=o.data("thumbnail"),n=e("#frame-"+d),a=e("#components-"+d),i=e('ul[data-mxid="'+d+'"]'),u=o.data("value"),o.addClass("disabled"),h="/tr_builder_api/v1/"+c+"/"+u+"/"+l,s=i.data("group"),e.ajax({url:h,method:"POST",dataType:"html",data:{form_group:s},success:function(r){var i,l,s;return r=e(r),l=n.children(".active"),i=a.children(".active"),n.children().removeClass("active"),a.children().removeClass("active"),p&&(p='<img src="'+p+'" />'),s='<li class="active tr-builder-component-control">'+p+'<span class="tr-builder-component-title">'+o.text()+'</span><span class="remove tr-remove-builder-component"></span>',i.length>0&&l.length>0?(r.insertAfter(l).addClass("active"),i.after(s)):(r.prependTo(n).addClass("active"),a.prepend(s)),t(r,n),o.removeClass("disabled")},error:function(e){o.val("Try again - Error "+e.status).removeAttr("disabled","disabled")}}))}))}),jQuery(document).ready(function(e){var t,r,a,n;n="",t="",r=e("#tr-seo-preview-google-desc-orig").text(),a=e("#tr-seo-preview-google-title-orig").text(),e("#tr_title").keyup(function(){var t;n=e(this).val().substring(0,59),t=e("#tr-seo-preview-google-title"),t.text(n),n.length>0?t.text(n):t.text(a)}),e("#tr_description").keyup(function(){t=e(this).val().substring(0,156),t.length>0?e("#tr-seo-preview-google-desc").text(t):e("#tr-seo-preview-google-desc").text(r)}),e("#tr_redirect_lock").click(function(t){e(e(this).attr("href")).removeAttr("readonly").focus(),e(this).fadeOut(),t.preventDefault()})});var tr_delay;jQuery.fn.TypeRocketLink=function(e,t){var r,a,n;return null==e&&(e="any"),null==t&&(t=""),n=this,a=encodeURI(this.val()),r="post_type="+e+"&s="+a,t&&(r+="&taxonomy="+t),jQuery.getJSON("/wp-json/typerocket/v1/search?"+r,function(e){var t,r,a,i,o,l,s;if(e){for(n.next().next().next().html(""),n.next().next().next().append('<li class="tr-link-search-result-title">Results'),l=[],t=0,i=e.length;t<i;t++)a=e[t],a.post_title?(o="draft"===a.post_status?"draft ":"",s=a.post_title+" ("+o+a.post_type+")",r=a.ID):(s=a.name,r=a.term_id),l.push(n.next().next().next().append('<li class="tr-link-search-result" data-id="'+r+'" >'+s));return l}}),this},tr_delay=function(){var e;return e=0,function(t,r){clearTimeout(e),e=setTimeout(t,r)}}(),jQuery(document).ready(function(e){return e(".typerocket-container").on("keyup",".tr-link-search-input",function(){var t,r,a;return r=e(this),a=e(this).data("posttype"),t=e(this).data("taxonomy"),tr_delay(function(){r.TypeRocketLink(a,t)},250)}),e(".typerocket-container").on("click",".tr-link-search-result",function(){var t,r;return t=e(this).data("id"),r=e(this).text(),e(this).parent().prev().html("Selection: <b>"+r+"</b>"),e(this).parent().prev().prev().val(t),e(this).parent().prev().prev().prev().focus().val(""),e(this).parent().html("")})}),jQuery.fn.selectText=function(){var e,t,r,a;e=document,t=this[0],r=void 0,a=void 0,e.body.createTextRange?(r=document.body.createTextRange(),r.moveToElementText(t),r.select()):window.getSelection&&(a=window.getSelection(),r=document.createRange(),r.selectNodeContents(t),a.removeAllRanges(),a.addRange(r))},jQuery(document).ready(function(e){e(".typerocket-container").on("click",".field",function(){e(this).selectText()})});

jQuery(document).ready(function($){

	var dep_target_fields = [];

	var process_dep = function() {

		if(true) {
			var tofind = $(this).data('target'),
			toValue = $(this).data('target-value'),
			metabox = $(this).parents('.inside'),
			is_repeater = $(this).parents('.repeater-inputs');

			if( is_repeater.length ) {
				var target = is_repeater.find('[data-name="'+tofind+'"]');
				target.addClass('tr_dependent-field');
				if ( target.val() == toValue ) {
					//$(this).parents('.control-section').show();
					$(this).parent().parent('.control-section').show();
				} else {
					$(this).parent().parent('.control-section').hide();
				}
			} else {

				var target = metabox.find('[data-name="'+tofind+'"]');
				target.addClass('tr_dependent-field');
				
				if ( target.attr('type') === 'checkbox' ) {
					if ( target.is(':checked') ) {
						//$(this).parents('.control-section').show();
						$(this).parents('.control-section').first().show();
					} else {
						//$(this).parents('.control-section').hide();
						$(this).parents('.control-section').first().hide();
					}
				} else {

					if ( target.val() == toValue ) {
						//$(this).parents('.control-section').show();
						$(this).parents('.control-section').first().show();
					} else {
						//$(this).parents('.control-section').hide();
						$(this).parents('.control-section').first().hide();
					}	
				}
				
			}
		}
	};

	$('[data-dependency]').each(process_dep);

	$('.inside').on('change', '.tr_dependent-field', function(e){

		var is_repeater = $(this).parents('.repeater-inputs');

		if ( is_repeater.length ) {
			var depd = is_repeater.find('[data-target="'+$(this).data('name')+'"]');
		} else {
			var depd = $('[data-target="'+$(this).data('name')+'"]');
		}

		if ( depd.length ) {

			//this = depd;
			//console.log(this);
			$( depd ).each(function(ind, el) {
				process_dep.call(this);
			});
		}

	});

	if ( $('.typerocket-fonticonpicker').length && $.fn.fontIconPicker !== undefined ) {

		var $picker = $('.typerocket-fonticonpicker:not(.tr-repeater-group-template .typerocket-fonticonpicker)').find('select').fontIconPicker({

		});

		TypeRocket.repeaterCallbacks.push(function($template) {
			//alert('here')
			//$picker.destroyPicker();
		    //$template.find('.typerocket-fonticonpicker').fontIconPicker();
		    $picker.destroyPicker();
		    
		    setTimeout(function(){ 
		        $picker = $('.typerocket-fonticonpicker:not(.tr-repeater-group-template .typerocket-fonticonpicker)').find('select').fontIconPicker({
        
        		});
		    }, 1000);
		    
		});
	}


	$('.typerocket-ajax-form').bind('submit', function(e){

		if ( swal !== undefined ) {
			swal.showLoading();
		}
	});

	TypeRocket.httpCallbacks.push(function(response) {
	    response.flash = false;

	    if (response.messageType == 'success') {
	        type = 'success';
	        title = 'Success!';
	    } else {
	        type = 'error';
	        title = 'Error!'
	    }

	    sweetAlert(title, response.message, type);
	});
});