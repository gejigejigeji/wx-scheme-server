
module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;

    const Banner = app.model.define('banner', {
        id:{
            type:INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        url:STRING(255),
    }, {...app.sl,modelName:'banner'});

    return Banner;
};
