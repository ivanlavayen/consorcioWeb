$(document).ready(function(){
    $('.form-1').jqTransform();					   	
    $('.slider')._TMS({
        show:0,
        pauseOnHover:true,
        prevBu:'.prev',
        nextBu:'.next',
        duration:1000,
        preset:'fade',
        pagination:true,
        slideshow:2000,
        
    })		
});