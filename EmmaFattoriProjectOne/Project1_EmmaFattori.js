$(function(){
        $('form').on('submit', function(e) {
            e.preventDefault();

            $('.happyClient').addClass('hide');
            $('.mediumClient').addClass('hide');
            $('.madClient').addClass('hide');
            
          
            
            const inputItem1 = $('#input1').val();
            const inputItem2 = parseInt($('#input2').val());
            const inputItem3 = parseInt($('#input3').val());
            const inputItem4 = $('#input4').val();
       
            if(inputItem2 > inputItem3){
                $('.happyClient').removeClass('hide')
                $('.hap1').after(inputItem1)
                $('.hap2').after(inputItem4)
               
              

                } else if(inputItem2 < inputItem3){
                $('.madClient').removeClass('hide')
                $('.mad1').after(inputItem1)
                $('.mad2').after(inputItem4);


            } else {
                $('.mediumClient').removeClass('hide')
                $('.med1').after(inputItem1)
                $('.med2').after(inputItem4);
            }
            
        });

        $('.reset').on('click', function(){
            $('.happyClient').addClass('hide');
            $('.mediumClient').addClass('hide');
            $('.madClient').addClass('hide');
         

        }); 

    });





