import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    //Helpers to handle promise result
    const _onInit = auth2 => {
      console.log("Initialization Success", auth2);
    };
    const _onError = error => {
      console.log("Initialization Error", error);
    };

    //Initialization
    window.gapi.load("auth2", () => {
      window.gapi.auth2
        .init({
          client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID
        })
        .then(_onInit, _onError);
    });
  }, []);

  //Sign In function
  const signIn = () => {
    const _signSuccess = user => {
      setUsername(user.getBasicProfile().getName());
    };
    const _signError = () => console.log("Auth Error");
    const GoogleAuth = window.gapi.auth2.getAuthInstance();
    GoogleAuth.signIn({ scope: "profile email" }).then(
      _signSuccess,
      _signError
    );
  };
  //Sign Out function
  const signOut = () => {
    const GoogleAuth = window.gapi.auth2.getAuthInstance();
    GoogleAuth.signOut().then(() => {
      setUsername(null);
    });
  };

  return (
    <div className="App">
      <h1>Google Authorization</h1>

      {username ? (
        <>
          <p>
            Hello, <strong>{username}</strong>!
          </p>
          <span onClick={signOut}>Sign Out</span>
        </>
      ) : (
        <span onClick={signIn}>Sign In</span>
      )}
    </div>
  );
};

export default App;
