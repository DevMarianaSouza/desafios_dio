class Heroi {
    constructor (nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
     atacar() {
        let ataque; 

        if (this.tipo == "mago") {
            ataque = "usou magia";
        }else if (this.tipo == "guerreiro") {
            ataque = "usou espada";
        }else if (this.monge == "monge") {
            ataque = "usou artes marciais"
        }else if (this.tipo == "ninja") {
            ataque = "usou shuriken"
        }else
            ataque = "atacou de forma desconhecida"
        
        console.log(`O ${this.tipo} atacou usado ${ataque}`);
    }
}   

const heroi1 = new Heroi("Gandalf", 150, "mago");
const heroi2 = new Heroi("Arthur", 35, "guerreiro");
const heroi3 = new Heroi("Liu Kang", 28, "monge");
const heroi4 = new Heroi("Naruto", 17, "ninja");

// Testando o método atacar
heroi1.atacar();  // O mago atacou usando magia
heroi2.atacar();  // O guerreiro atacou usando espada
heroi3.atacar();  // O monge atacou usando artes marciais
heroi4.atacar();  // O ninja atacou usando shuriken