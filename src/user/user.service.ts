import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { generateSalt, hashPassword } from '../utils/password.utils';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto) {
    const createdUser = new this.userModel(createUserDto);
    const salt = await generateSalt(); // Generate salt
    const hashedPassword = await hashPassword(createUserDto.password, salt); // Hash password

    createdUser.salt = salt;
    createdUser.password = hashedPassword;

    return createdUser.save();
  }

  async findByName(name: string): Promise<User> {
    return this.userModel.findOne({ name }).exec();
  }

  async findById(id: string): Promise<User | null> {
    return this.userModel.findById(id).populate('roles');
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().populate('roles').exec();
  }
}
