var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    firstName: {type: String},
    lastName: {type: String}
});
var User = mongoose.model('User', userSchema);

function createDefaultUsers() {
    User.find({}).exec(function (err, collection) {
        if (collection.length === 0) {
            User.create({firstName: 'John', lastName: 'Brown'});
            User.create({firstName: 'Dean', lastName: 'Blue'});
        }
    });
}

function getByQuery(query) {
    return function (callback) {
        User.find(query).exec(callback);
    }
}

exports.createDefaultUsers = createDefaultUsers;
exports.getByQuery = getByQuery;
