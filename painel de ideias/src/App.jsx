import { useState } from "react";

function App (){
  const [ideias, setIdeias] = useState([]);
  const [novaideia, setNovaideia] = useState("");
  const [erro, setErro] = useState("");


function Adicionarideia (event){
  event.preventDefault();

  if(novaideia.trim() === ""){
    setErro("Adicione uma ideia!");
    return;
  }

  setIdeias([... ideias, novaideia]);
  setNovaideia("");
  setErro("");

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
  {ideias.map((ideia, index) => (
    <li key={index}>{ideia}</li>
  ))}

</ul>

    </div>
);
}

export default App;