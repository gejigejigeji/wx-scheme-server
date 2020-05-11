
module.exports = app => {
    const { STRING, INTEGER, DATE,BOOLEAN } = app.Sequelize;

    const ProductList= app.model.define('productList', {
        id:{
            type:INTEGER,
            primaryKey:true,
            autoIncrement: true,
        },
        title:STRING(100),
        extra:STRING(30),
        tips:STRING(30),
        sendAddress:STRING(10),
        imgDir:STRING(50),
        coverDir:STRING(50),
        coverSrc:STRING(200),
        price:INTEGER(10),
        like:BOOLEAN(10),

    }, {...app.sl,modelName:'productList'});
    ProductList.associate = () => {
        app.model.ProductList.hasOne(app.model.ProductDetails)
        app.model.ProductList.hasOne(app.model.ProductStyle)


    };
    return ProductList;
};
