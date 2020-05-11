const Service = require('egg').Service;
const COS = require('cos-nodejs-sdk-v5');
let cos = new COS({
    SecretId: 'AKIDQRinvyhg2Qg3f6O7eR3oVDByumgUnYox',
    SecretKey: '661ISTJyTnv1eBWhhYDlGtQp6CCweFj6'
});


class file extends Service {
    async uploadToCloud(file,fileName,data) {
      return new Promise(resolve => {
            cos.putObject({
                Bucket: data.bucket, /* 必须 */
                Region: data.region,    /* 必须 */
                Key: `/${data.prefix}/${fileName}`,              /* 必须 */
                StorageClass: 'STANDARD',
                Prefix:data.prefix,
                Body: file, // 上传文件对象
            }, function(err, data) {
                resolve(data||err)
            });
        })
    }
    async getImgList(data) {
        return new Promise(resolve => {
            cos.getBucket({
                Bucket: data.bucket, /* 必须 */
                Region: data.region,    /* 必须 */
                Prefix:data.prefix,
            }, function(err, data) {
                resolve(data||err)
            });
        })


    }

    async deleteObject(data) {
        return new Promise(resolve => {
            cos.deleteObject({
                Bucket: data.bucket, /* 必须 */
                Region: data.region,    /* 必须 */
                Key:data.key,
            }, function(err, data) {
                resolve(data||err)
            });
        })
    }

    //上传详情
    async uploadProductDetails(file,fileName,data) {
        return new Promise(resolve => {
            cos.putObject({
                Bucket: 'wx-1253787870', /* 必须 */
                Region: 'ap-shanghai',    /* 必须 */
                Key: `/sku/${data.imgDir}/${data.prefix}/${fileName}`,              /* 必须 */
                StorageClass: 'STANDARD',
                Prefix:data.prefix,
                Body: file, // 上传文件对象
            }, function(err, data) {
                resolve(data||err)
            });
        })
    }

}
module.exports = file;
