const Service = require('egg').Service;
const uuidv1 = require('uuid/v1');

class product extends Service {
    async getProductList(uid) {
        let {ctx} =this
       return this.app.model.ProductList.findAll().then(res=>{
            return Promise.resolve({
                status:200,
                res
            })
        }).catch(err=>{
           return Promise.reject()
        })
    }

    //添加产品
    async createProduct(data) {
        return this.app.model.ProductList.create({
            title:data.title,
            categoryId:Number(data.id),
            imgDir:`PDD${uuidv1()}`,
            coverDir:`COVER${uuidv1()}`,
            price:data.price,
            extra:data.extra,
            tips:data.tips,
            sendAddress:data.sendAddress,
            productDetail:{
                title:data.title,
                price:data.price,
                productListId: data.id
            }
        },{
            include:[this.app.model.ProductDetails]
        }).then(res=>{
            return Promise.resolve({
                status:200,
                res
            })
        }).catch(err=>{
            return Promise.reject(err)
        })
    }

    async updateCoverImg(data) {
        this.app.model.ProductDetails.update({
            cover: data.src
        }, {
            where: {
                productListId: data.id
            }
        }).then(res=>{
            console.log(res)
        })
        return this.app.model.ProductList.update({
            coverSrc:data.src
        },{
            where:{
                id:data.id
            }
        }).then(res=>{
            return Promise.resolve({
                status:200,
                res
            })
        }).catch(err=>{
            return Promise.reject(err)
        })
    }


}
module.exports = product;
