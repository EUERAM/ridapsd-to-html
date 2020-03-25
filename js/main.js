$(document).ready(function(){
    console.log('READY!!');
    
    //Control when user clicks burguer
    $('.burguer').click(function(){
        console.log('menú click'); 
        //Slide down/up menu
        //$('header nav').slideToggle('hide');
        
        //Slide right/left menu
        $('header nav').toggleClass('hide');
    });
});