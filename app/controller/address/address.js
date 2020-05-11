const Controller = require('egg').Controller;
class address extends Controller {
    async index() {
        const { ctx } = this;
        const data = ctx.query;
        let rul = await ctx.service.address.address.getAddress(data);
        if (rul.status == 200) {
            ctx.status = 200;
            ctx.body={
                list:[...rul.res]
            }
        }
    }
       // POST	/posts/
    async create() {
        const { ctx } = this;

        const response=ctx.request.body;
        let rul = await ctx.service.address.address.createAddress(response);
        if (rul.status == 200) {
            ctx.status = 200;
            ctx.body={
                ...rul.res.dataValues,
                status:200
            }
        }

    }
  //  GET	/posts/:id
    async show() {
        const { ctx } = this;

    }
 //  PUT	/posts/:id
    async update() {
        const { ctx } = this;
        const id = ctx.params.id;
        const data = ctx.request.body;
        let rul = await ctx.service.address.address.updateAddress(id,data);
        if (rul.status == 200) {
            ctx.status = 200;
            ctx.body={
                ...rul,
                status:200
            }
        }
    }

}


module.exports = address;
