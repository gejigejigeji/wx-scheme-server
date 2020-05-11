const Service = require('egg').Service;

class category extends Service {
    async getCategoryList(uid) {
        return this.app.model.Category.findAll().then(res=>{
            return Promise.resolve({
                status:200,
                res
            })
        }).catch(err=>{
            return Promise.reject(err)
        });
    }

}
module.exports = category;