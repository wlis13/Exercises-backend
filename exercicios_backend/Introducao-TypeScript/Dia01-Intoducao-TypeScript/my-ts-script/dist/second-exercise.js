"use strict";
const emailInput = 'email@email.com';
const validateEmailFormat = (param) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(param);
};
console.log(validateEmailFormat(emailInput));
