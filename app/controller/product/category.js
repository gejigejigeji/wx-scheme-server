const Controller = require('egg').Controller;
class category extends Controller {
    async index() {
        const { ctx } = this;
        let rul = await ctx.service.product.category.getCategoryList();
        if (rul.status == 200) {
            ctx.status = 200;
            ctx.body={
                data:rul.res,
                status:200
            }
        }
    }
       // POST	/posts/
    async create() {
        const { ctx } = this;

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


module.exports = category;
