import { useEffect, useState } from "react";
import Message from "./Message";
import "./styles.css";

export default function App() {
  const [email, setEmail] = useState("");
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    console.log("Email has changed");
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("CLICK", email);
    setIsUserLoggedIn(!isUserLoggedIn);
  };

  const handleLogOut = (event) =>
    isUserLoggedIn ? setIsUserLoggedIn(false) : isUserLoggedIn;

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label className="email" htmlFor="email">
          Email :{" "}
        </label>
        <input
          className="input"
          type="text"
          placeholder="elon@spacex.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input className="login" type="submit" value="Submit" />
        {isUserLoggedIn && <Message />}
      </form>
      <button className="logout" onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
}
