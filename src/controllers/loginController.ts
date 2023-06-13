import loginService from '../services/loginService';

const loginController = {
  login: async (credentials: any) => {
    const token = await loginService.login(credentials);
    return token;
  },
};

export default loginController;
