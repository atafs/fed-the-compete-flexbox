$(document).ready(function() {

    /* Our Menu */
    var waypoint = new Waypoint({
      element: document.getElementsByClassName('js--wp-1-our-menu'),
      handler: function(direction) {
         $('.js--wp-1-our-menu').addClass('animated fadeInUp'); 
         $('.js--wp-2-our-menu').addClass('animated fadeInDown');  
         $('.js--wp-3-our-menu').addClass('animated fadeInUp');
         $('.js--wp-4-our-menu').addClass('animated fadeInDown');  
      }
    });

});