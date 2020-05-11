const Service = require('egg').Service;

class shoppingCart extends Service {
    async getPayProduct(data,productId) {
        console.log(data)
        const Op = this.app.Sequelize.Op
        return this.app.model.ProductList.findOne({
            where:{
                id:productId
            },
            include: [{ // include关键字表示关联查询
                model: this.app.model.ProductStyle,
                as:'productStyle',
                where:{
                    id:data.styleId,
                    productListId:productId,
                    size:{
                        [Op.like]: `%${data.size}`,
                    }
                }
            }]
        }).then(res=>{
            return Promise.resolve({
                status:200,
                res
            })
        })
    }
    async createShoppingCart(data) {
        return this.app.model.ShoppingCart.create({
            ...data
        }).then(res=>{
            return Promise.resolve({
                ...res.dataValues,
                status:200
            })
        })
    }

}
module.exports = shoppingCart;