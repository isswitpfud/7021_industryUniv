/* eslint-disable */

$(function(){

    // nav메뉴 내리기
    $("li.mainLi").mouseover(function(){
        $("ul.subMenu .subLi").stop().slideDown(500);
    });

    $("li.mainLi").mouseover(function(){
        $("#navBg").stop().slideDown(500);
    });
    
    // nav메뉴 올리기
    $("li.mainLi").mouseout(function(){
        $("ul.subMenu .subLi").stop().slideUp(200);
    });

    $("#mainMenu > li.mainLi").mouseout(function(){
        $("#navBg").stop().slideUp(200);
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