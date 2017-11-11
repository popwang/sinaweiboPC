$().extend({size: function(){return this.elements.length;}})
$(function () {

    var oBtns = $(".UG_slider").find(".dot_box").find("a");
    var oUl = $(".UG_slider_ul");
    var iNow = 0;
    var timer = null;
    oBtns.eq(iNow).css("background","#fa7d3c");
    timer = setInterval(timerInner, 4000);
    function timerInner(){
        oBtns.css("background","#FFF");
        iNow++;
        tab();
    }
    function tab(){
        oUl.animate({left: iNow * -660},200, function(){
            if(iNow == oBtns.size()){
                iNow = 0;
                oUl.css("left", "0px");
                oBtns.eq(iNow).css("background","#fa7d3c");
            }
        });
        oBtns.eq(iNow).css("background","#fa7d3c");
    }
    oBtns.click(function(){
        oBtns.css("background","#FFF");
        $(this).css("background","#fa7d3c");
        iNow = $(this).index();
        tab();
    })
    $(".body-images-bg").hover(function(){
        clearInterval(timer);
    }, function(){
        timer = setInterval(timerInner, 4000);
    })




    $(window).scroll(function () {
     if($(window).scrollTop() <= 15){
         $(".w_main_nav").css("top","66px");
         $(".w_host_top").css("box-shadow"," 0 0 1px 0px rgba(0,0,0,0.15)");
         $(".w_host_top").css("background","#fff");
         $("#base_scrollToTop").css("display","none");

     }else if($(window).scrollTop() > 15){
         $(".w_main_nav").css("top","50px");
         $(".w_host_top").css("box-shadow","0 0 1px 0px rgba(0,0,0,0.3), 0 0 6px 2px rgba(0,0,0,0.15)");
         $(".w_host_top").css("background","rgba(255,255,255,0.94)");
         $("#base_scrollToTop").css("display","block");

     }

     if($(window).scrollTop() <= 340){
         $(".UG_tips").css({"position":"relative","width":"100%","left":"0","top":"0"})

     }else if($(window).scrollTop() > 340){

     $(".UG_tips").css({"position":"fixed","left":"48%","top":"50px","z-index":"9998","width":"208px"});
     }


 })

    $("#base_scrollToTop").click(function () {
        $(window).scrollTop(0);
    })

    $("#base_reload").click(function () {
        location.reload()
    })
    $(".ficon_close").click(function () {

        $(".UG_tips").css("display","none");
    })

    var tabClicktimes = 0;
    $(".tab-b").click(function () {
        $(".tab-a").css({"color":"#808080","border-bottom":"3px solid rgba(0,0,0,0)"});
        $(".tab-b").css({"color":"#000","border-bottom":"3px solid #fa7d3c"});
        $(".w_login_form").css("display","none");
        $(".login_content").css("display","block");
        $(".tab-c").removeClass("tab-d");
        tabClicktimes =0;

    })
    $(".tab-a").click(function () {
        $(".tab-b").css({"color":"#808080","border-bottom":"3px solid rgba(0,0,0,0)"});
        $(".tab-a").css({"color":"#000","border-bottom":"3px solid #fa7d3c"});
        $(".w_login_form").css("display","block");
        $(".login_content").css("display","none");
        $(".tab-c").removeClass("tab-d");
        tabClicktimes = 0;
    })



    $(".tab-c").click(function () {
        tabClicktimes ++;
        if(tabClicktimes % 2 != 0){
            $(".tab-c").addClass("tab-d");
            $(".tab-a,.tab-b").css({"color":"#808080","border-bottom":"3px solid rgba(0,0,0,0)"});
            $(".w_login_form,.phone,.msgInfo").css("display","block");
            $(".login_content,.username,.password").css("display","none");

        }else if(tabClicktimes % 2 == 0) {
            $(".tab-c").removeClass("tab-d");
            $(".w_login_form,.phone,.msgInfo").css("display","none");
            $(".login_content,.username,.password").css("display","block");
            $(".tab-b").css({"color":"#000","border-bottom":"3px solid #fa7d3c"});
        }

    })

    $(".login_content img").hover(function () {
        $(".login_content_pl").css("display","block");
    },function () {
        $(".login_content_pl").css("display","none");
    })
    /*$.ajax({
        url:"http://10.30.151.93/HIMAN/message/hotAnalysis",
        dataType:"json",
        type:"post",
        success:function(data){
            console.log(data);
        }
    })*/
    $(".W_btn_a").click(function(){
        $.ajax({
        url:"/HIMAN/login",
        dataType:"json",
        data:$(".login_post").serialize(),
        type:"post",
        success:function(data){
        	alert(data.msg);
            location.herf = "index.jsp"
        }
    })
})








})