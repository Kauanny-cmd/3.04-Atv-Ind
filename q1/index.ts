export class Animal {
    #nome: string;
    #caracteristicas: string[];
  
    constructor(nome: string, caracteristicas: string[]) {
      this.#nome = nome;
      this.#caracteristicas = caracteristicas;
    }
  
    exibirAnimal(): void {
      console.log(`Nome do animal: ${this.#nome}`);
    }
  
    cadastrar(caracteristica: string): void {
      this.#caracteristicas.push(caracteristica);
    }
  
    exibirCaracteristica(): void {
      const index = Math.floor(Math.random() * this.#caracteristicas.length);
      console.log(`Características do animal: ${this.#caracteristicas[index]}`);
    }
  }