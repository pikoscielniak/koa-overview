var koa = require('koa');
var user = require('./server/models/User');

var app = module.exports = koa();

var config = {
    db: process.env.dbConnection
};

var mongoose = require('./server/config/mongoose')(config);

app.use(function *(){
    var users = yield user.getByQuery({});
    this.body = users.toString();
});


if (!module.parent) app.listen(3000);
