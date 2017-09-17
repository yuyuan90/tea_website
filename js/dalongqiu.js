$(document).ready(function(){
    
    //tea category modal
    $('.tea button').click(function(){
        if($(this).siblings('p').text()=='大龙湫 ▪ 有机绿茶'){
           $('.modal-body h4').text('大龙湫 ▪ 有机绿茶');
            $('.modal-body small').text('雁荡精华 有机绿茶');
            $('.modal-body .modal-des').html('传承一千六百年雁荡毛峰精髓。原料采自海拔600多米的雁荡山大龙湫高山有机茶区，在阳光雨雾滋润下，汲取雁荡山亿年火化岩之精华，融合非物质文化加工技艺；<br><br><span class="modal_title_color">品质特征：</span><br>外形秀长紧结，色泽翠绿，芽毫隐露；干茶带有海苔鲜香；汤色明亮；香气高、幽；叶底自然舒展；滋味鲜爽、回甘持久。大龙湫茶有一饮加“三闻”之说。一闻迎面清新，再闻香气悠长，三闻茶香四溢；头泡滋味鲜爽，二、三泡醇厚，四、五泡仍有感人茶韵。细细品味，渐觉舒身自在、轻盈畅快。<br><br><span class="modal_title_color">雁荡毛峰冲泡方法：</span><br>适宜采用透明洁净的玻璃杯冲泡。温杯洁具后，投茶3-5克（可按个人口味增减），80±5℃开水先浸润泡10秒，再采用细水慢流的冲泡方式冲泡20-30秒后，即可出汤品饮。');
    }else if($(this).siblings('p').text()=='大龙湫 ▪ 有机红茶'){
        $('.modal-body h4').text('大龙湫 ▪ 有机红茶');
        $('.modal-body small').text('雁荡精华 有机红茶');
        $('.modal-body .modal-des').html('大龙湫精心研发，茶品具温和之性，原料采自海拔600多米的雁荡山大龙湫高山有机茶园，合理利用春茶，融合传统红茶的工艺精制而成，具有雁荡山地域亿年火化岩之韵味的一款红茶,适宜经常饮用<br><br><span class="modal_title_color">特点有四：</span><br>1) 干茶色泽乌褐润泽，外形粗壮紧实，自然卷曲；<br>2) 香气清幽持久，具有雁荡山茶特有清甜香和火化岩韵；<br>3) 汤色金黄明亮或澄红的明亮；<br>4) 滋味清醇柔绵，饮后生津明显，齿颊留香。<br><br><span class="modal_title_color">龙湫红茶冲泡方法：</span><br>适宜采用质地致密的陶瓷盖碗冲泡。温杯洁具后，投茶3-5克（可按个人口味增減），95℃开水细水慢流的冲泡方式冲泡 ，半开盖20—30秒后出汤，即可出汤品饮，方法适度可冲泡6-8次。');
             
             }else if($(this).siblings('p').text()=='大龙湫 ▪ 雁荡毛峰'){
             $('.modal-body h4').text('大龙湫 ▪ 雁荡毛峰');
                 $('.modal-body small').text('雁荡精华 有机毛峰');
                 
             }else if($(this).siblings('p').text()=='其他'){
             $('.modal-body h4').text('其他');
                 
             }
    });
    
    //show gradually
  $(window).scroll(function(){
    
        $('.hideme').each(function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){ $(this).animate({'opacity':'1'},1000);      
            } 
        }); 
    });
    
    
       //smooth scroll
  $("header a").on('click', function(event){
      if (this.hash !== "") {
          event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1500, function(){
        window.location.hash = hash;
      });
  };
  });
    
    
    //news slide down
    $('#news_container div.thumbnail').hover(function(){
            $(this).find('.caption').slideDown(250); 
            $(this).next('h3').css('color', '#0f2744');
        }, 
                          
        function(){
            $(this).find('.caption').slideUp(250); 
            $(this).next('h3').css('color', '#ad2e2d');
        })


        //wechat
$('a[rel=popover]').popover({
  html: true,
  trigger: 'hover',
  placement: 'right',
  content: function(){return '<img src="'+$(this).data('img') + '" />';}
    
});
    
    
   //back-to-top
    $(window).on('scroll', function(){
        if($(this).scrollTop() + $(window).height() > $(document).height() - $("#footer").height()){
            $('#back-to-top').css('visibility', 'visible');   
        }else{
            $('#back-to-top').css('visibility', 'hidden');  
        };
    });
    
    
    
    
});
        
    
      
 


    
    
    




    
  


 
   