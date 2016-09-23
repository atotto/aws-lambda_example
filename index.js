'use strict'

var aws = require('aws-sdk')

exports.handler = (event, context, callback) => {
    aws.config.update({ region: 'ap-northeast-1'});
    var dynamo = new aws.DynamoDB();
    dynamo.describeTable({TableName:'hoge'}).promise().then((tableInfo) => {
        callback(null, tableInfo);
    }).catch((err) => {
        callback(err);
    });
}
