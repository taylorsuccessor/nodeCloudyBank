/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/*____________________________________________________functions*/
/*_________________________float_message_*/
function close_float_message(i_node){
    i_node.parent().parent().hide(100);
}
/*_____________________END____float_message_*/

/*__________________________________________________END__functions*/

/*__________________________________initial_set*/
$(document).ready(function(){ 
$('.close_i').attr('onClick','close_float_message($(this));'); 
});//ready
/*____________________________END______initial_set*/


/*______________________________________popup*/

function hidePopup(){
    $('.popupWindow').hide(200);

    $('body').css('overflow','auto');
}


function showPopup(dara){
    $('.popupWindow').css({'top':$('body').scrollTop()});
    $('.popupWindow').show(200);

    $('body').css('overflow','hidden');
}


$(document).ready(function(){
    $('.blackShadowDiv , .popupHeader .fa-times').click(function(){hidePopup();});

    hidePopup();
});


/*___________________________________END___popup*/



/*___________________________________________search*/
$(document).ready(function(){
$('.searchIcon').click(function(){$('#searchForm').toggleClass('mini');
//$('.searchIcon').click(function(){alert(4);$('#searchForm').addClass('mini');});

});




    /*________________________________________check__options*/

    function activeCheckedInput(searchOptionsContainer){

        searchOptionsContainer.find('label').each(function(){

            if($(this).find('input').prop('checked')){
                $(this).addClass('active');

            }else{
                $(this).removeClass('active');
            }
        });

    }


    $('.searchOptionsContainer label').click(function(){


        if($(this).find('input:checked').attr('value') == '-1'){
            $(this).parent().parent().find('input').prop('checked',false);
            $(this).find('input').prop('checked',true);
        }else if($(this).find('input').attr('value') != '-1'){
            $(this).parent().parent().find('input[value="-1"]').prop('checked',false);
        }
        activeCheckedInput( $(this).parent().parent());
    });

    $('.searchOptionsContainer').each(function(){


        activeCheckedInput( $(this));
    });

    /*__________________________________END______check__options*/


});
/*_______________________________________END____search*/


/*__________________________________________goods________*/

function showMoreOffers(buttonNode){
    var parent=$(buttonNode).parent();
    parent.find('.hiddenRow').show();
    parent.find(".moreOffersLine").hide();

}
/*_____________________________________END_____goods________*/