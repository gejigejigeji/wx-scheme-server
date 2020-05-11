const Controller = require('egg').Controller;
class product extends Controller {
    async index() {
        const { ctx } = this;
        let rul = await ctx.service.product.product.getProductList();
        if (rul.status == 200) {
            ctx.status = 200;
            ctx.body={
                status: ctx.status ,
                data: rul.res
            }
        }

    }
    // POST	/posts/
    async create() {
        const { ctx } = this;
        let res = ctx.request.body;
        let rul = await ctx.service.product.product.createProduct(res);
        if (rul.status == 200) {
            ctx.status=200
            ctx.body={
                data: rul.res,
                status: 200
            }
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


module.exports = product;
