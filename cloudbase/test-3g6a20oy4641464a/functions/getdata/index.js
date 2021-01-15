// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env:'test-3g6a20oy4641464a'
})

const db = cloud.database();
// 云函数入口函数
exports.main = async (env, context) => {
  return await db.collection('fishuser').where({
    _openid :env._openid
  }).get()
}