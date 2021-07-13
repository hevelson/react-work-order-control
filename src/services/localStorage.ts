import IUser from '../interfaces/IUser';

export const getLocalUser = (): IUser => {
  const user: IUser = {
    email: '',
    name: '',
    image: '',
  };

  const localUserData = localStorage.getItem('userData');

  if (localUserData) {
    const userData = JSON.parse(localUserData);
    user.id = userData.id || '';
    user.email = userData.email || '';
    user.name = userData.name || '';
    user.image = userData.image || '';
  }

  return user;
};

export const setLocalUser = (userData: IUser): IUser => {
  const localUserData = JSON.stringify(userData);
  localStorage.setItem('userData', localUserData);

  return userData;
};

export const userLogout = (): boolean => {
  localStorage.removeItem('userData');

  return true;
};
