jQuery(document).on('input', '.hct-input', function(){
    var val = jQuery(this).val();
    var pre = jQuery(this).attr('data-value');
    if(val!=""){
	    if(val==pre){
	    	jQuery(this).parent().find('small').removeClass('text-danger');
	    	jQuery(this).parent().find('small').addClass('text-success');
	    	jQuery(this).parent().find('small').text('Đúng');
	    }else{
	    	jQuery(this).parent().find('small').addClass('text-danger');
	    	jQuery(this).parent().find('small').removeClass('text-success');
			jQuery(this).parent().find('small').text('Sai');
	    }
    }else{
    	jQuery(this).parent().find('small').removeClass('text-danger');
    	jQuery(this).parent().find('small').removeClass('text-success');
		jQuery(this).parent().find('small').text('');
    }
});

jQuery(document).on('click', '.hct-play-video', function(){
	var video = jQuery(this).attr("data-play");
	var html= 	'<div class="show_video_section">'+
				    '<div class="show_video_modal">'+
				        '<div class="show_video_close"><i class="fa fa-times" aria-hidden="true"></i></div>'+
						'<div class="show_video_content">'+
							'<div class="show_video_content_parent">'+
								'<video controls autoplay>'+
								  '<source src="'+video+'" type="video/mp4">'+
								'</video>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="show_video_overlay"></div>'+
				'</div>';
	jQuery("body").append(html);
});

jQuery(document).on('click', '.hct-play-audio', function(){
	var status = jQuery(this).attr("data-play");
	var id = jQuery(this).find('audio').attr("id");
	var x = document.getElementById(id);

	if(status=="pause"){
		x.play();
		jQuery(this).find('.bcc_play_audio2').find("i").removeClass("fa-volume-up").addClass("fa-pause");
		jQuery(this).attr("data-play","play");
	}else{
		x.pause();
		jQuery(this).find('.bcc_play_audio2').find("i").removeClass("fa-pause").addClass("fa-volume-up");
		jQuery(this).attr("data-play","pause");
	}

	jQuery("#"+id).bind('ended', function(){
		x.currentTime = 0;
		jQuery(this).parent().attr("data-play","pause");
	    jQuery(this).parent().find('.bcc_play_audio2').find("i").removeClass("fa-pause").addClass("fa-volume-up");
	});
});