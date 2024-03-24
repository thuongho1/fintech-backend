import * as bcrypt from 'bcrypt';
//import bcrypt from "bcrypt";

export const hashPassword = async (
  password: string,
  salt: string,
): Promise<string> => {
  return await bcrypt.hash(password, salt);
};

export const generateSalt = async () => {
  return await bcrypt.genSalt();
};

export const comparePassword = async (
  password: string,
  hash: string,
): Promise<boolean> => {
  return await bcrypt.compare(password, hash);
};
