/*$(document).ready(function(){
   $(".featured_blog").hover(function(){
      $(this).append('<a href="#" id="read_more>Read more</a>') ;
   });
});*/
$(document).ready(function(){
  $('.crousel').slick({
      dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
     autoplay: true,
  autoplaySpeed: 4000
  }); 
});
$(document).ready(function(){
   $('.featured_blog').hover(function(){
      $(this).find("a").fadeIn("fast").css("display","block");  
    }).mouseleave(function(){
       $(this).find("a").fadeOut("fast");
   }); 
});