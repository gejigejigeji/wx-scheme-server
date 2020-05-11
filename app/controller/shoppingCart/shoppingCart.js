const Controller = require('egg').Controller;
class shoppingCart extends Controller {
    async index() {
        const { ctx } = this;
        ctx.body='index'
    }
       // POST	/posts/
    async create() {
        const { ctx } = this;
        let data = ctx.request.body;
        let rul = await ctx.service.shoppingCart.shoppingCart.createShoppingCart(data);

    }
  //  GET	/posts/:id
    async show() {
        const { ctx } = this;
        const productId = ctx.params.id;
        const data = ctx.query;
        let rul=await ctx.service.shoppingCart.shoppingCart.getPayProduct(data,productId)
        ctx.status=200
        ctx.body={
            data:rul
        }
    }
 //  PUT	/posts/:id
    async update() {
        const { ctx } = this;

    }
}


module.exports = shoppingCart;
