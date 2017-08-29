$(document).ready(function() {


    /* Meet our community */
    var waypoint = new Waypoint({
      element: document.getElementsByClassName('js--wp-1'),
      handler: function(direction) {
         $('.js--wp-1').addClass('animated fadeInUp'); 
         $('.js--wp-2').addClass('animated fadeInUp');  
         $('.js--wp-3').addClass('animated fadeInUp');
         $('.js--wp-4').addClass('animated fadeInUp');  
      }
    })
});