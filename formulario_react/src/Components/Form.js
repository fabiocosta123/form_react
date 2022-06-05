const Form = () => {
  return (
    <div>
      <form>
        <table className="container">
          <div className="context">
            <label>
              <span>Nome: </span>
              <input
                type="text"
                name="name"
                placeholder="Digite seu nome"
              ></input>
              <span>E-mail: </span>
              <input
                type="email"
                name="email"
                placeholder="Digite seu e-mail"
              ></input>
              <span>Telefone</span>
              <input
                type="number"
                name="telefone"
                placeholder="Digite seu telefone"
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
