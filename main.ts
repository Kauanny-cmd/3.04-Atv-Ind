import {Animal} from './q1'
import { Filhote } from './q2';
import { Furao, Hamster } from './q3';

// Questão 1

const gato = new Animal("Totó", ["Peludo", "Caçador"]);

gato.exibirAnimal();
gato.cadastrar('Teimoso');
gato.exibirCaracteristica();

console.log("------------------------------------------------");

// Questão 2


const filhote = new Filhote(["preto", "branco"], 5);
console.log(filhote.cores); 
console.log(filhote.pelagem); 
console.log(filhote.tutor); 

filhote.adotar("Pedro");
console.log(filhote.tutor); 

