
module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;

    const Category = app.model.define('category', {
        id:{
            type:INTEGER,
            primaryKey:true,
            autoIncrement: true,
        },
        title:STRING(30),
        code:STRING(30),
    }, {...app.sl,modelName:'category'});
    Category.associate = () => {
        app.model.Category.hasOne(app.model.ProductList);
    };

    return Category;
};
