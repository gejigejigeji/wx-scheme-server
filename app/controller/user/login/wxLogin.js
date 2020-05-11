const Controller = require('egg').Controller;
let jwt = require('jsonwebtoken');

class wxLogin extends Controller {
    async index() {
        const { ctx } = this;
        ctx.body='index'
    }
       // POST	/posts/
    async create() {
        const { ctx } = this;
        const res = ctx.request.body;
        let token = '';
        const appid = 'wxc3d6cb133088e180';
        const secret = '465bfe651200592d1066512273223e17';
        const js_code = res.code;
        let url=`https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${secret}&js_code=${js_code}&grant_type=authorization_code`
        const rul = await ctx.curl (url);
        if (rul.res.status == 200) {
            const res = JSON.parse(rul.data);

            ctx.body = res;
            let userInfo=await ctx.service.login.user.wxLogin(res.openid);
            const strify = {
                name: js_code,
                pass: js_code,
            };
            token = jwt.sign(strify, 'user');
            ctx.session.wxUser = {
                ...strify,
                openid:res.openid,
                token: token
            };
            ctx.session.maxAge = 24 * 3600 * 1000;
            ctx.session.httpOnly = false;
            ctx.status = 200;

            ctx.body = {
                token,
                userInfo:{
                    id:userInfo.dataValues.id,
                    region:userInfo.dataValues.region,
                    address:userInfo.dataValues.local,
                    name:userInfo.dataValues.nickName,
                    phone:userInfo.dataValues.phone,
                    openid:res.openid,
                }
            };
        }

    }
  //  GET	/posts/:id
    async show() {
        const { ctx } = this;

    }
 //  PUT	/posts/:id
    async updata() {
        const { ctx } = this;

    }
}


module.exports = wxLogin;
