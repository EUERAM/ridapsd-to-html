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
    
    $('.portfolio .filter span').click(function(){
        //console.log('Clicked', this);
        var classe = $(this).attr('class');
        console.log(classe);
        
        if (classe=='all'){
            $('.portfolio .item').show();
            $('.portfolio .filter span').removeClass('active');
            $(this).addClass('active');
        }else{
            if ($(this).hasClass('active')){
            }else{
                $('.portfolio .items .item').hide();
                $('.portfolio .filter span').removeClass('active');
                $(this).addClass('active');
                $('.portfolio .'+classe).show();
            }
        }
    });
});