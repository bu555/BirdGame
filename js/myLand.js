function MyLand(option){
    this.ctx = option.ctx;
    this.landImg = option.landImg;
    this.landX = option.x;
    this.landY = option.y;
    this.width = this.landImg.width;
    this.height = this.landImg.height;
    this.speed = 2;
}
MyLand.prototype = {
    constructor:MyLand,
    drawLand:function(){
        this.landX -=this.speed;
        if(this.landX <= -this.width){
            this.landX += this.width*4;
        }
        this.ctx.drawImage(this.landImg,this.landX,this.landY,this.width,this.height);
        // console.log(this.landImg+"<>"+this.landX+"<>"+this.landY+"<>"+this.width+"<>"+this.height)
           
    }
}