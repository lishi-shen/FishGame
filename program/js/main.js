


const canvas = wx.createCanvas();
const context = canvas.getContext('2d');
export default class Main{
  
  constructor(){
    drawbackground();
    this.drawRect(20,50);
    
   
  }
  drawRect(x,y) {
    context.fillStyle = '#1aad19';
    context.fillRect(canvas.width/2-50, 0, 100, 100);
  }
}

function  drawbackground() {
  context.fillStyle = '#FFB90F';
  context.fillRect(0,0,canvas.width,canvas.height);
  context.fillStyle = '#48D1CC';
  context.fillRect(0,canvas.height/5*3,canvas.width/7*4,canvas.height/5);

}