const Controller = require('egg').Controller;

class banner extends Controller {
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
        const fielName = file.filename;
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

    //  DELETE	/posts/:id
    async destroy () {
        const { ctx } = this;
        const resData = ctx.request.body;
        let rul =await ctx.service.cloud.file.deleteObject(resData);
        if(rul.statusCode==204) {
            ctx.status = 200;
            ctx.body={
                message:'上传成功',
                status:ctx.status,
                data:rul
            }
        }

    }
}


module.exports = banner;
