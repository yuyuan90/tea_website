$(document).ready(function(){
    
    //tea category modal
    $('.tea button').click(function(){
        
        $('.modal-body h4').text('');
        $('.modal-body small').text('');
        $('.modal-des').text('');
        $('.modal-body img').removeClass('small-pic');
        
        if($(this).hasClass('tea_class1_btn')){
            $('.modal-body img').attr('src','../imgs/tea_package11.jpg');
           $('.modal-body h4').text('大龙湫 ▪ 雁荡毛峰');
            $('.modal-body small').text('雁荡精华 有机绿茶');
            $('.modal-body .modal-des').html('传承一千六百年雁荡毛峰精髓。原料采自海拔600多米的雁荡山大龙湫高山有机茶区，在阳光雨雾滋润下，汲取雁荡山亿年火化岩之精华，融合非物质文化加工技艺；<br><br><span class="modal_title_color">品质特征：</span><br>外形秀长紧结，色泽翠绿，芽毫隐露；干茶带有海苔鲜香；汤色明亮；香气高、幽；叶底自然舒展；滋味鲜爽、回甘持久。大龙湫茶有一饮加“三闻”之说。一闻迎面清新，再闻香气悠长，三闻茶香四溢；头泡滋味鲜爽，二、三泡醇厚，四、五泡仍有感人茶韵。细细品味，渐觉舒身自在、轻盈畅快。<br>');
    }else if($(this).hasClass('tea_class2_btn')){
        $('.modal-body img').attr('src','../imgs/tea_package21.jpg');
        $('.modal-body h4').text('大龙湫 ▪ 有机红茶');
        $('.modal-body small').text('雁荡精华 有机红茶');
        $('.modal-body .modal-des').html('大龙湫精心研发，茶品具温和之性，原料采自海拔600多米的雁荡山大龙湫高山有机茶园，合理利用春茶，融合传统红茶的工艺精制而成，具有雁荡山地域亿年火化岩之韵味的一款红茶,适宜经常饮用<br><br><span class="modal_title_color">特点有四：</span><br>1) 干茶色泽乌褐润泽，外形粗壮紧实，自然卷曲；<br>2) 香气清幽持久，具有雁荡山茶特有清甜香和火化岩韵；<br>3) 汤色金黄明亮或澄红的明亮；<br>4) 滋味清醇柔绵，饮后生津明显，齿颊留香。<br>');
             
             }else if($(this).hasClass('tea_class3_btn')){
                 $('.modal-body img').attr('src','../imgs/tea_longjing.png');
                 $('.modal-body img').addClass('small-pic');
                $('.modal-body h4').text('大龙湫 ▪ 精品龙井');
                 $('.modal-body small').text('雁荡精华 有机龙井');
                 $('.modal-body .modal-des').html('龙井茶已有千年历史，二十世纪初，茶品因产地、炒制方法的差异，而有“狮、龙、云、虎、梅”称呼，如“狮字龙井”。后又改为“狮、龙、梅”三种品类，“狮字龙井”或“狮峰龙井”产于西湖乡龙井村；“梅字龙井”或“梅均龙井”产于西湖乡梅家坞、梵村、云栖、外大桥一带。“龙字龙井”或“西湖龙井”则产于西湖乡其余地方。<br><br><span class="modal_title_color">外形特点：</span><br>龙井茶品四绝为“色绿、香郁、味甘、形美”是由于色泽翠绿，香气浓郁，甘醇爽口，形如雀舌，茶叶为一芽一叶或二叶，叶扁形且细，宽度条形整齐，颜色为绿黄。<br>');
                 
             }else if($(this).hasClass('tea_class4_btn')){
                 $('.modal-body img').attr('src','../imgs/tea_liuan.png');
                 $('.modal-body img').addClass('small-pic');
             $('.modal-body h4').text('大龙湫 ▪ 六安瓜片');
                 $('.modal-body small').text('雁荡精华 有机瓜片');
                 $('.modal-body .modal-des').html('六安产茶历史久远，，明代许次纾在茶疏中提到“天下名山，必产灵草。江南地暖，故独有茶。大江以北，则称六安”。为中国十大名茶之一。大龙湫茶叶精选自六安瓜片非物质文化遗产传承人手艺，严格甄选，为广大客户提供真正的品质好茶。<br><br><span class="modal_title_color">外形特点：</span><br>1) 六安瓜片外形似瓜子，色泽翠绿，香气清高，味鲜甘美，耐冲泡。片茶指全由叶片制成的不带嫩芽和嫩茎的茶叶品种。沏茶时雾气蒸腾，清香四溢，亦有“齐山云雾瓜片”之称。');
                 
             }else if($(this).hasClass('tea_class5_btn')){
                 $('.modal-body img').attr('src','../imgs/tea_biluo.png');
                 $('.modal-body img').addClass('small-pic');
             $('.modal-body h4').text('大龙湫 ▪ 碧螺春');
                 $('.modal-body small').text('雁荡精华 有机碧螺');
                 $('.modal-body .modal-des').html('碧螺春，中国十大名茶之一。碧螺春茶从春分开采，至谷雨结束，采摘的茶叶为一芽一叶，对采摘下来的芽叶还要进行拣剔，去除鱼叶、老叶和过长的茎梗。一般是清晨采摘，中午前后拣剔茶片，下午至晚上炒茶。<br><br><span class="modal_title_color">外形特点：</span><br>碧螺春茶条索紧结，卷曲成螺，白毫密被，银绿隐翠。号称“三鲜”即香鲜浓、味道醇、色鲜艳，花香果味，沁人心脾，别具一番风韵。清李慈铭（莼客）《水调歌头》词曰：“时有惠风徐至，赢得嫩香盈抱，绿唾上衣妍。<br>');
                 
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
            $(this).next('h3').css('color', '#ad2e2d');
        }, 
                          
        function(){
            $(this).find('.caption').slideUp(250); 
            $(this).next('h3').css('color', 'rgb(105, 124, 122)');
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
        
    
      
 


    
    
    




    
  


 
   