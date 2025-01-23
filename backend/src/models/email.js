const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./User");

const Email = sequelize.define("Email", {
  sender: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  subject: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  body: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  timestamp: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

Email.belongsTo(User, { foreignKey: "userId" });
User.hasMany(Email, { foreignKey: "userId" });

module.exports = Email;
