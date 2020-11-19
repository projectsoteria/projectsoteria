import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import React, { useEffect, useState } from "react";

import Authenticator from "./Authenticator";
import { UserProvider } from "./UserContext";

export default function UserContextProvider(props) {
  const [authState, setAuthState] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);

  return authState === AuthState.SignedIn && user ? (
    <UserProvider value={user}>{props.children}</UserProvider>
  ) : (
    <Authenticator></Authenticator>
  );
}
