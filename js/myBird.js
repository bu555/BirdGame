function MyBird(option){
    this.ctx = option.ctx;
    this.birdImg = option.birdImg;
    this.birdX = option.x;
    this.birdY = option.y;
    this.birdW = this.birdImg.width/3;
    this.birdH = this.birdImg.height;
    this.picIndex = 0;  //图片初始索引
    this.picX = 0;  //图片初始坐标
    this.picY = 0;
    this.speed = 0; //初始速度
    this.g = 0.0003;
    this.angleMax = 45;
    this.speedMax = 0.48; //摔到地上的速度

    c.onclick = function(){
        this.speed = -0,3;
    }
}
MyBird.prototype = {
    constructor:MyBird,
    drawBird:function(offsetTime){
        // 绘制小鸟 挥动翅膀  坠落  旋转

        //绘制鸟 + 挥翅膀
        if(this.picIndex>=3){
            this.picIndex = 0;
        }
        this.picX = this.birdW*this.picIndex;

        //坠落
            /*重力加速度公式
            * 移动距离 =  速度 * 时间间隔 + g *时间间隔 * 时间间隔  / 2   -----相同时间内移动距离会随着时间增加而增加
            * 速度 = 初速度 + g * 时间间隔*/

        var offsetY = this.speed * offsetTime + this.g *offsetTime*offsetTime /2;
        this.speed = this.speed + this.g *  offsetTime;
        this.birdY += offsetY;

        //旋转
          /*小鸟旋转角度
           此处旋转角度和下落速度同步,即:最大旋转角度/最大速度(到地上时速度) = 当前旋转角度/当前下落速度
        */
        var currentAngle = this.angleMax/this.speedMax*this.speed;
        if(currentAngle>=this.angleMax){
            currentAngle = this.angleMax;
        }
        this.ctx.save();
        this.ctx.translate(this.birdX+this.birdW/2,this.birdY+this.birdH/2);  //画布偏移要增加小鸟图片宽度一半

        this.ctx.rotate(Math.PI/180*currentAngle);
        this.ctx.drawImage(this.birdImg,this.picX,this.picY,this.birdW,this.birdH,-this.birdW/2,-this.birdH/2,this.birdW,this.birdH);
        this.ctx.restore();

        this.picIndex++;


    }
}