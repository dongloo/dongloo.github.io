// MOBILE ACCOUNT MENU
function account_clickable(){
    if(jQuery(window).width() < 992){
        jQuery(".project-menu > .menu-icon").attr("data-clickable","true");
        jQuery(".account-info > a").attr("data-clickable","true");
    }else{
        jQuery(".project-menu > .menu-icon").attr("data-clickable","false");
        jQuery(".account-info > a").attr("data-clickable","false");
    }
}
//BODY PADDING TOP
function body_padding_top(){
    jQuery("#site-content").css("padding-top",parseInt(jQuery("header").outerHeight()));

}
//--DOCUMENT READY FUNCTION BEGIN
jQuery(document).ready(function() {
    if(jQuery(".main-car-pic").length !=0){
        $('.main-car-pic').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            asNavFor: '.sub-car-pic'
        });
        $('.sub-car-pic').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.main-car-pic',
            dots: true,
            arrows: false,
            centerMode: false,
            focusOnSelect: true,
            responsive: [
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 2
                  }
                }
              ]        
        });

    }



      $('#add-brand-img').on('change', function(event){
        for (var i = 0; i < event.target.files.length; i++) {
            var tmppath = URL.createObjectURL(event.target.files[i]);
            var html =  '<div class="uploaded-img">'+
                        '<div class="up-close"></div>'+
                        '<img src="'+tmppath+'" alt="Project Image">'+
                        '</div>';
            jQuery(this).closest(".empty-upload").before(html);
        }
      });
      jQuery(document).on('click', '.up-close', function(){
          jQuery(this).closest(".uploaded-img").remove();
      });
   
    body_padding_top();
    account_clickable();
    jQuery(document).on('click', '.account-info > a[data-clickable="true"]', function(e){
        e.preventDefault();
        jQuery(this).next(".account-menu").toggleClass("active");
    });
    jQuery(document).on('click', '.project-menu > .menu-icon[data-clickable="true"]', function(e){
        e.preventDefault();
        jQuery(this).next(".project-menu-ul").toggleClass("active");
    });
    jQuery(document).on('click', '.del-project', function(e){
        e.preventDefault();
        swal({
          title: "Are you sure?",
          text: "Once deleted, you will not be able to recover this project!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
            swal("Your project has been deleted!", {
              icon: "success",
            });
          } else {
            swal("Your project is safe!");
          }
        });        
        
    });    
    jQuery(document).on('click', '.del-present', function(e){
        e.preventDefault();
        swal({
          title: "Are you sure?",
          text: "Once deleted, you will not be able to recover this present!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
            swal("Your present has been deleted!", {
              icon: "success",
            });
          } else {
            swal("Your present is safe!");
          }
        });        
        
    });
$('#brand-add-present').on('show.bs.modal', function () {
  // Load up a new modal...
  $('#brand-detail-present').modal('hide')
})

    // FOOTER MOBILE MENU
    jQuery(document).on('click', 'footer .widget-title', function(e){
        e.preventDefault();
        jQuery(this).find('.fa').toggleClass('fa-plus fa-minus');
        jQuery(this).next('ul').slideToggle();
        
    });
    jQuery(document).on('click', '.pr-pic-header', function(){
        jQuery(this).find('i').toggleClass("rotate");
        jQuery(this).next('.pr-pic').slideToggle();
    });
    // =========== AWARD SLIDER ==========
    var car_slider_option = {
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
                items: 1,
            },
            767: {
                items: 1,

            },
            991: {
                items: 1,

            },
            1200: {
                items: 1
            }
        }    
    }
    $(".car-size-slider .horizontal_slider").owlCarousel(car_slider_option);

    // OWL SLIDER BUTTON
    $(".owl-slider .slide_prev").click(function () {
        $(".owl-slider .horizontal_slider").trigger('prev.owl.carousel');
        return false;
    });
    $(".owl-slider .slide_next").click(function () {
        $(".owl-slider .horizontal_slider").trigger('next.owl.carousel');
        return false;
    });    
    // ============ MOBILE MENU BEGIN ================
    jQuery('.btn-menu-canvas').click(function(e) {
        e.preventDefault();
        if (jQuery('#offcanvas').hasClass('active')) {
            jQuery('body').removeClass('off-canvas-active');
            jQuery('#offcanvas').removeClass('active');
            jQuery('.wrapper-container').removeClass('offcanvas-push');
        } else {
            jQuery('body').addClass('off-canvas-active');
            jQuery('#offcanvas').addClass('active');
            jQuery('.wrapper-container').addClass('offcanvas-push');
        }
    });
    jQuery('#off-canvas-button').click(function() {
        jQuery('body').removeClass('off-canvas-active');
        jQuery('#offcanvas').removeClass('active');
        jQuery('.wrapper-container').removeClass('offcanvas-push');
    });
    jQuery(document).mouseup(function(e) {
        var container = jQuery("#offcanvas");
        if (container.is(":visible")) {
            if (!container.is(e.target) // if the target of the click isn't the container...
                &&
                container.has(e.target).length === 0) // ... nor a descendant of the container
            {
                jQuery('#offcanvas').removeClass('active');
                jQuery('.wrapper-container').removeClass('offcanvas-push');
            }
        }
    });
    jQuery("#offcanvas .navbar-nav ul").hide();
    jQuery("#offcanvas .navbar-nav li h3 i").addClass("accordion-show");
    jQuery("#offcanvas .navbar-nav li h3 i").click(function() {
        if (jQuery(this).parent().next().is(":visible")) {
            jQuery(this).addClass("accordion-show");
        } else {
            jQuery(this).removeClass("accordion-show");
        }
        jQuery(this).parent().next().toggle(400);
        if (jQuery(this).hasClass("arrow_carrot-down")) {
            jQuery(this).removeClass("arrow_carrot-down");
        } else {
            jQuery(this).addClass("arrow_carrot-down");
        }
    });

    // =========== BACK TO TOP ==========
    $('#back-to-top').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    jQuery('.language-toolbox .language-selector').click(function(e) {
        e.preventDefault();
        jQuery(this).parents(".language-toolbox").toggleClass("active");
    });

});
//--DOCUMENT READY FUNCTION END

//--WINDOW LOADED FUNCTION BEGIN
jQuery(window).bind("load", function() {

});
//--WINDOW LOADED FUNCTION END

//--WINDOW RESIZE FUNCTION BEGIN
jQuery(window).resize(function() {
    account_clickable();
    body_padding_top();
});
//--WINDOW RESIZE FUNCTION END
jQuery(window).scroll(function() {
    // =========== BACK TO TOP ==========
    if ($(this).scrollTop() > 50) {
        $('#back-to-top').fadeIn(600);
    } else {
        $('#back-to-top').fadeOut(600);
    }
});