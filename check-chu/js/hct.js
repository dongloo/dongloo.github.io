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


jQuery(window).bind("load", function () {
	var hctID = 0;
    jQuery('.hct-item').each(function(){
    	var text = jQuery(this).attr('data-text');
    	var url = jQuery(this).attr('data-path');
    	var sentence_thai = jQuery(this).attr('data-sentence-thai');
    	var sentence_viet = jQuery(this).attr('data-sentence-viet');
    	var write = jQuery(this).attr('data-write');
    	var speak = jQuery(this).attr('data-speak');
    	var mean = jQuery(this).attr('data-mean');
    	var sString = write.split("");
    	var sString_html ="";
    	for(var i = 0; i < sString.length; i++){
			sString_html = sString_html + '<span>'+sString[i]+'</span>';
    	}
		var html =  '<div class="hct-item-img">'+
					    '<img src="'+url+'/jpg/'+text+'.jpg">'+
					'</div>'+
					'<div class="hct-item-des">'+
					    '<p>'+sentence_thai+'</p>'+
					    '<p>'+sentence_viet+'</p>'+
					'</div>'+
					'<span class="hct-item-write">Tập viết</span>'+
					'<span class="hct-item-write-content">'+
					    '<span>'+write+'</span>'+
						sString_html+
					'</span>'+
					'<span class="hct-item-speak">Tập đọc</span>'+
					'<span class="hct-item-speak-content">'+speak+'</span>'+
					'<span class="hct-item-mean">Ý nghĩa</span>'+
					'<span class="hct-item-mean-content">'+mean+'</span>'+
					'<div class="hct-item-all-sound bcc_play_flex">'+
					    '<div class="hct-play-audio-items">'+
					        '<div class="hct-play-audio" data-play="pause">'+
					            '<span class="bcc_play_audio2">'+
					                '<i class="fa fa-volume-up" aria-hidden="true"></i>'+
					            '</span>Âm thanh cả câu'+
					            '<audio id="hct-'+hctID+'-full" preload="none" style="display:none">'+
					                '<source src="'+url+'/mp3/'+text+' full.mp3" type="audio/mpeg">'+
					            '</audio>'+
					        '</div>'+
					    '</div>'+
					'</div>'+
					'<div class="hct-item-flash bcc_play_flex">'+
					    '<div class="hct-play-video" data-play="'+url+'/mp4/'+text+'.mp4">'+
					        '<span class="bcc_play_video2">'+
					            '<i class="fa fa-play" aria-hidden="true"></i>'+
					        '</span>xem flash'+
					    '</div>'+
					'</div>'+
					'<div class="hct-item-audios hct-item-slow bcc_play_flex">'+
					    '<div class="hct-play-audio-items">'+
					        '<div class="hct-play-audio" data-play="pause">'+
					            '<span class="bcc_play_audio2">'+
					                '<i class="fa fa-volume-up" aria-hidden="true"></i>'+
					            '</span>Nghe chậm'+
					            '<audio id="hct-'+hctID+'-1" preload="none" style="display:none">'+
					                '<source src="'+url+'/mp3/'+text+' 1.mp3" type="audio/mpeg">'+
					            '</audio>'+
					        '</div>'+
					    '</div>'+
					'</div>'+
					'<div class="hct-item-audios hct-item-fast bcc_play_flex">'+
					    '<div class="hct-play-audio-items">'+
					        '<div class="hct-play-audio" data-play="pause">'+
					            '<span class="bcc_play_audio2">'+
					                '<i class="fa fa-volume-up" aria-hidden="true"></i>'+
					            '</span>Nghe nhanh'+
					            '<audio id="hct-'+hctID+'-3" preload="none" style="display:none">'+
					                '<source src="'+url+'/mp3/'+text+' 3.mp3" type="audio/mpeg">'+
					            '</audio>'+
					        '</div>'+
					    '</div>'+
					'</div>';
		jQuery(this).html(html);
		hctID++;

    });
    jQuery('.hct-fill-item').each(function(){
    	jQuery(this).append('<small></small>');
    	jQuery(this).find('i').each(function(){
	    	var txt = jQuery(this).text();
	    	var input = '<input class="form-control hct-input" data-value="'+txt+'" type="text">';
	    	jQuery(this).before(input);
	    	jQuery(this).remove();
    	});
    });
	jQuery(document).on('input', '.hct-input', function(){
	    var length = jQuery(this).parent().find('.hct-input').length;

	    var done = 0;
	    jQuery(this).parent().find('.hct-input').each(function(){
			var input_val = jQuery(this).val();
			if(input_val!=""){
				done++;
			}
	    });

	    if(done==length){
	    	var ok = 0;
		    jQuery(this).parent().find('.hct-input').each(function(){
		    	var pre = jQuery(this).attr('data-value');
				var val = jQuery(this).val();
				if(val==pre){
					ok++;
				}
		    });
		    if(ok==length){
		    	jQuery(this).parent().find('small').removeClass('text-danger');
		    	jQuery(this).parent().find('small').addClass('text-success');
		    	jQuery(this).parent().find('small').text('Đúng');
		    }else{
		    	jQuery(this).parent().find('small').addClass('text-danger');
		    	jQuery(this).parent().find('small').removeClass('text-success');
				jQuery(this).parent().find('small').text('Sai');
		    }
	    }else{
	    	if(done!=0){
		    	jQuery(this).parent().find('small').addClass('text-danger');
		    	jQuery(this).parent().find('small').removeClass('text-success');
				jQuery(this).parent().find('small').text('Bạn chưa điền hết');
	    	}else{
		    	jQuery(this).parent().find('small').removeClass('text-danger');
		    	jQuery(this).parent().find('small').removeClass('text-success');
				jQuery(this).parent().find('small').text('');
	    	}
	    }
	});

});
