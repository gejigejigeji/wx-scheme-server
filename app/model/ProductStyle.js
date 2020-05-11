
module.exports = app => {
    const { STRING, INTEGER } = app.Sequelize;

    const ProductStyle = app.model.define('productStyle', {
        id:{
            type:INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        price:STRING(10),
        name:STRING(20),
        size:STRING(20),
        custom:STRING(20),
        url:STRING(200),
    }, {...app.sl,modelName:'productStyle'});
    ProductStyle.associate = () => {

    };

    return ProductStyle;
};
