const Controller = require('egg').Controller;
class updata extends Controller {
    async index() {
        const { ctx } = this;
        const resData =await ctx.query;
        let rul =await ctx.service.cloud.file.getImgList(resData);
        if(rul.statusCode==200) {
            ctx.status = 200;
            ctx.body={
                message:'ok',
                status:ctx.status,
                data:rul
            }
        }
    }
    // POST	/posts/
    async create() {
        const { ctx } = this;
        const file =await ctx.getFileStream();
        const fielName = file.filename.split('.')[0];
        const data = JSON.parse(await ctx.request.header.data);
        let rul =await ctx.service.cloud.file.uploadToCloud(file,fielName,data);
        if(rul.statusCode==200) {
            ctx.status = 200;
            ctx.body={
                message:'上传成功',
                status:ctx.status,
                url:rul.Location
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


module.exports = updata;
