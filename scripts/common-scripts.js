;
(function ($) {
    $(function () {

        // Begin input common focus and blur for value.
        $('.main-wrap input:text, .main-wrap input:password,.main-wrap input[type="email"],.main-wrap input[type="tel"],.main-wrap input[type="number"],.main-wrap input[type="search"], .main-wrap textarea').focus(function () {
            if (this.value == this.defaultValue) {
                this.value = ''
            }
        })
        $('.main-wrap input:text,.main-wrap input:password,.main-wrap input[type="email"],.main-wrap input[type="tel"],.main-wrap input[type="number"],.main-wrap input[type="search"], .main-wrap textarea').blur(function () {
            if (!this.value) {
                this.value = this.defaultValue;
            }
        })
        // Ends input common focus and blur for value.


        $("nav.main-nav ul > li").find("> ul").parent().addClass("subNav")

        if ($(".home-content").length) {
            $("body").addClass("only-home");
        }

        if ($(".contact").length) {
            $('body').addClass('contact-page-body');
        }

        if ($(".single-project-view").length) {
            $('body').addClass('single-project');
        }

        if ($(".about-content").length) {
            $('body').addClass('about');
        }


        if ($("select.styled-select").length) {
            $('select.styled-select').selectric();
        }

    
        
        $('.about-content .sub-menu ul li a ').on('click', function (e) {
            e.preventDefault();
            var $el = $(this),
                id = $el.attr('href');
            $('html, body').animate({
                scrollTop: $(id).offset().top -145
            }, 1500);

            return false;
        });  
        
        $("a.awardTriger").click(function(e){
            e.preventDefault();
            $('#award-modal').fadeIn(0, function(){
                $(this).addClass('awardOpened');
            })
        })
        $('#award-modal').click(function(){
            $(this).removeClass('awardOpened');
            $(this).fadeOut();
        })
        
        $(".award-wrap").click(function(e){
            e.stopPropagation();
        })
        
        
        
        
        
        
        



        // this is quantity
        $('.quantity').each(function () {
            var spinner = $(this),
                input = spinner.find('input[type="number"]'),
                btnUp = spinner.find('.quantity-up'),
                btnDown = spinner.find('.quantity-down'),
                min = input.attr('min'),
                max = input.attr('max');

            btnUp.on('click', function () {
                var oldValue = parseFloat(input.val());
                if (oldValue >= max) {
                    var newVal = oldValue;
                } else {
                    var newVal = oldValue + 1;
                }
                spinner.find("input").val(newVal);
                spinner.find("input").trigger("change");
            });

            btnDown.on('click', function () {
                var oldValue = parseFloat(input.val());
                if (oldValue <= min) {
                    var newVal = oldValue;
                } else {
                    var newVal = oldValue - 1;
                }
                spinner.find("input").val(newVal);
                spinner.find("input").trigger("change");
            });

        });





        //  venue-carousel function 

        if ($('#info-carousel').length) {
            $('#info-carousel').slick({
                dots: false,
                autoplay: true,
                autoplaySpeed: 5000,
                infinite: true,
                navigation: false,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
                //centerMode: true,
                variableWidth: true,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            variableWidth: false
                            /* variableWidth: false,*/

                        }
                    },
                   /* {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }*/
                    // You can unslick at a given breakpoint now by adding:
                    // settings: "unslick"
                    // instead of a settings object
                ]
            });
        }


        // End venue-carousel function 


        //  venue-carousel function 
        if ($('.service-inner').length) {
            $('.service-inner').slick({
                dots: false,
                autoplay: true,
                autoplaySpeed: 5000,
                infinite: true,
                navigation: false,
                speed: 300,
                slidesToShow: 2,
                slidesToScroll: 1,
               draggable:true,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 3,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                    // You can unslick at a given breakpoint now by adding:
                    // settings: "unslick"
                    // instead of a settings object
                ]
            });
        }


        // End venue-carousel function 



        // Directors carousel function 
        if ($('#directors-wrap').length) {

            var $directorsStatus = $('.directors.slideingInfo');
            var $directorsCaptionElement = $('#directors-wrap .caption-slider');
            var $directorSlickElement = $('#directors-wrap .director-inner');

            $directorsCaptionElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
                //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
                var i = (currentSlide ? currentSlide : 0) + 1;
                $directorsStatus.text(i + '/' + slick.slideCount);
            });

            //this is custom nav slick
            $directorsCaptionElement.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                fade: true,
                asNavFor: $directorSlickElement,
                centerMode: true,
                speed: 800,
                focusOnSelect: true,
                autoplay: false,
                dots: false,
                centerPadding: '0px'

            });

            $directorSlickElement.slick({
                slidesToShow: 1,
                autoplay: false,
                slidesToScroll: 1,
                autoplaySpeed: 1000,
                speed: 800,
                arrows: false,
                asNavFor: $directorsCaptionElement,
                dots: false,
                centerPadding: '0px'
            });

        }


        // Associate Directors carousel function 
        if ($('#associate-directors-wrap').length) {

            var $associateStatus = $('.associate.slideingInfo');
            var $associateSliderElement = $('#associate-directors-wrap .caption-slider');
            var $associatedirectorSlickElement = $('#associate-directors-wrap .director-inner');

            $associateSliderElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
                //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
                var i = (currentSlide ? currentSlide : 0) + 1;
                $associateStatus.text(i + '/' + slick.slideCount);
            });

            //this is custom nav slick
            $associateSliderElement.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                fade: true,
                asNavFor: $associatedirectorSlickElement,
                centerMode: true,
                focusOnSelect: true,
                speed: 800,
                autoplay: false,
                dots: false,
                centerPadding: '0px'

            });

            $associatedirectorSlickElement.slick({
                slidesToShow: 1,
                autoplay: false,
                slidesToScroll: 1,
                autoplaySpeed: 1000,
                arrows: false,
                speed: 800,
                asNavFor: $associateSliderElement,
                dots: false,
                centerPadding: '0px'
            });

        }


        // End venue-carousel function


        //  venue-carousel function 
        if ($('#team-building-inner').length) {

            var $teamStatus = $('.team.slideingInfo');
            var $teamSlickElement = $('#team-building-inner');

            $teamSlickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
                //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
                var i = (currentSlide ? currentSlide : 0) + 1;
                $teamStatus.text(i + '/' + slick.slideCount);
            });

            $teamSlickElement.slick({
                dots: false,
                autoplay: false,
                autoplaySpeed: 8000,
                infinite: true,
                navigation: true,
                speed: 800,
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                        }
                    }
                    // You can unslick at a given breakpoint now by adding:
                    // settings: "unslick"
                    // instead of a settings object
                ]
            });
        }


        // End venue-carousel function


        $('.phone-nav').click(function () {
            $('.main-nav').slideToggle()
        })

        //FAQs Accordion Function
        $(".accordion-item").each(function () {
            var $this = $(this);
            $this.find(" > h6").on("click touch", function () {
                $(".accordion-item").removeClass("active")
                $(".accordion-item p").slideUp();
                if ($this.find("p:visible").length) {
                    $(".accordion-item").removeClass("active")
                    $(".accordion-item p").slideUp();
                } else {
                    $this.addClass("active")
                    $(".accordion-item p").slideUp();
                    $this.find(" > p").slideDown();
                }
            })
        })

        if ($('.sub-menu').length) {
            if ($(window).width() < 768) {
                var itemwidth = 0,
                    awardWidth = $('.sub-menu .award-winner').outerWidth();

                $('.sub-menu ul li').each(function () {
                    itemwidth += $(this).outerWidth(true);
                });
                if ($(awardWidth).length) {
                    $('.sub-menu-wrap').css('width', itemwidth + (awardWidth + 78));
                } else {
                    $('.sub-menu-wrap').css('width', itemwidth + 70);
                }
            }
        }


        $(window).on("scroll", function () {

            if ($(window).width() > 767) {
                if ($('.sticky-menu').length) {
                    if ($(window).scrollTop() > 1) {
                        $("div.sub-menu").addClass("fixedTop")
                    } else {
                        $("div.sub-menu").removeClass("fixedTop")
                    }
                }
            }
        });
        
        
    if ($(".animate").length) {

        var $animation_elements = $('.animate');
        var $window = $(window);

        function check_if_in_view() {
            var window_height = $window.height();
            var window_top_position = $window.scrollTop();
            var window_bottom_position = (window_top_position + window_height);

            $.each($animation_elements, function () {
                var $element = $(this);
                var element_height = $element.outerHeight();
                var element_top_position = $element.offset().top;
                var element_bottom_position = (element_top_position + element_height);

                //check to see if this current container is within viewport
                if (element_top_position <= window_bottom_position) {
                    $element.addClass('in-view');
                } else {
                    $element.removeClass('in-view');
                }
            });
        }

        $window.on('scroll resize', check_if_in_view);
        $window.trigger('scroll');
    }

    if ($('.parallax').length) {
        $('.parallax').parally({
            speed: 0.15,
            mode: 'background',
            xpos: '50%',
            outer: true,
            offset: 0
        });
    };
    
        
    $(window).on('scroll', function(){
        var windowScroll = $(this).scrollTop();
        jQuery('#parallax').css({
                'background-position': 'center ' + (-windowScroll / 4.5) + "px"
        });
    })


    })

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    


    // End ready function.


    $(window).on('load', function () {
        $('.loader').fadeOut('slow', function () {
            $(this).remove();
        });
    });




    /*flexslider*/

    $(window).on('load', function () {

        // Begin common slider
        if ($('#hero-slide-wrap').length == 0) return false

        $("#caption-inner").flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: true,
            slideshow: false,
            directionNav: true,
            controlNav: false,
            itemWidth: 176,
            asNavFor: '#hero-slide-wrap'
        });
        var heroSlider = $('#hero-slide-wrap')
        heroSlider.flexslider({
            animation: "slide",
            slideshow: false,
            directionNav: true,
            controlNav: false,
            slideshowSpeed: 5000, //Integer: Set the speed of the slideshow cycling, in milliseconds
            animationSpeed: 1000,
            //manualControls: '.single-product-nav ul li',
            useCSS: false,
            start: function (slider) {
                //$('body').removeClass('loading');

            },
            animationLoop: true,
            pauseOnAction: false, // default settings
            after: function (slider) {

            },
            sync: "#caption-inner"
        });



        $(".direction-icon.flex-next").click(function (e) {
            e.preventDefault()
            heroSlider.flexslider("next");

        })
        $(".direction-icon.flex-prev").click(function (e) {
            e.preventDefault()
            heroSlider.flexslider("prev");
        })


    })

    /*flexslider*/


})(jQuery)