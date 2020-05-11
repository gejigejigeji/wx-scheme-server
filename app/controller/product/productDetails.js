const Controller = require('egg').Controller;
class productDetails extends Controller {
    async index() {
        const { ctx } = this;
        const rul = await ctx.service.product.productDetails.getProductDetailsList();
        if (rul.status == 200) {
            ctx.status = 200;
            ctx.body = {
                status:200,
                data:rul.res,
                message:'ok',
            };
        }
    }
       // POST	/posts/
    async create() {
        const {ctx} = this;
        const files =await ctx.multipart();
        let file,rul;
        const data = JSON.parse(await ctx.request.header.data);
        while ((file = await files()) != null) {
            if (!file.filename) {
                return;
            }
            // 文件处理，上传到云存储等等
            rul = await ctx.service.cloud.file.uploadProductDetails(file, file.filename, data);
        }
        if (rul.statusCode == 200) {
            ctx.status = 200;
            ctx.body = {
                status:200,
                message:'ok'
            };
        }

    }

    async createDetails() {
        const {ctx} = this;
        let data = ctx.request.body;
        await ctx.service.product.productDetails.createDetails(data).then(res=>{
            ctx.status = 200;
            ctx.body={
                ...res,
                status:200
            }
        })


    }
  //  GET	/posts/:id
    async show() {
        const { ctx } = this;
        const id = ctx.params.id;
        await ctx.service.product.productDetails.showProductDetails(id).then(data=>{
            ctx.status = 200;
            ctx.body={
                data,
                status:200
            }
        })


    }
 //  PUT	/posts/:id
    async updata() {
        const { ctx } = this;

    }
}


module.exports = productDetails;
