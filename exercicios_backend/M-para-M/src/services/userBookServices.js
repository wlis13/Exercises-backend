const { User, Book } = require('../models');

const getUserBooksById = async (id) => {
  return User.findOne({
    where: { id },
    include: { model: Book, as: 'books', through: { attributes: [] } }
  });
};

module.exports = {
  getUserBooksById,
};