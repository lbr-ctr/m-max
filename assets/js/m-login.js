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

    自定义表达验证
    form.verify({

        //我们既支持上述函数式的方式，也支持下述数组的形式
        //数组的两个值分别代表：[正则匹配、匹配不符时的提示文字]
        pass: [
          /[0-9\.\-]{6,12}$/
          ,'密码必须6到12位，且不能出现空格'
        ] 
      });  


})