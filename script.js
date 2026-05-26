const choices = ["pedra", "papel", "tesoura"];

function play(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result = "";
    if (playerChoice === computerChoice) {
        result = "Empate!";
    } else if ((playerChoice === "pedra" && computerChoice === "tesoura") ||
               (playerChoice === "papel" && computerChoice === "pedra") ||
               (playerChoice === "tesoura" && computerChoice === "papel")) {
        result = "Você ganhou!";
    } else {
        result = "Computador ganhou!";
    }
    document.getElementById("result").innerHTML = `
        Você escolheu: ${playerChoice}<br>
        Computador escolheu: ${computerChoice}<br>
        ${result}
    `;
}