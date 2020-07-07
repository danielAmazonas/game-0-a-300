import React, { Fragment, useState } from "react";
import "./styles.css";

export default function App() {
  const [estado, setEstado] = useState("Entrada");
  const [palpite, setPalpite] = useState(150);
  const [numPalpites, setNumPalpites] = useState(1);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const iniciarJogo = () => {
    setEstado("Rodando");
    setPalpite(150);
    setNumPalpites(1);
    setMin(0);
    setMax(300);
  };

  if (estado === "Entrada") {
    return (
      <div className="center">
        <h5>Game 0 a 300 🎲</h5>
        <button
          style={styles.button}
          className="waves-effect waves-light btn-small orange"
          onClick={iniciarJogo}
        >
          Começar a jogar!
        </button>
      </div>
    );
  }

  const menor = () => {
    setNumPalpites(numPalpites + 1);
    setMax(palpite);
    const proxPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proxPalpite);
  };

  const maior = () => {
    setNumPalpites(numPalpites + 1);
    setMin(palpite);
    const proxPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proxPalpite);
  };

  const acertou = () => {
    setEstado("Fim");
  };

  if (estado === "Fim") {
    return (
      <div className="center">
        <h5>Fim do Game 🎲</h5>
        <p>
          Você acertou o número {palpite} com {numPalpites} chutes! 🥾
        </p>
        <button
          style={styles.button}
          className="waves-effect waves-light btn-small orange"
          onClick={iniciarJogo}
        >
          Reiniciar!
        </button>
      </div>
    );
  }

  return (
    <Fragment>
      <div className="container">
        <div className="App">
          <h5>Game Iniciado 🎲</h5>
          <p>O seu número é {palpite}?</p>
          <p>
            Min: {min} | Max: {max}
          </p>
          <button
            style={styles.button}
            className="waves-effect waves-light btn-small blue"
            onClick={menor}
          >
            Menor!
          </button>
          <button
            style={styles.button}
            className="waves-effect waves-light btn-small red"
            onClick={acertou}
          >
            Acertou!
          </button>
          <button
            style={styles.button}
            className="waves-effect waves-light btn-small blue"
            onClick={maior}
          >
            Maior!
          </button>
        </div>
      </div>
    </Fragment>
  );
}

const styles = {
  button: {
    width: "100px",
    margin: "8px"
  }
};
