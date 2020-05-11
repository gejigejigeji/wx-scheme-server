const Service = require('egg').Service;

class address extends Service {
    async getAddress(data) {
        return this.app.model.Address.findAll({
            where:{
                userId:data.id
            }
        }).then(res=>{
            return Promise.resolve({
                res,
                status:200
            })
        })

    }

    async updateAddress(id,data) {
        if (data.normal==1) {
            this.app.model.User.update({
                region: data.region,
                local:data.address,
                phone:data.phone,
                nickName:data.surname+data.name,
            }, {
                where: {
                    id: data.userId
                }
            });
            await this.app.model.Address.update({
                normal: 0
            }, {
                where:{
                    userId:data.userId
                }
            });
        }
    return this.app.model.Address.update({
        address:data.address,
        normal:data.normal,
        region:data.region,
        name:data.name,
        surname:data.surname,
    },{
        where:{
            id: id
        }
    }).then(res=>{
        return this.app.model.Address.findOne({
            where: {
                id: id
            }
        }).then(rul=>{
            return Promise.resolve({
                ...rul.dataValues,
                status:200
            })
        })

    });

    }

    async createAddress(data) {
        if(data.normal==1){
            this.app.model.User.update({
                region:data.region,
                local:data.address,
                phone:data.phone,
                nickName:data.surname+data.name,
            },{
                where:{
                    id:data.id
                }
            })
            await this.app.model.Address.update({
                normal:0,

            },{
                where:{
                    userId:data.id
                }
            })
        }

        return this.app.model.Address.create({
            userId:data.id,
            address:data.address,
            normal:data.normal,
            region:data.region,
            phone:data.phone,
            name:data.name,
            surname:data.surname,
        }).then(res=>{
            return Promise.resolve({
                res,
                status:200
            })
        }).catch(err=>{
            console.log(err)
        })

    }

}
module.exports = address;
