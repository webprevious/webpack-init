// local.js: 个人本地环境，在 dev.js 基础上修改部分参数。
const config = require('./dev')
config.serve.port = 8070
module.exports = config