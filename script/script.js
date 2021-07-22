/* eslint-disable */

$(function(){

    // nav메뉴 내리기
    $("li.mainLi, #navBg").mouseover(function(){
        $("ul.subMenu .subLi").stop().slideDown(800);
        $("#navBg").stop().slideDown(800);
    });

    // nav메뉴 올리기
    $("li.mainLi, #navBg").mouseout(function(){
        $("ul.subMenu .subLi").stop().slideUp(300);
        $("#navBg").stop().slideUp(300);
    });

    
    
    //슬라이드쇼
    setInterval(fnSlideShow, 5000);
    function fnSlideShow(){
        
        
         $("#slide").animate(
        {"margin-left":"-1200px"},
        3000,
        function(){
            $("#slide a:nth-child(1)").insertAfter("#slide a:nth-child(3)");
            
            $("#slide").css({"margin-left":"0px"});
        }
    );
    
        
    } //function fnSlideShow
    
   //레이어팝업
   $("#noticeArticle tr#noticePopup").click(function(){
        $("div#popupBg").css({"display":"block"});
   });

   $("#closeBtn").click(function(){
    $("div#popupBg").css({"display":"none"});
   });



    
}); //끝