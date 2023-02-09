const { Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");

class Todo extends Model {}

Todo.init(
    {

    }
)

module.exports = Todo;