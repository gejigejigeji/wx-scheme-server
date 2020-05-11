const Controller = require('egg').Controller;
class index extends Controller {
    async index() {
        const { ctx } = this;
        ctx.body="加油！你是最胖的！"
    }
       // POST	/posts/
    async create() {

    }
  //  GET	/posts/:id
    async show() {

    }
 //  PUT	/posts/:id
    async updata() {

    }

    //  POST	/posts/:id
    async destroy () {

    }
}


module.exports = index;
