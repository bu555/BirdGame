function MyPipe(option){
    this.ctx = option.ctx;
    this.pipeUpImg = option.pipeUpImg;
    this.pipeDownImg = option.pipeDownImg;
    this.pipeWidth = this.pipeUpImg.width;
    this.pipeHeight = this.pipeUpImg.height;
    this.pipeDistance = 150;  //上下管子之间间距设定
    this.blank = 500;  //小鸟出来时安全距离
    this.pipeX = option.x + this.blank; //刚开始时的管子距离左侧距离
    this.speed = 2;
    this.getY();  //初始化管道Y值

}
MyPipe.prototype = {
    constructor:MyPipe,
    drawPipe:function(){
        this.pipeX -= this.speed;
        if(this.pipeX <= -this.pipeWidth*3){
            this.pipeX += this.pipeWidth*3 * 6; //六组才能将屏幕铺满
            this.getY();  //重新绘制管子时更新Y
        }
        
        this.ctx.drawImage(this.pipeUpImg,0,0,this.pipeWidth,this.pipeHeight,this.pipeX,this.pipeUpY,this.pipeWidth,this.pipeHeight);
        this.ctx.drawImage(this.pipeDownImg,0,0,this.pipeWidth,this.pipeHeight,this.pipeX,this.pipeDownY,this.pipeWidth,this.pipeHeight);
        //绘制柱子路径
        this.ctx.rect(this.pipeX,this.pipeUpY,this.pipeWidth,this.pipeHeight);
        this.ctx.rect(this.pipeX,this.pipeDownY,this.pipeWidth,this.pipeHeight);
        // this.ctx.fill();

    },
    getY:function(){
        this.pipeUpY = - (Math.random()*200+140);
        this.pipeDownY = this.pipeUpImg.height + this.pipeUpY + this.pipeDistance;
    }

}