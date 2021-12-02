import { useState } from "react";
import "./App.scss";




function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="App">
      <form>
        <fieldset>
          <legend>Login</legend>
          <div className="row">
            <label htmlFor="username">Name</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsername}
            />
          </div>
          <div className="row">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={handlePassword}
              value={password}
            />
          </div>
          <div className="buttonRow">
            <button onClick={handleLoginButton}>Login</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
