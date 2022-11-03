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
        createCard("20/11", "DOMINGO", createGame("qatar", "16:00", "ecuador")) +

        createCard("21/11", "SEGUNDA", createGame("england", "13:00", "iran") + 
                                       createGame("senegal", "16:00", "netherlands") +
                                       createGame("united states", "19:00", "wales")) +

        createCard("22/11", "TERÇA", createGame("argentina", "10:00", "saudi arabia") +
                                     createGame("denmark", "13:00", "tunisia") +
                                     createGame("mexico", "16:00", "poland") +
                                     createGame("france", "19:00", "australia")) +

        createCard("23/11", "QUARTA", createGame("morocco", "10:00", "croatia") +
                                      createGame("germany", "13:00", "japan") +
                                      createGame("spain", "16:00", "costa rica") +
                                      createGame("belgium", "19:00", "canada")) +

        createCard("24/11", "QUINTA", createGame("switzerland", "10:00", "cameroon") +
                                      createGame("uruguay", "13:00", "south korea") +
                                      createGame("portugal", "16:00", "ghana") +
                                      createGame("brazil", "19:00", "serbia")) +

        createCard("25/11", "SEXTA", createGame("argentina", "10:00", "saudi arabia") +
                                     createGame("denmark", "13:00", "tunisia") +
                                     createGame("mexico", "16:00", "poland") +
                                     createGame("france", "19:00", "australia"))










