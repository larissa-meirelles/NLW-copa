function createGame(player1, hour, player2) {
    return `
        <li>
            <img src="assets/flags/icon=${player1}.svg" alt="${player1}">
            <strong>${hour}</strong>
            <img src="assets/flags/icon=${player2}.svg" alt="${player2}">
        </li>
    `
}

let delay = -0.3;

function createCard(date, day, games) {
    delay = delay + 0.3;
    return `
        <div class="card" style="animation-delay: ${delay}s">
            <h2>${date} <span>${day}</span></h2>
            <ul>${games}</ul>
        </div>
    `
}

document.querySelector("#cards").innerHTML = 
        createCard("20/11", "DOMINGO", createGame("Qatar", "16:00", "Ecuador")) +

        createCard("21/11", "SEGUNDA", createGame("England", "13:00", "Iran") + 
                                       createGame("Senegal", "16:00", "Netherlands") +
                                       createGame("United States", "19:00", "Wales")) +

        createCard("22/11", "TERÇA", createGame("Argentina", "10:00", "Saudi Arabia") +
                                     createGame("Denmark", "13:00", "Tunisia") +
                                     createGame("Mexico", "16:00", "Poland") +
                                     createGame("France", "19:00", "Australia")) +

        createCard("23/11", "QUARTA", createGame("Morocco", "10:00", "Croatia") +
                                      createGame("Germany", "13:00", "Japan") +
                                      createGame("Spain", "16:00", "Costa Rica") +
                                      createGame("Belgium", "19:00", "Canada")) +

        createCard("24/11", "QUINTA", createGame("Switzerland", "10:00", "Cameroon") +
                                      createGame("Uruguay", "13:00", "South Korea") +
                                      createGame("Portugal", "16:00", "Ghana") +
                                      createGame("Brazil", "19:00", "Serbia")) +

        createCard("25/11", "SEXTA", createGame("Argentina", "10:00", "Saudi Arabia") +
                                     createGame("Denmark", "13:00", "Tunisia") +
                                     createGame("Mexico", "16:00", "Poland") +
                                     createGame("France", "19:00", "Australia"))










