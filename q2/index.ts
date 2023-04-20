interface FilhoteInterface {
     cores: string[];
     pelagem: number;
     tutor: string | undefined;
  }
  
export class Filhote implements FilhoteInterface {
     cores: string[];
     pelagem: number;
     tutor: string | undefined;
  
    constructor(cores: string[], pelagem: number) {
      this.cores = cores;
      this.pelagem = pelagem;
      this.tutor = undefined;
    }
  
    adotar(tutor: string) {
      this.tutor = tutor;
    }
}