import React, {useContext} from 'react';
import GoogleLogin from 'react-google-login';
import {GOOGLE_OAUTH_CLIENT_ID} from '../../credentials';
import {AuthContext} from '../../hooks/AuthHook';
import {SET_USER} from '../../hooks/ReducerActions';

export default () => {
  const [authState, authDispatch] = useContext(AuthContext);

  const onOAuthSuccess = (response) => {
    if (response.profileObj && response.profileObj.name) {
      authDispatch({
        type: SET_USER,
        payload: {
          user: response.profileObj
        }
      });
    }
  };

  const onOAuthFailure = (response) => {
    console.error('FAILED TO LOGIN', response);
  };
  return (
    <div>
      <GoogleLogin
        clientId={GOOGLE_OAUTH_CLIENT_ID}
        buttonText="Login"
        onSuccess={onOAuthSuccess}
        onFailure={onOAuthFailure}
      />
  </div>)
}
