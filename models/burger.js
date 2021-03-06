const orm = require("../config/orm");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function(column, value, cb) {
        orm.insertOne("burgers", column, value, function(res) {
            cb(res);
        });
    },
    updateOne: function (burgerId, cb) {
        orm.updateOne("burgers", "devoured", burgerId, function (res) {
          cb(res);
        });
      }
};

module.exports = burger;