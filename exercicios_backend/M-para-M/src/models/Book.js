module.exports = (sequelize, DataType) => {
  const Book = sequelize.define('Book', {
    id: { type: DataType.INTEGER, primaryKey: true },
    name: DataType.STRING,
    releaseYear: DataType.INTEGER,
    totalPages: DataType.INTEGER
  }, { timestamps: false, underscored: true });
  return Book;
};