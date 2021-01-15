import Sprite from "../base/sprite";

const screenWidth = wx.getSystemInfoSync().windowWidth;
const screenHeight = wx.getSystemInfoSync().windowHeight;
const BG_IMG_SRC = 'https://7465-test-3g6a20oy4641464a-1304747644.tcb.qcloud.la/picture/background.png?sign=e1b657e842972fa658f4e9e96508434e&t=1610598812';
const BG_WIDTH = screenWidth;
const BG_HEIGHT = screenHeight;

export default class BackGround extends Sprite {
  constructor(context) {
    super(BG_IMG_SRC, BG_WIDTH, BG_HEIGHT);
    //this.render(context);
  }

  render(context,count) {
    context.drawImage(
      this.img,
      0,
      0,
      this.width,
      this.heigth
    )
    
    context.fillStyle = '#5F9EA0';
    context.fillRect(wx.getSystemInfoSync().windowWidth / 6, wx.getSystemInfoSync().windowHeight / 10 * 8, count, 5);
  }


}