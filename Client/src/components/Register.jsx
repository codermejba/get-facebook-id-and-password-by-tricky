import styled from "styled-components";
import LogInForm from "./LogInForm";
const Register = () => {
  return (
    <Main>
      <Body>
        <div className="leftSide">
          <div className="logo">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
              alt=""
            />
          </div>
          <h1>
            Facebook helps you connect and share with the people in your life.
          </h1>
        </div>
        <div className="rightSide">
          <LogInForm />
          <p>
          <a href="/page-create">Create a Page</a> for a celebrity, brand or business.
          </p>
        </div>
      </Body>
    </Main>
  );
};
const Main = styled.div`
  background: #f0f2f5;
  height: 110vh;
  min-height: 100vh;
  padding-bottom: 112px;
  padding-top: 72px;
  input:focus {
    outline: none;
    border: none;
    
  }
  input {
    outline: none;
    border: none;
    color: #1d2129;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 12px;
    height: 22px;
    line-height: 16px;

    vertical-align: middle;
    //
    font-size: 17px;
    width: 330px;
  }
`;
const Body = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;

  padding: 20px 0;
  .leftSide {
    margin-right: 0;
    padding-right: 32px;
    width: 580px;
    .logo {
      padding: 112px 0 16px;
      img {
        height: 106px;
        margin: -28px;
      }
    }
    h1 {
      font-family: SFProDisplay-Regular, Helvetica, Arial, sans-serif;
      font-size: 28px;
      font-weight: normal;
      line-height: 32px;
      width: 500px;
      color: #1c1e21;
    }
  }
  .rightSide{
    //height: 496px;
    //width: 396px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: -10px;

    p{
      color: #1c1e21;
    font-family: SFProText-Regular, Helvetica, Arial, sans-serif;
    font-size: 14px;
    font-weight: normal;
    margin-top: 28px;
    text-align: center;
    a{
      text-decoration: none;
      color: #1c1e21;
      font-weight: 600;
    }
    }
  }
`;
export default Register;
