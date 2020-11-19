import {
  AmplifyAuthenticator,
  AmplifySignIn,
  AmplifySignUp,
  AmplifyContainer,
} from "@aws-amplify/ui-react";

import React from "react";

export default function Authenticator() {
  return (
    <AmplifyContainer>
      <AmplifyAuthenticator></AmplifyAuthenticator>
    </AmplifyContainer>
  );
}
