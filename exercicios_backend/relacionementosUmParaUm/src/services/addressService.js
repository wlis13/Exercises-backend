const { Address, Employee } = require('../models');

const getByAllEmployeeId = async (employeeId) => {
  const adresses = await Address.findAll({ where: { employeeId } });
  return adresses;
};

// eager loading
const funcVideo = () => {
  Employee.findAll({
    include: [
      {
        model: Address,
        as: 'adresses',
        attributes: { exclude: ['number'] },
      },
    ],
  }).then((employees) => {
    employees.forEach((employee) => {
      console.log(employee.firstName, employee.adresses);
    });
  });
};

// lazy loading

const funcVideo2 = () => {
  Employee.findAll().then((employees) => {
    employees.forEach((employee) => {
      console.log(employee);
    });
  });
};

// lazy loading 2

const funcVideo3 = () => {
  Employee.findAll().then((employees) => {
    employees.filter((employee) => employee.firstName === 'Fred')
      .forEach((employee) => {
        Address.findAll({ where: { employee_id: employee.id } })
          .then((adresses) => {
            console.log(`--${employee.firstName} ${employee.lastName}:`)
            console.log(adresses);
          });
      });
  });
};

module.exports = {
  getByAllEmployeeId,
};