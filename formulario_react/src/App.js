//component
import Form from "./Components/Form";

//style
import "./App.css";
import "../src/PagesStyle/Form.css";

function App() {
  return (
    <div className="App">
      <Form
        user={{
          name: "Fábio Costa",
          email: "jordanfabio@hotmail.com",
          telefone: 13996285971,
        }}
      />
    </div>
  );
}

export default App;
