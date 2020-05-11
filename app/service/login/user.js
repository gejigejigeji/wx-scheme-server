const Service = require('egg').Service;

class user extends Service {
    async findUser(data) {
        const user = await this.app.model.User.findAll({
            where:{
                username:data.username,
                password:data.password
            },
            attributes:['username','password']
        }).then(res => {
            return res;
        }).catch(err => {
            return {err};
        });
        return user;
    }

    async wxLogin(openid) {
        return this.app.model.User.findOne({
            where: {
                openid: openid
            }
        }).then(res => {
            if (res == null) {
                return this.app.model.User.create({
                    openid: openid,
                }).then(cre=>{
                   return this.app.model.User.findOne({
                        where:{openid:openid}
                    }).then(rul=>{
                        return Promise.resolve({
                            ...rul
                        })
                    })
                })
            }else{
                return Promise.resolve({
                    ...res
                })
            }
        });



    }

}
module.exports = user;
