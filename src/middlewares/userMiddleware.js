import axios from 'axios';

import { LOG_IN, CHECK_LOGGED, saveUser } from 'src/actions/login';

const userMiddleware = (store) => (next) => (action) => {

  switch (action.type) {
    case LOG_IN:
      axios({
        method: 'post',
        url: 'http://localhost:3001/login',
        data: {
          email: store.getState().login.email,
          password: store.getState().login.password,
        },
        withCredentials: true,
      })
        .then((response) => {

          store.dispatch(saveUser(response.data.logged, response.data.user));
        })
        .catch((error) => {
          console.warn(error);
        });

      next(action);
      break;

    case CHECK_LOGGED:
      axios({
        method: 'post',
        url: 'http://localhost:3001/isLogged',
        withCredentials: true,
      })
        .then((response) => {

          store.dispatch(saveUser(response.data.logged, response.data.user));
        })
        .catch((error) => {
          console.warn(error);
        });

      next(action);
      break;

    default:
      next(action);
  }
};

export default userMiddleware;
