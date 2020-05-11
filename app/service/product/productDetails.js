const Service = require('egg').Service;
const uuidv1 = require('uuid/v1');

class productDetails extends Service {

    async getProductDetailsList(data) {
        return this.app.model.ProductDetails.findAll().then(res=>{
            return Promise.resolve({
                status:200,
                res
            })
        }).catch(err=>{
            return Promise.reject(err)
        })
    }

    async createDetails(data) {
        return this.app.model.ProductDetails.update({
            details: data.details,
            master: data.master,
        }, {
            where: {
                productListId: data.id
            },
        }).then(res => {
            return this.app.model.ProductStyle.destroy({
                where: {
                    productListId: 1
                },
                raw:true
            }).then((process) => {
                return this.app.model.ProductStyle.bulkCreate(data.style).then(rul=>{
                    return Promise.resolve({
                        ...rul,
                        status:200
                    })
                })
            });
        });

    }

    async showProductDetails(id) {
        return this.app.model.ProductDetails.findOne({
            where: {
                productListId: id,
            },
        }).then(res=>{
            const productDetailId = res.dataValues.id;
            return this.app.model.ProductStyle.findAll({
                where:{
                    productDetailId:productDetailId
                }
            }).then(styles=>{
                return Promise.resolve({
                    status:200,
                    ...res.dataValues,
                    productStyle:styles,
                })
            })

        }).catch(err=>{
            return Promise.reject(err)
        })
    }

}
module.exports = productDetails;
