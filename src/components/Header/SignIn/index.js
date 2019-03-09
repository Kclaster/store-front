import React, { Component } from 'react';

import GoogleLogin from 'react-google-login';
import './style.css';

class SignIn extends Component {
  render() {
    const responseGoogle = response => {
      console.log(response);
    };

    return (
      <div className="google-login">
        <GoogleLogin
          clientId="96965206631-cvnpql6ur8oojjpc72mjq6c69tbncd8v.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
          buttonText="LOGIN WITH GOOGLE"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
      </div>
    );
  }
}

export default SignIn;
