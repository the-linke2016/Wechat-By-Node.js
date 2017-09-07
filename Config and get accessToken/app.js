'use scrict'
var Koa = require('koa');
var path = require('path');
var wechat = require("./wechat/g");
var util = require('./libs/util');
var wechat_file = path.join(__dirname, './config/wechat.txt');
var config = {
    wechat: {
        appID: "wx6ca761a9fae7f8bf",
        appSecret: "0cabc92989aa16462c8f2e1e27607193",
        token: "weixin",
        getAccessToken: function () {
            return util.readFileAsync(wechat_file);
        },
        saveAccessToken: function (data) {
            data = JSON.stringify(data);
            return util.writeFileAsync(wechat_file, data);
        }
    }
};

var app = new Koa();
app.use(wechat(config.wechat));
app.listen(1234);
console.log('Listening on 1234');