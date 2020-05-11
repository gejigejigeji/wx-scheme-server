const Controller = require('egg').Controller;
class productCover extends Controller {
    async index() {
        const { ctx } = this;

    }
    // POST	/posts/
    async create() {
        const { ctx } = this;
        const file =await ctx.getFileStream();
        const fielName = file.filename;
        const data = JSON.parse(await ctx.request.header.data);
        let rul = await ctx.service.cloud.file.uploadToCloud(file,'cover.jpeg',data);
        console.log(rul)
        data.src = rul.Location;
        let saveSrc = await ctx.service.product.product.updateCoverImg(data);
        console.log(saveSrc)
        if (saveSrc.status==200) {
            ctx.status = 200;
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


module.exports = productCover;
