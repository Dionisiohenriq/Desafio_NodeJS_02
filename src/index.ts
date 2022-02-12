

/**
 * Required External Modules
 */
 import * as dotenv from "dotenv";
 import express from "express";
 import cors from "cors";
 import helmet from "helmet";
 
 dotenv.config();
 
 /**
  * App Variables
  */
 
 if (!process.env.PORT) {
	 process.exit(1);
 }
 
 const PORT: number = parseInt(process.env.PORT as string, 10);
 
 const app = express();

 const nome1:string = 'Ubuntu1 Silva';
 const idade1:number = 33;
 const peso1:number = 88.50;
 const altura1:number = 1.65;
 const ehDev1:boolean = true;
 
 const nome2:string = 'Ubuntu2 Silva';
 const idade2:number = 33;
 const peso2:number = 88.50;
 const altura2:number = 1.65;
 const ehDev2:boolean = true;
 
 const nome3:string = 'Ubuntu1 Silva';
 const idade3:number = 33;
 const peso3:number = 88.50;
 const altura3:number = 1.65;
 const ehDev3:boolean = true;
 

 /**
  *  App Configuration
  */

 app.use(helmet());
 app.use(cors());
 app.use(express.json());
 
 /**
  * Server Activation
  */
 
 app.listen(PORT, () => {
	 console.log(`Listening on port ${PORT}\n`);
 
 // 		REQUERIMENTOS:
 // R01 – SOMAR A IDADE DE TODOS OS UBUNTUS
 // R02 – AGRUPAR O NOME DE TODOS OS UBUNTUS
 // R03 – CALCULAR MÉDIA IMC DE TODOS UBUNTOS
 // R04 – CONTAR QUANTOS UBUNTUS SÃO DEVS
 // R05 – EXIBIR SOMENTE UBUNTUS COM SOBRENOME SILVA

	 // CÓDIGO PARA ATENDER OS REQUERIMENTOS
	 // R01, R02, R03, R04, R05

// R01
let totalIdadesUbuntus = idade1 + idade2 + idade3;
console.log(`Total das idades dos Ubuntus: ${totalIdadesUbuntus}\n`);


// R02
let nomeDosUbuntus = `Nome1: ${nome1} Nome2: ${nome2} Nome3: ${nome3}`;
console.log(`Nomes dos Ubuntus:\n${nomeDosUbuntus}\n`)


// R03
let imcUbuntuArray:number[] = [];
imcUbuntuArray.push(peso1 * Math.pow(altura1, 2));
imcUbuntuArray.push(peso2 * Math.pow(altura2, 2));
imcUbuntuArray.push(peso3 * Math.pow(altura3, 2));

let imc1 = peso1 * (Math.pow(altura1, 2));
let imc2 = peso2 * (Math.pow(altura2, 2));
let imc3 = peso3 * (Math.pow(altura3, 2));
console.log(`Imc1: ${imc1.toFixed(2)} Imc2: ${imc2.toFixed(2)} Imc3: ${imc3.toFixed(2)}\n`);

let imcMedia = (imc1 + imc2 + imc3) / 3;
let mediaImcUbuntus = imcUbuntuArray.reduce( (media, item) => media + item) / 3;

console.log(`Média dos Imcs: ${imcMedia.toFixed(2)} ${mediaImcUbuntus.toFixed(2)}\n`);


// R04
let Devs: boolean[] = [ehDev1, ehDev2, ehDev3];
let resultado: any = {Devs: 0, NaoDevs: 0};

for(let i in Devs){
    if(i) resultado.Devs += 1;
    else resultado.NaoDevs += 1;
}
console.log("Qtd de devs:");
console.log(resultado);


// R05
function IsSilva(nome: string){
    return nome.includes("Silva");
}

let nomes:string[] = [nome1,nome2,nome3];
let silvas:string[] = nomes.filter(IsSilva);

console.log("\nSilvas:");
console.log(silvas);

 });
 