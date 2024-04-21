import InputForm from "./InputForm";
import ButtonRightIcon from "../Buttons/ButtonRightIcon";
import { useState } from "react";
import ErrorPopup from "./ErrorPopup";
import loginService from "../../services/loginService";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorOpen, setErrorOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("token") ? true : false
  );

 
  const handleErrorClose = () => {
    setErrorOpen(false);
  };

  const onLogin = async () => {
    try {
      const response = await loginService({ username, password });
      setLoggedIn(true);
      localStorage.setItem("token", response.token);
      localStorage.setItem("username", username);
    } catch (error) {
      if (!username || !password) {
        setErrorMessage("Please fill in all Fields");
      } else {
        setErrorMessage("Incorrect Username or password");
      }
      setErrorOpen(true);
    }
  };

  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setLoggedIn(false);
  };

  return (
    <div>
      <form
        className="relative m-[10px] p-2 flex flex-col justify-center items-center gap-4 rounded-lg z-50"
        onSubmit={(e) => e.preventDefault()}
      >
        {loggedIn ? (
          <>
            <h1>{`Hello, ${localStorage.getItem("username")}`}</h1>
            <ButtonRightIcon
              className="w-full"
              label="Log out"
              buttonAction={handleLogOut}
            />
          </>
        ) : (
          <>
            <h1>Log In</h1>
            <InputForm
              type="text"
              label="Username"
              handleChange={(e) => setUsername(e)}
            />
            <InputForm
              type="password"
              label="Password"
              handleChange={(e) => setPassword(e)}
            />
            <div
              className={`absolute opacity-90 top-1 ${
                errorOpen ? "block" : "hidden"
              } `}
            >
              <ErrorPopup
                errorMessage={errorMessage}
                closeError={() => handleErrorClose()}
              />
            </div>
            <ButtonRightIcon
              className="w-full"
              label="Log In"
              buttonAction={() => onLogin()}
            />
            <p className="text-xs font-light">Dont have an account?</p>
            <ButtonRightIcon label="Sign Up" buttonColor={"#7f1d1d"} />
          </>
        )}
      </form>
    </div>
  );
};

export default LoginForm;
