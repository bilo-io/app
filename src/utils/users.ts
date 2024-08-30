import { IUser } from '@vision/core';

export const adminUsers = [
  'vision.studio.ia@gmail.com',
  // 'bilo.lwabona@gmail.com',
  // ''
];

export const isAdminUser = (user: IUser): boolean => adminUsers.includes(user?.email as string);