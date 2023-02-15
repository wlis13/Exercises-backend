module.exports = (sequelize, DataType) => {
  const User = sequelize.define('User', {
    id: { type: DataType.INTEGER, primaryKey: true },
    firstName: DataType.STRING,
    lastName: DataType.STRING,
    age: DataType.INTEGER
  }, { timestamps: false, underscored: true });

  return User;
};