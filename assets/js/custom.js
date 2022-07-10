/* -----| script |-------*

 */

 $(document).ready(function () {
  svgConvert('.svgIcon');
  
  /* Sidebar menu */
  $(".menuIcon").click(function () {
    $(this).toggleClass("menu-close");
    $(".navigationBar").toggleClass("slideMenu");
    $("body").addClass("bodyFixed");
  });

  $(".sidebar-overlay, .closeMenu").click(function () {
    $(".menuIcon").removeClass("menu-close");
    $(".navigationBar").removeClass("slideMenu");
    $("body").removeClass("bodyFixed");
  });

  $(".menuMain li:has(ul)").prepend('<span class="arrow"></span>');
  $(".arrow").click(function () {
    $(this).siblings("ul").slideToggle("slow");
    $(this).toggleClass("minus");
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      
      $(".headerMain").addClass("has_sticky");
      $("body").addClass("sticky_header");
    } else {
      $(".headerMain").removeClass("has_sticky");
      $("body").removeClass("sticky_header");
    }
  });

  /* Offer Slider */
  $(".offerSlider").slick({
    arrows: false,
    dots: false,
    infinite: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true
  });

  /* Intro Slider */
  $(".introSlider").slick({
    arrows: false,
    dots: true,
    infinite: false,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  });


   $('.btn-qty').click(function(e){
        var value = $(this).siblings('.input-number').val();
        var seleType = $(this).attr('data-type');
       // console.log(seleType);
        if(seleType == 'minus'){
            console.log(value);
            value--;
        }else if(seleType == 'plus'){
          //console.log(value++);
            value++;
        }

        $(this).siblings('.input-number').val(value);
    });  


  /* ------| A. Svg Rendering In Browser |--------- */
  function svgConvert(svgClass) {
    $(svgClass).each(function () {
      var $img = $(this);

      var imgID = $img.attr("id");

      var imgClass = $img.attr("class");

      var imgURL = $img.attr("src");

      $.get(
        imgURL,
        function (data) {
          /* Get the SVG tag, ignore the rest */

          var $svg = $(data).find("svg");

          /* Add replaced image's ID to the new SVG */

          if (typeof imgID !== "undefined") {
            $svg = $svg.attr("id", imgID);
          }

          /* Add replaced image's classes to the new SVG */

          if (typeof imgClass !== "undefined") {
            $svg = $svg.attr("class", imgClass + " svgIcon");
          }

          $svg = $svg.attr("fill", "currentColor");

          /* Remove any invalid XML tags as per http://validator.w3.org */

          $svg = $svg.removeAttr("xmlns:a");

          /* Replace image with new SVG*/

          $img.replaceWith($svg);
        },
        "xml"
      );
    });
  }

 });