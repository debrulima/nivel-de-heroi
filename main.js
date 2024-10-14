// Funcao para classificar o rank do heroi
function rankHeroi () {

    //Armazenamento do nome e a quantidade de XP do heroi
    let nome = prompt("Digite o nome do heroi: ");
    let experiencia = parseInt(prompt("Digite a quantidade de XP do heroi: "));

    //Armazenamento do nivel do heroi
    let nivel;

    //Estrutura de classificacao
    if (experiencia < 1000) {
        nivel = "Ferro";
    } else if (experiencia >= 1001 && experiencia <= 2000) {
        nivel = "Bronze";
    } else if (experiencia >= 2001 && experiencia <= 5000) {
        nivel = "Prata";
    } else if (experiencia >= 5001 && experiencia <= 7000) {
        nivel = "Ouro";
    } else if (experiencia >= 7001 && experiencia <= 8000) {
        nivel = "Platina";
    } else if (experiencia >= 8001 && experiencia <= 9000) {
        nivel = "Ascendente";
    } else if (experiencia >= 9001 && experiencia <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    //Saida
    console.log(`O Heroi de nome ${nome} esta no nivel de ${nivel}.`);

    rankHeroi();
}