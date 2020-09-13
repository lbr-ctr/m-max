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

    var form = layui.form
    var layer = layui.layer
    // 自定义表达验证
    form.verify({

        //我们既支持上述函数式的方式，也支持下述数组的形式
        //数组的两个值分别代表：[正则匹配、匹配不符时的提示文字]
        pass: [
          /[0-9\.\-]{6,12}$/
          ,'密码必须6到12位，且不能出现空格'
        ] ,


              // 通过形参拿到的是确认密码框中的内容
                // 还需要拿到密码框中的内容
            // 然后进行一次等于的判断
        // 如果判断失败,则return一个提示消息即可;


        psw:function(vlue){

            // 用属性选择器 选择密码框的
            var pwd = $('.reg-box [name=password]').val();

            if(vlue!==pwd) return "两次密码不一致";


        }
      });  


      $('#form_reg').on('submit', function(e) {
        e.preventDefault()
        var data = {
            username: $('#form_reg [name = username]').val(),
            password: $('#form_reg [name = password]').val()
        }

        $.ajax({
            url: "/api/reguser",
            type: "POST",
            data: data,
            success: function(res) {
                console.log(data);
                if (res.status != 0) {
                    return alert("注册失败")
                } else {
                    var layer = layui.layer;
                    layer.msg('成功');
                    $("#link_login").click();
                }
            }
        })
    })

    $("#form_login").on("submit",function(e){

        e.preventDefault();

        $.ajax({
            url: "/api/login",
            type: "POST",
            data: $(this).serialize(),
            success: function(res) {
                console.log(res);
                if (res.status != 0) {
                    return layer.msg('失败');
                }
                layer.msg("成功111");
                console.log(res.token);
                localStorage.setItem("token",res.token)
                location.href = '/m-index.html';
            }
        })    


    })

})

