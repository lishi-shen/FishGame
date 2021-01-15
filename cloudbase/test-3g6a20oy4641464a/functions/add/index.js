// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env:'test-3g6a20oy4641464a'
})

const db = cloud.database();
// 云函数入口函数
exports.main = async (env, context) => {
  const wxContext = cloud.getWXContext();
  const openid = wxContext.OPENID;
  return {
    env,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}