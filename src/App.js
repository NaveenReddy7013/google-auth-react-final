import React, { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import  app  from "./firebase-config"; // import your firebase app
import './App.css'; // Import the CSS file for styling

function App() {
  const [user, setUser] = useState(null);

  // Sign In with Google
  const handleGoogleSignIn = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser({ name: user.displayName, email: user.email });
      })
      .catch((error) => {
        console.error("Error during sign-in", error);
      });
  };

  // Sign Out
  const handleLogout = () => {
    const auth = getAuth(app);

    signOut(auth)
      .then(() => {
        setUser(null); // Reset user state to null after logout
      })
      .catch((error) => {
        console.error("Error during sign-out", error);
      });
  };

  return (
    <div className="app-container">
      {!user ? (
        <div className="auth-container">
          <h1 className="title">React with Google Auth</h1>
          <button className="sign-in-btn" onClick={handleGoogleSignIn}>
            Sign in with Google
          </button>
          <footer>© 2024 Mindmate. All rights reserved.</footer>
        </div>
      ) : (
        <div className="user-container">
          <h1 className="title">Welcome, {user.name}!</h1>
          <p className="email">Email: {user.email}</p>
          <button className="log-out-btn" onClick={handleLogout}>
            Log out
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
