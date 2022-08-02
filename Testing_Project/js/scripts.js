$(document).ready(function(){
    $(document).on("click" , ".sideBarOptions" , function(e){
        $(".sideBarOptions").removeClass("borderHighlight");
       $(this).addClass("borderHighlight");
      
    
      });
    
    $(document).on("click" , ".ti-search" , function(){
        $(".app-search").css("display" , "block");
    });
    
    $(document).on("click" , ".ti-close" , function(){
        $(".app-search").css("display" , "none");
    });
    $(document).on("click" , ".siteMapDiv" , function(){
        $(".siteMapContentDiv").toggleClass("hidden");
        $(".fa.fa-angle-down").toggleClass("rotate");
    });
    $(document).on("click", ".backToTopDiv", function() {
        
        $('html, body').animate({scrollTop : 0},800);
    });
    $(".owl-carousel").carousel({

       
  });
  if ($(window).width() < 768) {

    $(document).on("click", ".menuBar", function() {
      
       $(".leftBarMenu").css("display" , "block");
       $(".leftBarMenu").css("width" , "100%");
       $(".leftBarMenu").css("top" , "120px");
    
    });
    $(document).on("click", ".closeIconNew", function() {
       
       $(".leftBarMenu").css("display" , "none");
    
    
    });
}
else{
    $(".leftBarMenu").css("top" , "40px");
}
  $(window).resize(function() {
    if ($(window).width() < 768) {
        $(document).on("click", ".menuBar", function() {
            
           $(".leftBarMenu").css("display" , "block");
           $(".leftBarMenu").css("width" , "100%");
           $(".leftBarMenu").css("top" , "120px");
        
        });
    }
   else {
      
   }
  });
  if(window.width < 768){
      
   
}
});



