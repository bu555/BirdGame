function Show(option){
    this.ctx = option.ctx;
    this.c = option.c;
}
Show.prototype = {
    constructor:Show,
    showTime:function(time){
        // this.ctx.beginPath;
        this.ctx.fillStyle = "rgba(0,0,0,.5)";
        this.ctx.fillRect(0,0,this.c.width,30);
        var hour = parseInt(time/1000/3600);
        var minute = parseInt(time/1000%3600/60);
        var second = parseInt(time/1000%60);
        hour = hour<10? "0"+hour : hour;
        minute = minute<10 ? "0"+minute : minute;
        second = second<10 ? "0"+second : second;
    
        var txt = "TIME:"+hour+":"+minute+":"+second;
        this.ctx.font = "600 18px 微软雅黑";
        this.ctx.fillStyle = "red";
        var fontW = ctx.measureText(txt).width;
        this.ctx.fillText(txt,c.width/2-fontW/2,20);
        this.ctx.font = "13px 微软雅黑";
        this.ctx.fillText("等级 level 1",11,20);
    },
    showGameOver:function(){
        console.log(9999999);
        var txt = "Game over";
        this.ctx.font = "700 45px 微软雅黑";
        this.ctx.fillStyle = "red";
        var fontW = this.ctx.measureText(txt).width;
        this.ctx.fillText(txt,this.c.width/2-fontW/2,this.c.height/2-45);
        // console.log(txt+"---"+this.c.width/2-fontW/2+"---"+this.c.height/2-45);
        
    }
    
}