module.exports = (sequelize, DataType) => {
  const UserBook = sequelize.define('UserBook',
    {},
    {
      timestamps: false,
      underscored: true,
      tableName: 'users_books'
    },
  );

  UserBook.associate = (models) => {
    models.Book.belongsToMany(models.User, {
      as: 'users',
      through: UserBook,
      foreignKey: 'bookid',
      otherKey: 'userId',
    });
    models.User.belongsToMany(models.Book, {
      as: 'books',
      through: UserBook,
      foreignKey: 'userId',
      otherKey: 'bookId',
    });
  };

  return UserBook;
};