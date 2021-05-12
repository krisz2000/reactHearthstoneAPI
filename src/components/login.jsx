import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";

export default function Login(props) {
  const history = useHistory();
  const onLogin = useCallback(() => {
    history.push("/list/");
    props.onLogin();
  }, [history, props]);

  return (
    <button
      className="btn btn-primary btn-lg btn-light login"
      onClick={onLogin}
    >
      Login
    </button>
  );
}
