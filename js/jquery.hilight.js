/**
 * Created by M.Jin on 14-7-10.
 */
//创建一个闭包
(function($){
    //插件定义
    $.fn.hilight = function(options){
        debug(this);
        var opts = $.extend({}, $.fn.hilight.defaults,options);
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
    $.fn.hilight.defaults = {
        foreground : 'red',
        background : 'yellow'
    };
    //闭包结束
})(jquery);