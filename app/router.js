'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
    router.get('/', controller.index.index);
    router.resources('/login', controller.user.login.index);
    router.resources('/login/wxlogin', controller.user.login.wxLogin);
    router.resources('/banner/banner', controller.banner.banner);
    router.resources('/file/file', controller.file.file);
    router.resources('/product/product', controller.product.product);
    router.resources('/product/productCover', controller.product.productCover);
    router.resources('/product/category', controller.product.category);
    router.resources('/product/productDetails', controller.product.productDetails);
    router.post('/product/productDetails/createProductDetails', controller.product.productDetails.createDetails);
    router.resources('/address/address', controller.address.address);
    router.resources('/shoppingCart/shoppingCart', controller.shoppingCart.shoppingCart);

};
