import { useState } from "react";
import "./App.css";

interface ResultadoIMC {
  imc: string;
  classificacao: string;
}

function App() {
  const [altura, setAltura] = useState<string>("");
  const [peso, setPeso] = useState<string>("");
  const [resultado, setResultado] = useState<ResultadoIMC | null>(null);

  const calcularIMC = (): void => {
    const alturaMetros = parseFloat(altura) / 100; // Converter altura para metros
    const pesoKg = parseFloat(peso);

    if (!alturaMetros || !pesoKg || alturaMetros <= 0 || pesoKg <= 0) {
      alert("Por favor, insira valores válidos para altura e peso.");
      return;
    }

    const imc = pesoKg / (alturaMetros * alturaMetros);
    let classificacao = "";

    if (imc < 18.5) classificacao = "Abaixo do peso";
    else if (imc >= 18.5 && imc < 25) classificacao = "Peso normal";
    else if (imc >= 25 && imc < 30) classificacao = "Sobrepeso";
    else classificacao = "Obesidade";

    setResultado({ imc: imc.toFixed(2), classificacao });
  };

  return (
    <div className="app">
      <h1>Calculadora de IMC</h1>
      <div className="form">
        <label>
          Altura (cm):
          <input
            type="number"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            placeholder="Ex.: 170"
          />
        </label>
        <label>
          Peso (kg):
          <input
            type="number"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            placeholder="Ex.: 70"
          />
        </label>
        <button onClick={calcularIMC}>Calcular</button>
      </div>
      {resultado && (
        <div className="resultado">
          <p>
            Seu IMC: <strong>{resultado.imc}</strong>
          </p>
          <p>
            Classificação: <strong>{resultado.classificacao}</strong>
          </p>
        </div>
      )}
    </div>
  );
}

export default App
