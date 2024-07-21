import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormInputContainer, InputLabel, LoginButton, LoginForm, LoginInput, LoginSection, LoginTitle } from "./styles";


type FormState = {
  username: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<FormState>({
    username: "",
    password: "",
  });
  const [error, setError] = useState<null | string>(null);

  const USERNAME: string = "user";
  const PASSWORD: string = "movie";

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { username, password } = form;

    if (username === USERNAME && password === PASSWORD) {
      navigate("/movies");
    } else {
      setError("El usuario o contraseña es invalido");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const sectionStyles: React.CSSProperties = {
    fontFamily: "arial",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  return (
    <LoginSection>
      <LoginTitle>Login Movie APP</LoginTitle>
      <LoginForm>
        <FormInputContainer>
          <InputLabel>Username</InputLabel>
          <LoginInput
            type="text"
            name="username"
            value={form.username}
            onChange={(e) => handleInputChange(e)}
          />
        </FormInputContainer>
        <FormInputContainer>
          <InputLabel>Password</InputLabel>
          <LoginInput
            type="password"
            name="password"
            value={form.password}
            onChange={(e) => handleInputChange(e)}
          />
        </FormInputContainer>
        <LoginButton type="submit">Login</LoginButton>
      </LoginForm>
      {error && <p className="text-red-500">{error}</p>}
    </LoginSection>
  );
};

export default Login;
