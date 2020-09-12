$(function(){



    // 注册按钮
   $("#link_reg").on("click",function(){

    $('.login-box').hide()
    $('.reg-box').show()
    console.log(111);
   })


       // 注登陆按钮
    $("#link_login").on("click",function(){

    $('.login-box').show();
    $('.reg-box').hide();
        console.log(222);
    })


})