let jwt = require('jsonwebtoken');

module.exports = options => {
    return async function permission(ctx, next) {
        next()
        if (ctx.url.indexOf('login') == 1) {
            await next();
        }else{
            jwt.verify(ctx.header.token, 'user', function(err, head) {
                jwt.verify(ctx.session.user.token, 'user',async function(err, sess) {
                    if (head.name == sess.name && sess.pass == sess.pass) {
                        await next();
                    }else{
                        ctx.status = 401;
                        ctx.body={
                            status:401,
                            message: '登录超时，请重新登录'
                        }
                    }
                });
            });
        }

    };
};

