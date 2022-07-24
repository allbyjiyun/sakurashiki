 


$(function(){
    $('.nexttri').click(function(){
        $.scrollTo('.whatis')
    })

})




 


  $(function(){
    $('.owl-carousel').owlCarousel({
        items:1,
        margin: 10,
        nav: true,
        // 再用css調位置
        dots: true,
        autoplay: false,
      
    });
})


$(function(){
    $(".delete").click(function(){
        $(this).closest(".product").remove();
    })
   
})
$(function(){
   
    $('.btn-plus').click(function(){
        quantity = $(this).closest('.input-group').find('.quantity').val();
        quantity++;
        // 自己加一再丟回去
        $(this).closest('.input-group').find('.quantity').val(quantity);
    })
    $('.btn-minus').click(function(){
        quantity = $(this).closest('.input-group').find('.quantity').val();
        if(quantity<=1) {
            quantity = 1;
            $(this).closest('.input-group').find('.quantity').val(quantity);
        } else {
            quantity--;
            $(this).closest('.input-group').find('.quantity').val(quantity);
        }
    })
})