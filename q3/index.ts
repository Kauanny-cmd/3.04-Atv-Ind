export type ComidaDePet = "insetos" | "frutas" | "plantas" | "sementes" | "vegetais";

export abstract class PequenoRoedor {
    readonly especie: string;
    felicidade: number = 0;
  
    constructor(especie: string) {
      this.especie = especie;
    }

    abstract comer(comida: ComidaDePet): boolean; 
  
    estaFeliz(): boolean {
      return this.felicidade > 0;
    }
} 

export class Furao extends PequenoRoedor {
    constructor() {
      super("Furão"); 
    }
  
    cavar(): void {
      this.felicidade += 1;
    }
  
    comer(comida: ComidaDePet): boolean {
      return comida === "insetos" || comida === "plantas" || comida === "sementes" || comida === "vegetais";
    }
}

export class Hamster extends PequenoRoedor{
    constructor(){
        super('Hamster');
    }

    correr(): void{
        this.felicidade += 1;
    }

    comer(): boolean {
        return true;
    }
}