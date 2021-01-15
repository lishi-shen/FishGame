export default class Sprite{
  constructor(imgSrc = '',width = 0,heigth = 0,x = 0,y = 0){
    this.img = wx.createImage();
    this .img.src = imgSrc;
    
    this.width = width;
    this.heigth = heigth;

    this.x = x;
    this.y = y;

    this.visible = true;
  }

  drawToCanvas(context){
    if(!this.visible){
      return
    }
    context.drawImage(
      this.img,
      this.x,
      this.y,
      this.width,
      this.heigth
      )

  }



}