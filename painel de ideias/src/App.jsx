import { useState } from "react";
import "./App.css";

function App (){
  const [ideias, setIdeias] = useState([]);
  const [novaideia, setNovaideia] = useState("");
  const [erro, setErro] = useState("");


function Adicionarideia(event) {
  event.preventDefault();

 if (novaideia.trim() === "") {
  setErro("Adicione uma ideia!");
  return;
}
  

  const nova = {
    id: Date.now(),
    texto: novaideia,
    feita: false
  };

  setIdeias([...ideias, nova]);
  setNovaideia("");
  setErro("");
}
function alternarFeita(id) {
  setIdeias(
    ideias.map((ideia) =>
      ideia.id === id
        ? { ...ideia, feita: !ideia.feita }
        : ideia
    )
  );
}

return (
    <div>

      <h1>PAINEL DA MALU</h1>

  <form onSubmit = {Adicionarideia}>
<input type="text" value={novaideia}
 onChange={(event) => setNovaideia(event.target.value)}

/>
  <button type = "submit">Adicionar</button>
  </form>

  {erro && <p>{erro}</p>}

  <ul>
  {ideias.map((ideia) => (
    <li key={ideia.id}>
      <input
        type="checkbox"
        checked={ideia.feita}
        onChange={() => alternarFeita(ideia.id)}
      />
      <span className={ideia.feita ? "feita" : ""}>
  {ideia.texto}
      </span>
    </li>
  ))}
</ul>


    </div>
);
}

export default App;