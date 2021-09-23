const mokDBLogin = [
  {
    login: 'test1',
    password: 'test1',
  },
  {
    login: 'test2',
    password: 'test2',
  },
  {
    login: 'test3',
    password: 'test3',
  },
];

const mokData = [
  {
    col1: 'Hello',
    col2: 'World',
    col3: 'World',
  },
  {
    col1: 'react-table',
    col2: 'rocks',
    col3: 'rocks',
  },
  {
    col1: 'whatever',
    col2: 'you want',
    col3: 'you want',
  },
];

export const loginApi = (login, password) => {
  const currentUser = mokDBLogin.find((node) => node.login === login);
  if (!currentUser || currentUser.password !== password) {
    return { success: false, message: 'Не верный логин или пароль' };
  }
  return {
    success: true,
    token:
      'aaldkafnqeiurnqijnqiuvbquivnqhvbqivbqunrvqibvqiuvbqiurvbquyvbqiuq;iuevn',
  };
};

export const getData = () => {
  return mokData;
};
