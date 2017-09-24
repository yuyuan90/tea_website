$(document).ready(function(){
    
     //url para
 function GetQueryString(name) {
var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
var r = window.location.search.substr(1).match(reg); 
var context = "";
if (r != null)
context = r[2];
reg = null;
r = null;
return context == null || context == "" || context == "undefined" ? "" : context;
}
var q = GetQueryString("q");
    

      //ajax 
        $.ajax({
            url:'https://yuyuan90.github.io/tea_website/json/'+q+'.json',
            method:'GET',
            dataType: 'JSON',
            success: function(response){  $('.article').html(response.blog);         
        }, error: function(){
            $('.article').html('数据加载失败！');
        }});
 
});
        
    
      
 


    
    
    




    
  


 
   