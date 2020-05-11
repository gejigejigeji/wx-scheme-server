const uuidv1 = require('uuid/v1');
module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;

    const User = app.model.define('user', {
        id:{type:INTEGER,primaryKey:true,autoIncrement: true},
        username:STRING(30),
        password:STRING(30),
        openid:STRING(200),
        region:STRING(200),
        local:STRING(200),
        nickName:STRING(10),
        phone:STRING(20),
    }, {...app.sl,modelName:'username'});

    User.associate = () => {

        User.hasOne(app.model.Address);
        User.hasOne(app.model.ProductList);
    };
    app.model.sync().then(res => {
        app.model.User.create({
            username: 'admin',
            password: 'admin'
        });
        app.model.ProductList.create(
            {
                title: '我的滑板鞋时尚时尚最时尚的',
                imgDir: `PDD${uuidv1()}`,
                coverDir: `COVER${uuidv1()}`,
                price: 300,
                extra: '一些简要',
                tips:'牛 | |逼 | 了啊',
                sendAddress:'上海',
                productDetail:{
                    title: '我的滑板鞋时尚时尚最时尚的',
                    price: 300,

                }

            },{
            include:[app.model.ProductDetails]
            });
        app.model.Category.bulkCreate([
            {
                title: '衣服'
            },
            {
                title: '包包'
            }
        ]);
        app.model.Address.create(
            {
                isNormal: true,
                address:'asdasddsassassasasasa',
                userId:1
            }
        )
    });
    return User;
};
