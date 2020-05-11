
module.exports = app => {
    const { TEXT, INTEGER, STRING } = app.Sequelize;

    const ProductDetails = app.model.define('productDetails', {
        id:{type:INTEGER,primaryKey:true,autoIncrement: true},
        title:STRING(30),
        price:INTEGER(10),
        details:TEXT,
        master:TEXT,
        cover:TEXT,
    }, {...app.sl,modelName:'productDetails'});
    ProductDetails.associate = () => {
        ProductDetails.belongsTo(app.model.ProductList)
        ProductDetails.hasOne(app.model.ProductStyle)

    };
    return ProductDetails;
};
