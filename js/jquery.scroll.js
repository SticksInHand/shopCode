/**
 * Created by M.Jin on 14-7-10.
 */
//创建一个闭包
(function($){
    //插件定义
    $.fn.imgScroll = function(options){
        //传入配置
        var opts = $.extend({}, $.fn.imgScroll.defaults,options);
        //查找页面中所有定义了轮播的类
        return this.each(function(){
            $this = $(this);
            var o = $.meta ? $.extend({},opts,$this.data()) : opts;
            $this.css({
                backgroundColor : o.background,
                color : o.foreground
            });
            var markup = $this.html();
            markup = $.fn.hilight.format(markup);
            $this.html(markup);
        });
    };
    //私有函数
    function debug($obj){
        if(window.console && window.console.log)
            window.console.log('hilight selection count:' + $obj.size());
    };
    //定义暴露format函数
    $.fn.hilight.format = function(txt){
        return '<strong>'+txt+'</strong>';
    };
    //插件的dafaults
    $.fn.imgScroll.defaults = {
        style : 'slide',
        time : 1000
    };
    //闭包结束
})(jQuery);