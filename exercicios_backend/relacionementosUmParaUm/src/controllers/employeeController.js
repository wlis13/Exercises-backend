const employeeService = require('../services/employeeService');
const addressService = require('../services/addressService');

const getAll = async (_req, res) => {
  try {
    const employee = await employeeService.getAll();
    res.status(200).json(employee);
  } catch (error) {
    console.error(error.message);
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await employeeService.getById(id);
    if (!employee) {
      res.status(404).json({ message: 'Pessoa não encontrada' })
    }
    if (req.query.includeAddresses === 'true') {
      const adresses = await addressService.getByAllEmployeeId(id);
      return res.status(200).json({ employee, adresses });
    }
    res.status(200).json(employee);
  } catch (error) {
    console.error(error.message);
  }
};

const insert = async (req, res) => {
  try {
    const { firstName, lastName, age, city, street, number } = req.body;
    const employee = await employeeService
      .insert({ firstName, lastName, age, city, street, number });
    return res.status(200).json({ id: employee.id, message: 'Cadastrado com sucesso!' })
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = {
  getAll,
  getById,
  insert,
};