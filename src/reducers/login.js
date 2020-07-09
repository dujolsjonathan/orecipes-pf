import { CHANGE_FIELD, SAVE_USER } from 'src/actions/login';

const initialState = {
  email: '',
  password: '',
  isLogged: false,
  user: null,
};

const login = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };

    case SAVE_USER:
      return {
        ...state,
        isLogged: action.logged,
        user: action.userData,
      };

    default:
      return state;
  }
};

export default login;
