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

// fonction dynamic for input
function getUserinput(question) {
    let input = prompte(question);
    return input
}

// afficher all traject 
function afficherlestrajects() {
    for (let element in trips) {
        let traject = trips[element].id + " " +
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

afficherlestrajects();


// 4. Acheter un ticket

let Iddetrajet = getUserinput("entrer uour Identifiant du trajet :")

function checktrajet(trips, Iddetrajet) {
    let check;
    let trajet;
    for (let i in trips) {
        if (trips[i].id == Iddetrajet) {
            check = true
            trajet = trips[i]
        }
    };
    if (check) {
        console.log(" trajet existe")
        return trajet
    }
    else {
        return " trajet not existe "
    };
};

let output = checktrajet(trips, Iddetrajet)
console.log(output)

/// // vérifier qu'il reste au moins une place disponible ;

let trip = checktrajet(trips, Iddetrajet)

function checkforavailaiblePlaces(trip) {
    if (trip.availableSeats > 0) {
        return " seats available ";
    }
    else {
        return " train is full ";
    }
};

placedispo = checkforavailaiblePlaces(trip)
console.log(placedispo);


// créer une fonction to generate ticket ;
let username = getUserinput(" entrer your name : ")
function ticketgenerate(username, trip) {
    let ticket = {
        idTicket: tickets.length + 1,
        userName: username,
        depart: trip.departure,
        arrivée: trip.destination,
        tripId: trip.id,
        seatNumber: 50 - trip.availableSeats + 1,
        price: trip.price
    };
    tickets.push(ticket);
    trip.availableSeats = trip.availableSeats - 1;
    console.log(tickets)
    console.log(' Ticket acheté avec succès !')
};
let ticketsout = ticketgenerate(username, trip);
console.log(ticketsout)


// // 5. Afficher les tickets
function afficherlestickets(tickets) {
    for (let ticket in tickets) {
        if (ticket in tickets) {
            console.log(
                'Ticket : ', tickets[ticket].idTicket,
                'Passager :', tickets[ticket].userName,
                'Trajet : ', tickets[ticket].depart, "--->", tickets[ticket].arrivée,
                'Place : ', tickets[ticket].seatNumber,
                'Prix : ', tickets[ticket].price, " DH"
            )
        }
        else {
            console.log(" Aucun ticket enregistré ")
        }
    };
};
let ticketEnregistree = afficherlestickets(tickets);
console.log(ticketEnregistree)

// 6. Annuler un ticket

let ticketID = getUserinput(" entrer your Identifiant du ticket : ")
function Removeticket(tickets, ticketID) {
    let check;
    for (let i in tickets) {
        if (tickets[i].idTicket == ticketID)
            check = true
    };
    if (check) {
        tickets.splice(ticketID, 1);
        console.log(" Ticket annulé avec succès.");
        return tickets;
    }
    else {
        return " Ticket introuvable. "
    };
};

let removedticket = Removeticket(tickets, ticketID)
console.log(removedticket)

