//--DOCUMENT READY FUNCTION BEGIN
$(document).ready(function () {

    // images grid list
    function display_collections_grid() {
        jQuery("#collections_grid").addClass("active");
        jQuery("#collections_list").removeClass("active");
        // jQuery(".image_thumbnail").addClass("thumbnail");
        // jQuery(".manager_images").addClass("grid");
        // jQuery(".manager_images").removeClass("list");
        // fit_img();
        localStorage.setItem('display_image', 'collections_grid');
        $("meta[name=viewport]").attr('content', 'width=device-width, initial-scale=1, maximum-scale=1');
    }
    function display_collections_list() {
        jQuery("#collections_grid").removeClass("active");
        jQuery("#collections_list").addClass("active");
        // jQuery(".image_thumbnail").removeClass("thumbnail");
        // jQuery(".manager_images").removeClass("grid");
        // jQuery(".manager_images").addClass("list");
        localStorage.setItem('display_image', 'collections_list');
        $("meta[name=viewport]").attr('content', 'width=1200');
    }
    jQuery("#collections_grid").click(function () {
        display_collections_grid();
    });
    jQuery("#collections_list").click(function () {
        display_collections_list();
    });
    if (localStorage.getItem('display_image') == 'collections_grid') {
        display_collections_grid();
    } else {
        display_collections_list();
    }






    $(".adv_search_btn a").click(function () {
        if($(".adv_search_form").is(":visible")){
            $(".adv_search_form").slideUp(300);
        }
        else{
            $(".adv_search_form").slideDown(300);  
            jQuery('.form-control.date').datetimepicker({
                format: "d-m-Y H:i",
                lang: "vi",
                scrollInput: false
            });         
        }
        
    });

    // =========== FIT IMAGE TO DIV ==========
    // Detect objectFit support
    if ('objectFit' in document.documentElement.style === false) {
        // assign HTMLCollection with parents of images with objectFit to variable
        var container = document.getElementsByClassName('fit_thumbnail');
        // Loop through HTMLCollection
        for (var i = 0; i < container.length; i++) {
            // Asign image source to variable
            var imageSource = container[i].querySelector('img').src;
            // Hide image
            container[i].querySelector('img').style.display = 'none';
            // Add background-size: cover
            container[i].style.backgroundSize = 'cover';
            // Add background-image: and put image source here
            container[i].style.backgroundImage = 'url(' + imageSource + ')';
            // Add background-position: center center
            container[i].style.backgroundPosition = 'center center';
        }
    }
    else {
        // You don't have to worry
        console.log('No worries, your browser supports objectFit')
    }

    // =========== CHECK MENU LINK ACTIVE ==========
    jQuery(".menu>ul>li>a").each(function () {
        var href = $(this).attr('href').split("/")[1]
        var pathname = location.pathname.split("/")[1];
        if (pathname == href) {
            jQuery(this).parents("li").addClass("active");
        }
    });
    jQuery(".megamenu>li>h3>a").each(function () {
        var href = $(this).attr('href').split("/")[1]
        var pathname = location.pathname.split("/")[1];
        if (pathname == href) {
            jQuery(this).parents("li").addClass("active");
        }
    });
 
    // =========== ABOUT US PAGE - RIGHT MENU STICKY ==========
    function goToByScroll(id){
          // Reove "link" from the ID
        id = id.replace("link", "");
          // Scroll
        var header_height = jQuery(".header.is-ticky").height();
        $('html,body').animate({
            scrollTop: $("#"+id).offset().top - header_height -10},
            'slow');
    }

    $(".gioithieupage.index .quick_sub_menu li a").click(function(e) { 
          // Prevent a page reload when a link is pressed
        e.preventDefault(); 
          // Call the scroll function
          var div_active_link = $(this).attr("href");
           var div_active =div_active_link.replace("link", "");
         // alert(div_active_link);
        goToByScroll($(this).attr("href"));   
        $(".quick_sub_menu li").removeClass("active");
        $(this).parents("li").addClass("active");
        $(".post_thumbnail_left").removeClass("active");   
        $("#"+div_active+"").addClass("active");    
    });

    // =========== HOME SLIDER ==========
    if (jQuery("#home_slider").revolution == undefined) {
        revslider_showDoubleJqueryError("#home_slider");
    } else {
        jQuery("#home_slider").show().revolution({
            //sliderType: "standard",
            //jsFileLocation: "js/",
            sliderLayout: "auto",
            dottedOverlay: "none",
            delay:9000,
            navigation: {
                keyboardNavigation: "on",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                onHoverStop: "off",
                touch: {
                    touchenabled: "on",
                    swipe_threshold: 75,
                    swipe_min_touches: 1,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                },
                arrows: {
                    style: "uranus",
                    enable: true,
                    hide_onmobile: false,
                    hide_onleave: false,
                    tmp: '',
                    left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 10,
                        v_offset: 0
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 10,
                        v_offset: 0
                    }
                },
                bullets: {
                    enable: true,
                    hide_onmobile: false,
                    style: "uranus",
                    hide_onleave: false,
                    direction: "horizontal",
                    h_align: "center",
                    v_align: "bottom",
                    h_offset: 0,
                    v_offset: -37,
                    space: 20,
                    tmp: '<span class="tp-bullet-inner"></span>'
                }
            },
            //startwidth: 1425,
            //startheight: 411,
            responsiveLevels: [1200, 992, 768, 300],
            visibilityLevels: [1200, 992, 768, 300],
            gridwidth: [1170, 970, 750, 280],
            gridheight: [411, 390, 370, 370],                          
            lazyType: "single",
            shadow: 0,
            spinner: "off",
            stopLoop: "off",
            stopAfterLoops: -1,
            stopAtSlide: -1,
            shuffle: "off",
            autoHeight: "off",
            disableProgressBar: "off",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false,
            }
        });
    }

    // =========== BRAND SLIDER ==========
    $(".brand_slider .horizontal_slider").owlCarousel({
        nav: false,
        navText: ['<i class="arrow_carrot-left_alt2"></i>', '<i class="arrow_carrot-right_alt2"></i>'],
        autoplay: true,
        autoplayTimeout: 6000,
        autoplayHoverPause: false,
        loop: true,
        dots: false,
        slideBy: 3,
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 2,
            },
            767: {
                items: 3,

            },
            991: {
                items: 4,

            },
            1200: {
                items: 4
            }
        }
    });
    $(".brand_slider .slide_pre").click(function () {
        $(".brand_slider .horizontal_slider").trigger('prev.owl.carousel');
        return false;
    });
    $(".brand_slider .slide_next").click(function () {
        $(".brand_slider .horizontal_slider").trigger('next.owl.carousel');
        return false;
    });

    // =========== CUSTOMER SLIDER ==========
    $(".khachhang_slider .horizontal_slider").owlCarousel({
        nav: false,
        navText: ['<i class="arrow_carrot-left_alt2"></i>', '<i class="arrow_carrot-right_alt2"></i>'],
        autoplay: false,
        autoplayTimeout: 6000,
        autoplayHoverPause: false,
        loop: true,
        dots: false,
        slideBy: 3,
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 2,
            },
            767: {
                items: 2,

            },
            991: {
                items: 3,

            },
            1200: {
                items: 3
            }
        }
    });
    $(".khachhang_slider .slide_pre").click(function () {
        $(".khachhang_slider .horizontal_slider").trigger('prev.owl.carousel');
        return false;
    });
    $(".khachhang_slider .slide_next").click(function () {
        $(".khachhang_slider .horizontal_slider").trigger('next.owl.carousel');
        return false;
    });

    // =========== AWARD SLIDER ==========
    $(".award_slider .horizontal_slider").owlCarousel({
        nav: false,
        navText: ['<i class="arrow_carrot-left_alt2"></i>', '<i class="arrow_carrot-right_alt2"></i>'],
        autoplay: true,
        autoplayTimeout: 6000,
        autoplayHoverPause: false,
        loop: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 2,
            },
            767: {
                items: 3,

            },
            991: {
                items: 4,

            },
            1200: {
                items: 4
            }
        }
    });

    $(".award_slider .slide_pre").click(function () {
        $(".award_slider .horizontal_slider").trigger('prev.owl.carousel');
        return false;
    });
    $(".award_slider .slide_next").click(function () {
        $(".award_slider .horizontal_slider").trigger('next.owl.carousel');
        return false;
    });

    // =========== COMPANY SUMMARY SLIDER ==========
    $(".summary_slider .horizontal_slider").owlCarousel({
        nav: false,
        navText: ['<i class="arrow_carrot-left"></i>', '<i class="arrow_carrot-right"></i>'],
        autoplay: false,
        autoplayTimeout: 6000,
        autoplayHoverPause: false,
        loop: false,
        dots: false,
        responsive: {
            0: {
                items: 1,
            },
            640: {
                items: 2,
            },
            767: {
                items: 3,

            },
            991: {
                items: 4,

            },
            1200: {
                items: 4
            }
        }
    });
    $(".summary_slider .slide_pre").click(function(){
     $(".summary_slider .horizontal_slider").trigger('prev.owl.carousel');
        return false;
    });
    $(".summary_slider .slide_next").click(function(){
     $(".summary_slider .horizontal_slider").trigger('next.owl.carousel');
        return false;
    });

    // ============ MOBILE MENU BEGIN ================
     var og_wrapper_inner_height = jQuery(".wrapper-container").innerHeight();    
    function fix_menu_body_height() {
        jQuery("#offcanvas").css("height","auto");
        jQuery(".wrapper-container").css("height","auto");          
         var wrapper_inner_height = jQuery(".wrapper-container").innerHeight();
         var offcanvas_inner_height = jQuery("#offcanvas").innerHeight();
         if (wrapper_inner_height == offcanvas_inner_height){
          // not do something here
         }else if (wrapper_inner_height > offcanvas_inner_height){            
            jQuery("#offcanvas").css("height",wrapper_inner_height);
         }
         else{
            jQuery(".wrapper-container").css("height",offcanvas_inner_height);
         }
    }
    jQuery('.btn-menu-canvas').click(function () {    
        if (jQuery('#offcanvas').hasClass('active')) {
            jQuery('body').removeClass('off-canvas-active');
            jQuery('#offcanvas').removeClass('active');
            jQuery('.wrapper-container').removeClass('offcanvas-push');
        } else {
            jQuery('body').addClass('off-canvas-active');
            jQuery('#offcanvas').addClass('active');
            jQuery('.wrapper-container').addClass('offcanvas-push');
        }
        fix_menu_body_height();
    });
    jQuery('#off-canvas-button').click(function () {
        jQuery('#offcanvas').removeClass('active');
        jQuery('.wrapper-container').removeClass('offcanvas-push');
        jQuery(".wrapper-container").css("height",og_wrapper_inner_height);
        jQuery("#offcanvas").css("height","auto");
        jQuery(".wrapper-container").css("height","auto");          
    });
    jQuery(document).mouseup(function (e) {
        var container = jQuery("#offcanvas");
        if (!container.is(e.target) // if the target of the click isn't the container...
            && container.has(e.target).length === 0) // ... nor a descendant of the container
        {
            jQuery('#offcanvas').removeClass('active');
            jQuery('.wrapper-container').removeClass('offcanvas-push');
            jQuery(".wrapper-container").css("height",og_wrapper_inner_height);
        }
    });
    jQuery("#offcanvas .navbar-nav ul").hide();
    jQuery("#offcanvas .navbar-nav li h3 i").addClass("accordion-show");
    jQuery("#offcanvas .navbar-nav li h3 i").click(function () {
        if (jQuery(this).parent().next().is(":visible")) {
            jQuery(this).addClass("accordion-show");
        } else {
            jQuery(this).removeClass("accordion-show");
        }
        jQuery(this).parent().next().toggle(400);
        if (jQuery(this).hasClass("arrow_carrot-down")) {
            jQuery(this).removeClass("arrow_carrot-down");
               setTimeout(function() {
                    fix_menu_body_height();
               }, 401);            
        } else {
            jQuery(this).addClass("arrow_carrot-down");
               setTimeout(function() {
                    fix_menu_body_height() 
               }, 401);            
        }
    });
    
});
//--DOCUMENT READY FUNCTION END





//--WINDOW LOADED FUNCTION BEGIN
$(window).bind("load", function () {

    // =========== Resopnsive footer widget 2 colum equal height ==========
    if( (jQuery(window).width() < 750) && (jQuery(window).width() > 423)){
        var temp_height = 0;
      jQuery(".footer_widget .col_xs_50p").each(function () {
        var footer_widget_height = jQuery(this).height();
        if (parseInt(footer_widget_height)> parseInt(temp_height)){
            temp_height = footer_widget_height;
        }
      });
       jQuery(".footer_widget .col_xs_50p").css("height",temp_height);
    }else{
        jQuery(".footer_widget .col_xs_50p").css("height","auto");
    }

    // =========== Resopnsive block_summary equal height  ==========
    if(jQuery(window).width() > 463){
        var block_summary_temp = 0;
       jQuery(".block_summary").each(function () {
        var block_summary_height = jQuery(this).find("span").height();
        if (parseInt(block_summary_height)> parseInt(block_summary_temp)){
            block_summary_temp = block_summary_height;
        }
      });
       jQuery(".block_summary span").css("height",block_summary_temp);
    }else{
        jQuery(".block_summary span").css("height","auto");
    }

    // =========== Resopnsive .award_item_title    ==========
    if(jQuery(window).width() > 423){
        var award_item_title_temp = 0;
        jQuery(".award_item_title").each(function () {
        var award_item_title_height = jQuery(this).height();
        if (parseInt(award_item_title_height)> parseInt(award_item_title_temp)){
            award_item_title_temp = award_item_title_height;
        }
      });
       jQuery(".award_item_title").css("height",award_item_title_temp);
    }else{
        jQuery(".award_item_title").css("height","auto");
    }

    // =========== fix_footer_alway_bottom ==========
    function fix_footer_alway_bottom() {
        jQuery("#offcanvas").css("height","auto");
        jQuery(".wrapper-container").css("height","auto");           
         var body_height = jQuery("body").innerHeight();
         var window_height = jQuery(window).innerHeight();
         var header_height = jQuery("#site-header").innerHeight();
         var header_outer_height = jQuery("#site-header").outerHeight(true);
         var header_margin = header_outer_height - header_height;
         var content_height = jQuery("#site-content").innerHeight();
         var content_pd_height = jQuery("#site-content").height();
         var content_outer_height = jQuery("#site-content").outerHeight(true);
         var content_margin = content_outer_height - content_height;
         var content_padding = content_height - content_pd_height;
         var footer_height = jQuery("#footer").innerHeight();
         var footer_outer_height = jQuery("#footer").outerHeight(true);    
         var footer_margin = footer_outer_height - footer_height;   
         if (body_height < window_height){
            jQuery("#site-content").css("height",window_height-(header_height+header_margin)-(footer_height+footer_margin)-(content_margin-content_padding));
         }
    }
    fix_footer_alway_bottom();

    // =========== FIX ABOUT US PAGE RIGHT SIDEBAR EQUAL HEIGHT VS LEFT CONTENT PAGE ==========
    if(jQuery(window).width() > 750){
        var left_content_height = jQuery(".gioithieupage.index .page_content").innerHeight();
        var right_sidebar_height = jQuery(".gioithieupage.index .page_sidebar").innerHeight();
        if( left_content_height > right_sidebar_height){
            jQuery(".gioithieupage.index .page_sidebar").css("height",left_content_height);
        }
    }else{
        jQuery(".gioithieupage.index .page_sidebar").css("height","auto");
    }

    // =========== fit_thumbnail img height ==========
    jQuery(".fit_thumbnail img").each(function () {
        var thum_div_height = jQuery(this).parents(".fit_thumbnail").innerHeight();
        jQuery(this).css("height", thum_div_height);
    });
    jQuery(".fit_thumbnail iframe").each(function () {
        var thum_div_height = jQuery(this).parents(".fit_thumbnail").innerHeight();
        jQuery(this).css("height", thum_div_height);
        console.log(thum_div_height);
    });

    // =========== tapchi_item height ==========
    if (jQuery(window).width() > 750) {
        var tapchi_item_temp = 0;
          jQuery(".tapchi_item").each(function () {
            var tapchi_item_height = jQuery(this).height();
            if (parseInt(tapchi_item_height)> parseInt(tapchi_item_temp)){
                tapchi_item_temp = tapchi_item_height;
            }
          });
          jQuery(".tapchi_item").css("height",tapchi_item_temp);   
        }
    else{
       jQuery(".tapchi_item").css("height","auto");   
    }     

});
//--WINDOW LOADED FUNCTION END









//--WINDOW RESIZE FUNCTION BEGIN
$(window).resize(function () {

    // =========== tapchi_item height ==========
    if (jQuery(window).width() > 750) {
          var tapchi_item_temp = 0;
            jQuery(".tapchi_item").css("height","auto");  
          jQuery(".tapchi_item").each(function () {
            var tapchi_item_height = jQuery(this).height();
            if (parseInt(tapchi_item_height)> parseInt(tapchi_item_temp)){
                tapchi_item_temp = tapchi_item_height;
            }
          });
          jQuery(".tapchi_item").css("height",tapchi_item_temp);  
    }
    else{
       jQuery(".tapchi_item").css("height","auto");   
    }


    // =========== fit_thumbnail img height ==========
    jQuery(".fit_thumbnail img").each(function () {
        var thum_div_height = jQuery(this).parents(".fit_thumbnail").innerHeight();
        jQuery(this).css("height", thum_div_height);
    });
    jQuery(".fit_thumbnail iframe").each(function () {
        var thum_div_height = jQuery(this).parents(".fit_thumbnail").innerHeight();
        jQuery(this).css("height", thum_div_height);
        console.log(thum_div_height);
    });

    // =========== fix_footer_alway_bottom ==========
    function fix_footer_alway_bottom() {
        jQuery("#offcanvas").css("height","auto");
        jQuery(".wrapper-container").css("height","auto");           
         var body_height = jQuery("body").innerHeight();
         var window_height = jQuery(window).innerHeight();
         var header_height = jQuery("#site-header").innerHeight();
         var header_outer_height = jQuery("#site-header").outerHeight(true);
         var header_margin = header_outer_height - header_height;
         var content_height = jQuery("#site-content").innerHeight();
         var content_pd_height = jQuery("#site-content").height();
         var content_outer_height = jQuery("#site-content").outerHeight(true);
         var content_margin = content_outer_height - content_height;
         var content_padding = content_height - content_pd_height;
         var footer_height = jQuery("#footer").innerHeight();
         var footer_outer_height = jQuery("#footer").outerHeight(true);    
         var footer_margin = footer_outer_height - footer_height;               
         if (body_height < window_height){
            jQuery("#site-content").css("height",window_height-(header_height+header_margin)-(footer_height+footer_margin)-(content_margin-content_padding));
         }
    }
    // fix_footer_alway_bottom();

    // =========== Resopnsive footer widget 2 colum equal height ==========
    if( (jQuery(window).width() < 750) && (jQuery(window).width() > 423)){
        var temp_height = 0;
      jQuery(".footer_widget .col_xs_50p").each(function () {
        var footer_widget_height = jQuery(this).height();
        if (parseInt(footer_widget_height)> parseInt(temp_height)){
            temp_height = footer_widget_height;
        }

      });
       jQuery(".footer_widget .col_xs_50p").css("height",temp_height);
    }else{
        jQuery(".footer_widget .col_xs_50p").css("height","auto");
    }

    // =========== Resopnsive block_summary equal height ==========
    if(jQuery(window).width() > 463){
        var block_summary_temp = 0;
       jQuery(".block_summary").each(function () {
        var block_summary_height = jQuery(this).find("span").height();
        if (parseInt(block_summary_height)> parseInt(block_summary_temp)){
            block_summary_temp = block_summary_height;
        }
      });
       jQuery(".block_summary span").css("height",block_summary_temp);
    }else{
        jQuery(".block_summary span").css("height","auto");
    }

    // =========== FIX ABOUT US PAGE RIGHT SIDEBAR EQUAL HEIGHT VS LEFT CONTENT PAGE ==========
    if (jQuery(window).width() > 750) {
        var left_content_height = 0;
        var right_sidebar_height = 0;
        left_content_height = jQuery(".gioithieupage.index .page_content").innerHeight();
        right_sidebar_height = jQuery(".gioithieupage.index .page_sidebar").innerHeight();
        console.log(left_content_height);
        //if( left_content_height > right_sidebar_height){
            jQuery(".gioithieupage.index .page_sidebar").css("height",left_content_height);
       // }
    }else{
        jQuery(".gioithieupage.index .page_sidebar").css("height","auto");
    }

    // =========== Resopnsive .award_item_title ==========
    if(jQuery(window).width() > 423){
        var award_item_title_temp = 0;
        jQuery(".award_item_title").each(function () {
        var award_item_title_height = jQuery(this).height();
        if (parseInt(award_item_title_height)> parseInt(award_item_title_temp)){
            award_item_title_temp = award_item_title_height;
        }
      });
       jQuery(".award_item_title").css("height",award_item_title_temp);
    }else{
        jQuery(".award_item_title").css("height","auto");
    }
 
});
//--WINDOW RESIZE FUNCTION END


(function ($) {

    jQuery(window).scroll(function () {
        // =========== STICKY MENU ==========
        var posScroll = jQuery(window).scrollTop();
        //Lấy vị trí hiện tại của menu cách top x px
        //pos = jQuery(".menu").position();   
        // var scroll = jQuery(window).scrollTop();
        //if (parseInt(posScroll) > parseInt(pos.top)) {
        if ($(window).width() > 750) {
            if (parseInt(posScroll) > 98) {
                jQuery("#site-header .header").addClass("is-ticky");
            }else{
                jQuery("#site-header .header").removeClass("is-ticky");
            }
        }else{
            if (parseInt(posScroll) > 0) {
                jQuery("#site-header .header").addClass("is-ticky");
            }else{
                jQuery("#site-header .header").removeClass("is-ticky");
            }
        }

        // =========== quick_sub_menu ==========
        if ($(window).width() > 750) {
            if(jQuery(".gioithieupage.index .quick_sub_menu").is(":visible")){
                // alert("yes");
                var header_height = jQuery(".header.is-ticky").height();
                var page_sidebar = jQuery(".page_sidebar_position").offset();
                var page_sidebar_height = jQuery(".page_sidebar_position").height();  
                var quick_sub_menu_height = jQuery(".quick_sub_menu").outerHeight(true);

                if ( (parseInt(posScroll) > parseInt(page_sidebar.top - header_height)) && (parseInt(posScroll) < parseInt(page_sidebar.top - header_height + page_sidebar_height - quick_sub_menu_height))) {

                    jQuery(".quick_sub_menu").css("top", posScroll - quick_sub_menu_height);
                }

                if ( parseInt(posScroll) < parseInt(page_sidebar.top - header_height)){
                    jQuery(".quick_sub_menu").css("top",0);
                }
                //console.log(posScroll - quick_sub_menu_height);
            }
         }
        else{
            jQuery(".quick_sub_menu").css("top",0);
        }


    });



})(jQuery);


