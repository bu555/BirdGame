function MySky(option){
    this.skyImg = option.skyImg;
    this.ctx = option.ctx;
    this.x = option.x;
    this.width = option.skyImg.width;
    this.height = option.skyImg.height;
    this.skySpeed = 2;
    
}
MySky.prototype = {
    constructor:MySky,
    //绘图片  移动图片
    drawSky:function(){
        this.x -= this.skySpeed;
        if(this.x <= -this.width){
            this.x += this.width*2;
        }
        ctx.drawImage(this.skyImg,this.x,0,this.width,this.height)
    }
}