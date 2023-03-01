import IUsers from '../model/IUsers';
import { Request, Response } from 'express';
import userValidation from '../Validation/userValidation';

const createUsers = async (req: Request, res: Response) => {
  const { name, email, age, password } = req.body as IUsers;

  if (userValidation.validationUser(email, password)) {
    await User.create({ name, email, age, password });
    res.status(200).json({ message: 'create user sucess!' });
  } else {
    res.status(400).json({ message: 'invalid date!' });
  }
};
