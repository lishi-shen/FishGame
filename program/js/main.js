
// const canvas = wx.createCanvas();
// const context = canvas.getContext('2d');

export default class Main{
  
  constructor(){
    
  this.login()
  }

  login(){
    wx.cloud.callFunction({
      name: 'add',
      success: res => {
        GameGlobal.openid = res.result.openid;
        console.log(GameGlobal.openid);
        wx.cloud.callFunction({
          name: 'getdata',
          data:{
            _openid:GameGlobal.openid
          },
          success: res => {
            if(res.result.data.length === 0){
              console.log('现在要调用云函数创建该用户的数据。')
              wx.cloud.callFunction({
                name:'adddata',
                data:{
                  _openid:GameGlobal.openid
                }
              })
            }else{
              console.log('数据库里已经存在这个用户，他的openid是:' + res.result.data[0]._openid);
              console.log(res);
            }    
          },
          fail: err => { 
          }
        })
      }
    })
  }

}
