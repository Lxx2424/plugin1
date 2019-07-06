(function($){
    $.fn.reng=function(color){
        this.css("backgroundColor",color)
    }

    $.fn.floatAnimate=function(){
        this.click(function(){
            $(this).css("position",'relative').animate({
                left:'+=250px'
            },500)
        })
    }


}(jQuery))
