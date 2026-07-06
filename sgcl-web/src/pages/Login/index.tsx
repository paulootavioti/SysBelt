import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";

import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";

export function Login() {

  const { login } = useAuth();

  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [senha, setSenha] =
    useState("");

  async function handleSubmit(
    e: React.FormEvent
  ) {

    e.preventDefault();

    try {

      await login(
        email,
        senha
      );

      navigate("/dashboard");

    } catch {

      alert(
        "Usuário ou senha inválidos."
      );

    }

  }

  return (

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: 100
      }}
    >

      <form
        onSubmit={handleSubmit}
      >

        <h1>SGCL Kids</h1>

        <Input
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <br />
        <br />

        <Input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) =>
            setSenha(e.target.value)
          }
        />

        <br />
        <br />

        <Button type="submit">
          Entrar
        </Button>

      </form>

    </div>

  );

}