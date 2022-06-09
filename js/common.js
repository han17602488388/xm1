/**
 * 实现顶部下拉菜单效果
 * @type {[type]}
 */


 window.addEventListener("load",function(){
    var li1 = document.getElementById("li1");
   
    // var ii1=document.getElementById("icon-jiantou_liebiaozhankai_o")

    // ii1.onmouseover = function(){
    //   //把类名改成 toggeli on
    //   this.className = "iconfont icon-jiantou_liebiaoshouqi_o";
      
    // }
    // ii1.onmouseout = function(){
    //   //把类名改成 toggeli on
    //   this.className = "iconfont icon-jiantou_liebiaozhankai_o";
      
    // }
    

    li1.onmouseover = function(){
      //把类名改成 toggeli on
      this.className = "toggleli on";
      
    }
    
    li1.onmouseout = function(){
      //把on去掉
      this.className = "toggleli";
    }
  
    var li2 = document.getElementById("li2");
    li2.onmouseover = function(){
      //把类名改成 toggeli on
      this.className = "toggleli on";
    }
    li2.onmouseout = function(){
      //把on去掉
      this.className = "toggleli";
    }
    var li3 = document.getElementById("li3");
    li3.onmouseover = function(){
      //把类名改成 toggeli on
      this.className = "toggleli on";
    }
    li3.onmouseout = function(){
      //把on去掉
      this.className = "toggleli";
    }
    var li4 = document.getElementById("li4");
    li4.onmouseover = function(){
      //把类名改成 toggeli on
      this.className = "toggleli on";
    }
    li4.onmouseout = function(){
      //把on去掉
      this.className = "toggleli";
    }
  });
  