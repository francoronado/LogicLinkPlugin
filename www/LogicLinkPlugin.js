var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'LogicLinkPlugin', 'coolMethod', [arg0]);
};

exports.encriptar = function (arg0, success, error) {
    exec(success, error, 'EntelPay', 'encriptar', [arg0]);
};

exports.desencriptar = function (arg0, success, error) {
    exec(success, error, 'EntelPay', 'desencriptar', [arg0]);
};