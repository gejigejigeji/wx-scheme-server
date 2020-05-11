
module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;

    const ShoppingCart = app.model.define('shoppingCart', {
        id:{
            type:INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        price:STRING(20),
        address: STRING(20),
        count: INTEGER(10),
        productListId: INTEGER(10),
        region: STRING(20),
        size: STRING(20),
        styleName: STRING(20),
        userId: INTEGER(10),
    }, {...app.sl,modelName:'shoppingCart'});

    return ShoppingCart;
};
