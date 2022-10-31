import React, { useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

const emailReducer = (state, action) => {
  // state - last value
  // action - gets the parameters set in dispatchEmail
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') };
  }
  return { value: '', isValid: false };
};
const passReducer = (state, action) => {
  // state - last value
  // action - gets the parameters set in dispatchEmail
  if (action.type === 'PASS_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === 'PASS_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: '', isValid: false };
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null,
  });

  const [passState, dispatchPass] = useReducer(passReducer, {
    value: '',
    isValid: null,
  });

  useEffect(() => {
    console.log('EFFECT RUNNING');

    return () => {
      console.log('EFFECT CLEANUP');
    };
  }, []);

  // const {isValid: emailIsValid} = emailState;
  // const {isValid: passIsValid} = passState;
  // console.log(emailIsValid, passIsValid);

  // useEffect(() => {
  //   const identifier = setTimeout(() => {
  //     console.log('Checking form validity!');
  //     setFormIsValid(
  //       enteredEmail.includes('@') && enteredPassword.trim().length > 6
  //     );
  //   }, 500);

  //   return () => {
  //     console.log('CLEANUP');
  //     clearTimeout(identifier);
  //   };
  // }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value }); // this will trigger the reducer: emailReducer
  };

  const passwordChangeHandler = (event) => {
    dispatchPass({ type: 'PASS_INPUT', val: event.target.value }); // this will trigger the reducer: emailReducer
  };

  const validateEmailHandler = (event) => {
    dispatchEmail({ type: 'INPUT_BLUR' }); // this will trigger the reducer: emailReducer
  };

  const validatePasswordHandler = () => {
    dispatchPass({ type: 'PASS_BLUR' }); // this will trigger the reducer: emailReducer
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        {/* <div
          className={`${classes.control} ${emailState.isValid ? classes.invalid : ''
            }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div> */}

        <Input htmlFor="email" label="E-Mail" type="email" id="email" value={emailState.value} isValid={emailState.isValid} onChange={emailChangeHandler} onBlur={validateEmailHandler} />

        {/* <div
          className={`${classes.control} ${passState.isValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div> */}

        <Input htmlFor="password" label="Password" type="password" id="password" value={passState.value} isValid={passState.isValid} onChange={passwordChangeHandler} onBlur={validatePasswordHandler} />    

        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!emailState.isValid || !passState.isValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
