// Projet Fin SAS 1 Youcode: Gestion d’un train en console “Railway Manager
const prompte = require('prompt-sync')();

const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];

const tickets = [];
let counttickets = 1
//
function getUserinput(question) {
    let input = prompte(question);
    return input
};


//
function afficherlestrajects() {
    for (let element in trips) {
        let traject =
            trips[element].id + " " +
            trips[element].departure + " --->  " +
            trips[element].destination +
            '\n' + " Départ : " + trips[element].departureTime +
            '\n' + " Arrivée : " + trips[element].arrivalTime +
            '\n' + " Prix : " + trips[element].price + "DH" +
            '\n' + " Places disponibles : " + trips[element].availableSeats
        console.log(traject)
        console.log("_____________________________________________")
    };

};

function checktrajet(trips, Iddetrajet) {
    for (let trip in trips) {
        if (trips[trip].id === Iddetrajet) {
            return trips[trip];
        };
    };
    return null;
};

// function checkforavailaiblePlaces(trip) {
//     if (trip.availableSeats > 0) {
//         return " seats available ";
//     }
//     else {
//         return " train is full ";
//     }
// };

function ticketgenerate(username, trip) {
    if (trip === null)
        return " trajet not found "
    else if (trip.availableSeats < 1)
        return "no places available "
    else {
        let ticket = {
            idTicket: counttickets,
            userName: username.toLowerCase(),
            start: trip.departure,
            End: trip.destination,
            tripId: trip.id,
            seatNumber: 51 - trip.availableSeats,
            price: trip.price
        };
        tickets.push(ticket);
        trip.availableSeats = trip.availableSeats - 1;
        counttickets++
        console.log(' Ticket acheté avec succès !')
        return ticket
    };
};

function afficherlestickets(tickets) {
    for (let ticket in tickets) {
        console.log(
            'Ticket : ', tickets[ticket].idTicket,
            'Passager :', tickets[ticket].userName,
            'Trajet : ', tickets[ticket].start, "--->", tickets[ticket].End,
            'Place : ', tickets[ticket].seatNumber,
            'Prix : ', tickets[ticket].price, " DH"
        )
    };
};


function Anulleticket(tickets, ticketID) {
    for (let i = 0; i < tickets.length; i++) {
        if (tickets[i].idTicket === ticketID) {
            tickets.splice(ticketID - 1, 1);
            return " Ticket annulé avec succès.";
        }
    };
    return "ticket introuvable"
};

function searchbyname(tickets, name) {
    let check;
    let foundtickets = [];
    for (let ticket in tickets) {
        if (tickets[ticket].userName === name) {
            check = true
            foundtickets.push(tickets[ticket])
        }
    };
    if (check) {
        for (let elem in foundtickets)
            return ('Ticket : ' + foundtickets[elem].idTicket +
                '  Passager :' + foundtickets[elem].userName +
                '  Trajet : ' + foundtickets[elem].start + " ---> " + foundtickets[elem].End +
                '  Place : ' + foundtickets[elem].seatNumber +
                '  Prix : ' + foundtickets[elem].price + "DH ")
    }
    else {
        return " ticket not found "
    }
};
// // 8. Filtrer les trajets

// let departville = getUserinput(" entre your ville de depart to filtre trajet : ")
// function filtrertraject(trips, departville) {
//     let foundville = [];
//     for (let element in trips) {
//         if (trips[element].departure === departville) {
//             foundville.push(trips[element]);
//         };
//     };
//     for (let i in foundville) {
//         console.log(
//             '\n', " Ville de départ  " + departville,
//             '\n' + " depart : ", foundville[i].departure, "---->", foundville[i].destination, ":", foundville[i].price
//         )
//     };
//     return foundville;
// };

// filtrertraject(trips, departville);

// // 9. Trier les trajets

// function Triertrajet(trips) {
//     for (let i = 0; i < trips.length; i++) {
//         for (let j = 0; j < trips.length - 1; j++) {
//             if (trips[j].price > trips[j + 1].price) {
//                 let temp = trips[j];
//                 trips[j] = trips[j + 1];
//                 trips[j + 1] = temp;
//             };
//         };
//     };
//     return trips
// };
// let Z = Triertrajet(trips)
// console.log(Z)

// Menu pricipal

let choix;
do {
    console.log("=================================")
    console.log("RAILWAY MANAGER")
    console.log("=================================")
    console.log("1. Afficher les trajets")
    console.log("2. Acheter un ticket")
    console.log("3. Afficher les tickets")
    console.log("4. Annuler un ticket")
    console.log("5. Rechercher un ticket")
    console.log("6. Filtrer les trajets")
    console.log("7. Trier les trajets")
    console.log("0. Quitter")

    choix = +getUserinput('\nvotre choix: ')

    switch (choix) {
        case 1:
            afficherlestrajects();
            break;
        case 2:
            let Iddetrajet = +getUserinput("entrer uour Identifiant du trajet :")
            let username = getUserinput(" entrer your name")
            let trip = checktrajet(trips, Iddetrajet);
            let yourticket = ticketgenerate(username, trip);
            console.log(yourticket)
            break;
        case 3:
            afficherlestickets(tickets);
            break;
        case 4:
            let ticketID = +getUserinput(" entrer your Identifiant du ticket to remove your ticket : ")
            let removeedticket = Anulleticket(tickets, ticketID);
            console.log(removeedticket)
        case 5:
            let name = getUserinput(" entrer your name to affiche ticket by name : ")
            let outputbyname = searchbyname(tickets, name);
            console.log(outputbyname)
        case 0:
            break;
    }
} while (choix != 0)