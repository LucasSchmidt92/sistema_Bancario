# sistema_Bancario


import { PersonagemTemporal } from './PersonagemTemporal';
import { FilaTemporal } from './FilaTemporal';

const fila = new FilaTemporal();

const p1 = new PersonagemTemporal("Homem de Ferro", "Terra-616", 1);
const p2 = new PersonagemTemporal("Doutor Estranho", "Terra-199999", 2);
const p3 = new PersonagemTemporal("Loki", "Terra-1130", 3);

fila.enfileirar(p1);
fila.enfileirar(p2);
fila.enfileirar(p3);

fila.exibirFila();

fila.desenfileirar();

fila.exibirFila();

console.log("Primeiro da fila atual:");
fila.primeiroDaFila()?.exibirInfo();

import { PersonagemTemporal } from './PersonagemTemporal';

export class FilaTemporal {
  private fila: PersonagemTemporal[] = [];

  enfileirar(personagem: PersonagemTemporal): void {
    this.fila.push(personagem);
    console.log(`${personagem.nome} foi adicionado à fila temporal.`);
  }

  desenfileirar(): PersonagemTemporal | undefined {
    if (this.estaVazia()) {
      console.log("A fila está vazia!");
      return undefined;
    }
    const personagem = this.fila.shift();
    console.log(`${personagem?.nome} foi enviado de volta para seu tempo.`);
    return personagem;
  }

  primeiroDaFila(): PersonagemTemporal | undefined {
    return this.fila[0];
  }

  estaVazia(): boolean {
    return this.fila.length === 0;
  }

  tamanho(): number {
    return this.fila.length;
  }

  exibirFila(): void {
    if (this.estaVazia()) {
      console.log("A fila está vazia!");
      return;
    }
    console.log("Fila Temporal:");
    this.fila.forEach((personagem) => personagem.exibirInfo());
  }
}

export class PersonagemTemporal {
  constructor(
    public nome: string,
    public universo: string,
    public assinaturaTemporal: number
  ) {}

  exibirInfo(): void {
    console.log(
      `Nome: ${this.nome} | Universo: ${this.universo} | Assinatura Temporal: ${this.assinaturaTemporal}`
    );
  }
}
