
module.exports = app => {
    const { STRING, INTEGER, DATE,BOOLEAN } = app.Sequelize;
    const Address = app.model.define('address', {
        id:{
            type:INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        name:STRING(10),
        surname:STRING(10),
        phone:STRING(20),
        region:STRING(40),
        address:STRING(200),
        openid:STRING(200),
        normal:BOOLEAN,
    }, {...app.sl,modelName:'address'});

    return Address;
};
