let jwt = require('jsonwebtoken');

const Controller = require('egg').Controller;
class login extends Controller {
    async index() {
        const { ctx } = this;
        let rul,token;
        rul = await ctx.service.login.user.findUser(ctx.query);

        if (!ctx.empty(rul)) {
            const strify = {
                name: rul[0].username,
                pass: rul[0].password,
            };
            token = jwt.sign(strify, 'user');
            ctx.session.user = {
                ...strify,
                openid:123,
                token: token
            };
            ctx.session.maxAge = 24 * 3600 * 1000;
            rul= token
        }else{
            rul = null;
        }
        ctx.body = {
            data:{
                token: rul
            },
            ...ctx.setState(rul)
        };
    }

    async create() {

    }

    async show() {

    }

    async updata() {

    }
}


module.exports = login;
