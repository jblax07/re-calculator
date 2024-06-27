import { Request, Response } from 'express';
import User from '../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const registerUser = async (req: Request, res: Response) => {
  const { name, email, password, role } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400).json({ message: 'User already exists' });
    return;
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = new User({
    name,
    email,
    password: hashedPassword,
    role,
  });

  await user.save();
  
  res.status(201).json({ message: 'User registered successfully' });
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    res.status(400).json({ message: 'Invalid email or password' });
    return;
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    res.status(400).json({ message: 'Invalid email or password' });
    return;
  }

  const token = jwt.sign({ id: user._id, role: user.role }, 'your_jwt_secret', { expiresIn: '1h' });

  res.json({ token });
};

export const getUserProfile = async (req: Request, res: Response) => {
  const user = await User.findById(req.user.id);

  if (user) {
    res.json({
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};
