	function set_paging(target, page,perPage){
		target.closest(".usePaging_parent").find(".usePaging tbody tr").removeClass("current_page");
		for(i=(page-1)*perPage;i<page*perPage;i++){
			target.closest(".usePaging_parent").find(".usePaging tbody tr").eq(i).addClass("current_page");
		}
		var from_num = (page-1)*perPage+1;
		var total_num = parseInt(target.closest(".usePaging_parent").find(".usePaging_info .total_num").html());
		target.closest(".usePaging_parent").find(".usePaging_info .from_num").html(from_num);
		target.closest(".usePaging_parent").find(".usePaging_btns .prev_btn").attr("data_page",parseInt(page-1));
		target.closest(".usePaging_parent").find(".usePaging_btns .next_btn").attr("data_page",parseInt(page+1));
		if(page==1){
			target.closest(".usePaging_parent").find(".usePaging_btns .prev_btn").addClass("no_act");
		}else{
			target.closest(".usePaging_parent").find(".usePaging_btns .prev_btn").removeClass("no_act");
		}
		if(page==total_num){
			target.closest(".usePaging_parent").find(".usePaging_btns .next_btn").addClass("no_act");
		}else{
			target.closest(".usePaging_parent").find(".usePaging_btns .next_btn").removeClass("no_act");
		}		

	}
    jQuery(".usePaging").each(function(){
    	if(!$(this).hasClass("Paging_Inited")){
    		$(this).addClass("Paging_Inited");
    		$(this).wrapAll('<div class="usePaging_parent"></div>');
    		//Count page
    		var perPage = 1;
    		 $(this).attr("data_perPage",perPage);
    		var trCount = $(this).find("tbody").find("tr").length;
    		var TotalPage = Math.ceil(trCount / perPage);

    		var usePaging_btns = '<a href="#" class="next_prev_btns prev_btn">Quay lại</a>'+
    							 '<a href="#" class="next_prev_btns next_btn">Tiếp theo</a>';
    		var usePaging_info = '<div>Item: <span class="from_num"></span> / <span class="total_num">'+trCount+'</span></div>';
    		var after = '<div class="usePaging_page">'+
    						'<div class="usePaging_info">'+usePaging_info+'</div>'+
    						'<div class="usePaging_btns">'+usePaging_btns+'</div>'+
    					'</div>';
			$(this).after(after);

			var page = 1;
			set_paging($(this),page,perPage);
    	}
    });
	jQuery(document).on('click', '.next_prev_btns', function(e){
		e.preventDefault();
	    var target = $(this).closest(".usePaging_parent").find(".usePaging");
	    var page = parseInt($(this).attr("data_page"));
	    var perPage = parseInt(target.attr("data_perPage"));
	    set_paging(target,page,perPage);
	});


	//CHECK RESULT
	jQuery(document).on('click', '.check_result', function(e){
		e.preventDefault();
		var input = $(this).parents(".txt_check_item").find(".txt_input_item");
		var txt_taidam = $(this).parents(".txt_check_item").find(".txt_taidam").text();

		input.find(".noti_span").remove();

	    input.each(function(index){
	    	var index = $(this).index();
	    	var txt = txt_taidam.charAt(index);
	    	
			$(this).find(".form-control").after('<span class="noti_span text-center">'+txt+'</span>');

	    	if($(this).find(".form-control").val()==txt){
				$(this).find(".form-control").css("color","#8BC34A");
				$(this).find(".form-control").css("border-color","#8BC34A");
				$(this).find(".form-control").after('<span class="noti_span text-center" style="color:#8BC34A">Đúng</span>');
	    	}else{
				$(this).find(".form-control").css("color","#F44336");
				$(this).find(".form-control").css("border-color","#F44336");
				$(this).find(".form-control").after('<span class="noti_span text-center" style="color:#F44336">Sai</span>');
	    	}
	    });
	});