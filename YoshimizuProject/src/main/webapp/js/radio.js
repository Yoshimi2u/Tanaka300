const checkList = ['010','020','030'];
$(function(){
 $('#check').on('click',function(){
    checkList.forEach(function(checkItem){
        console.log($("input[name='"+ checkItem +"']:checked").val());
        });
    });
});