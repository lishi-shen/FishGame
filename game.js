const {
  default: Main
} = require("./program/js/main");
//import 'program/js/libs/weapp-adapter'
const {
  default: BackGround
} = require("./program/js/runtime/background");
wx.cloud.init({
  env: 'test-3g6a20oy4641464a'
});

//new Main()

const canvas = wx.createCanvas();
const context = canvas.getContext('2d');
var bg = new BackGround();
var count = 0;

function render() {
  count = count + 5;
  context.clearRect(0, 0, wx.getSystemInfoSync().windowWidth, wx.getSystemInfoSync().windowHeight)
  bg.render(context, count);
  var anid = requestAnimationFrame(render);
  if (count > wx.getSystemInfoSync().windowWidth / 6 * 4) {
    cancelAnimationFrame(anid);
  }
}

requestAnimationFrame(render)
// bg.img.onload = function(){

// }