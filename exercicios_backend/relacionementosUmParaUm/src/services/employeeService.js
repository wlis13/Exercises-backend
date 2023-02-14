const { Address, Employee } = require('../models');
const Sequelize = require('sequelize');
const config = require('../config/config');
const env = process.env.NODE_ENV;
const sequelize = new Sequelize(config[env]);

const getAll = async () => {
  const users = await Employee.findAll({
    include: { model: Address, as: 'adresses' },
  });
  return users;
};

const getById = async (id) => {
  const user = await Employee.findByPk(id, {
    include: {
      model: Address,
      as: 'adresses',
      attributes: { exclude: 'number' }
    },
    attributes: { exclude: 'age' }
  });
  return user;
}

// unmanaged transaction
const insert = async ({ firstName, lastName, age, city, street, number }) => {
  const t = await sequelize.transaction();
  try {
    const employee = await Employee.create(
      { firstName, lastName, age },
      { transaction: t }
    );
    await Address.create(
      { city, street, number, employeeId: employee.id },
      { transaction: t }
    );
    await t.commit();
    return employee;
  } catch (error) {
    await t.rollback();
    console.log(e);
    throw e;
  }
}

// managed transaction

// const insertManaged = async ({ firstName, lastName, age, city, street, number }) => {
//   const result = await sequelize.transaction(async (t) => {
//     const employee = await Employee.create({
//       firstName, lastName, age
//     }, { transaction: t });

//     await Address.create({
//       city, street, number, employeeId: employee.id
//     }, { transaction: t });
//     return employee;
//   });
//   return result;
// };

module.exports = {
  getAll,
  getById,
  insert,
};