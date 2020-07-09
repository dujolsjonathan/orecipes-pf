import { connect } from 'react-redux';

import LoginForm from 'src/components/LoginForm';

import { changeField, logIn } from 'src/actions/login';

const mapStateToProps = (state) => ({
  email: state.login.email,
  password: state.login.password,
  isLogged: state.login.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(changeField(value, name));
  },
  handleLogin: () => {
    dispatch(logIn());
  },
});

// création du composant container
const LoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);

export default LoginFormContainer;
