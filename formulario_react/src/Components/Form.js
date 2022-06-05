import { useState } from "react";

const Form = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [telefone, setTelefone] = useState();

  const handleName = (e) => {
    setName(e.target.value);
    console.log(name);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };

  const handleTelefone = (e) => {
    setTelefone(e.target.value);
    console.log(telefone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
                onChange={handleName}
              ></input>
              <span>E-mail: </span>
              <input
                type="email"
                name="email"
                placeholder="Digite seu e-mail"
                onChange={handleEmail}
              ></input>
              <span>Telefone</span>
              <input
                type="number"
                name="telefone"
                placeholder="Digite seu telefone"
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
