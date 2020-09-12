import React from 'react';
import GoogleLogin from 'react-google-login';
import {GOOGLE_OAUTH_CLIENT_ID} from '../../credentials';

export default ({ login }) => {
  const onOAuthSuccess = (response) => {
    if (response.profileObj && response.profileObj.name) {
      login(response.profileObj.name);
    } else {
      console.log('Name not found using default');
      login('User');
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
