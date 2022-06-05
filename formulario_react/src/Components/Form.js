import { useState } from "react";

const Form = (user) => {
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [telefone, setTelefone] = useState(user ? user.telefone : "");

  const handleName = (e) => {
    setName(e.target.value);
    console.log(name);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };

  const handleTelefone = (e) => {
    e.preventDefault();
    setTelefone(e.target.value);
    console.log(telefone);

    //limpar formulario
    setName("");
    setTelefone("");
    setTelefone("");
  };

  const handleSubmit = (e) => {
    console.log("Formulario enviando");
    console.log(name, email, telefone);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <table className="container">
          <div className="context">
            <label>
              <span>Nome: </span>
              <input
                type="text"
                name="name"
                placeholder="Digite seu nome"
                value={name}
                onChange={handleName}
              ></input>
              <span>E-mail: </span>
              <input
                type="email"
                name="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={handleEmail}
              ></input>
              <span>Telefone</span>
              <input
                type="number"
                name="telefone"
                placeholder="Digite seu telefone"
                value={telefone}
                onChange={handleTelefone}
              ></input>
            </label>
            <button type="submit" className="btn">
              Enviar
            </button>
          </div>
        </table>
      </form>
    </div>
  );
};

export default Form;
