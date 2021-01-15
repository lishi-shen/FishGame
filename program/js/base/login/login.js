

wx.cloud.init({
  env:'test-3g6a20oy4641464a'
});
const db = wx.cloud.database();

wx.cloud.callFunction({
  name: 'add',
  success: function(res) {
    console.log(res.result) 
  },
  fail: console.error
})

export default class Login{
  constructor(){
    
  }

}
