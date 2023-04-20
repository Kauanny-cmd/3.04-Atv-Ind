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

console.log("------------------------------------------------");

// Questão 3

const hamster = new Hamster();
console.log(hamster.especie); 
hamster.correr();
console.log(hamster.felicidade);
hamster.correr();
hamster.correr();
console.log(hamster.felicidade);
console.log(hamster.comer()); 

console.log("--------");

const furao = new Furao();
console.log(furao.especie); 
furao.cavar();
console.log(furao.felicidade);
furao.cavar();
furao.cavar();
console.log(furao.felicidade);
console.log(furao.comer('frutas'));
console.log(furao.comer('insetos')); 