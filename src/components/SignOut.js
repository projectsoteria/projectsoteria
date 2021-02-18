import React from "react";
import Button from "react-bootstrap/Button";
import { Auth } from "aws-amplify";

export default function SignOut() {
  return (
    <Button
      variant="outline-secondary"
      onClick={async () => {
        try {
          await Auth.signOut();
        } catch (error) {
          console.log("error signing out: ", error);
        }
      }}
    >
      Sign Out
    </Button>
  );
}
