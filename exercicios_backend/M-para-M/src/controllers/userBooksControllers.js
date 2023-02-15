const userBookService = require('../services/userBookServices');

const getUserBooksById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userBookService.getUserBooksById(id);
    if (!user) {
      res.status(404).json({ message: 'Pessoa não encontrada!' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  getUserBooksById,
};