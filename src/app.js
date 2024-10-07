/* eslint-disable */
import "./style.css";

function generadorDeDominios() {
  let pronoun = ["El", "Nosotros", "El", "Esta"];
  let adj = ["grande", "honesto", "corto", "rapido"];
  let noun = ["corredor", "escalador", "trabajador", "estudiante"];
  let ext = [".com", ".io", ".org", ".net"];

  for (let a = 0; a < pronoun.length; a++) {
    for (let b = 0; b < adj.length; b++) {
      for (let c = 0; c < noun.length; c++) {
        for (let d = 0; d < ext.length; d++) {
          console.log(pronoun[a] + adj[b] + noun[c] + ext[d]);
        }
      }
    }
  }
}
generadorDeDominios();
