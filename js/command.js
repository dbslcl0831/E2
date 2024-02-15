$(function(){
    //메뉴
    
    $(".main>li").mouseover(function(){
        $(this).children(".sub").stop().slideDown();
    })
    $(".main>li").mouseout(function(){
        $(".sub").stop().slideUp();
    })
    //슬라이드

    var n =0;
    setInterval(function(){
        if(n == 2){
            n=0
        }else{
            n++
        }
        console.log("n:" ,n)

        pos = n * (-850)+"px";
        $(".top_move").animate({top:pos},500)
    },3000)
    //팝업

    $(".pop").hide();
    $(".p_click").click(function(){
        $(".pop").show();
    })
    $(".close").click(function(){
        $(".pop").hide();
    })
})//j