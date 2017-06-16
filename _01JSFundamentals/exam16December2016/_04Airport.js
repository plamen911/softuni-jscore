// https://judge.softuni.bg/Contests/Practice/Index/372#3
'use strict';

function solve(input) {
	let planesLanded = {};
	let airports = {};

    for (let i = 0; i < input.length; i++) {
        if (!input[i]) continue;
        let [planeID, town, passengersCount, action] = input[i].trim().split(/\s+/);
        passengersCount = Number(passengersCount);

		// check for invalid records
		if (action === 'depart' && !planesLanded.hasOwnProperty(planeID)) {
			continue;
		}
		if (action === 'land' && planesLanded.hasOwnProperty(planeID)) {
            continue;
		}

        if (!airports.hasOwnProperty(town)) {
            airports[town] = {
                arrivals: 0,
                departures: 0,
				planes: {}
            }
        }
        if (!airports[town].planes.hasOwnProperty(planeID)) {
            airports[town].planes[planeID] = planeID;
        }

        switch (action) {
			case 'land':
                planesLanded[planeID] = input[i];
                airports[town].arrivals += passengersCount;
                break;
            case 'depart':
			default:
				delete planesLanded[planeID];
                airports[town].departures += passengersCount;
				break;
		}
    }

    console.log(`Planes left:`);
    Object.keys(planesLanded).sort((a, b) => a.localeCompare(b)).forEach(a => console.log(`- ${a}`));

    function sortByArrivalsAndTownName(a, b) {
        if (airports[a].arrivals === airports[b].arrivals) {
            return a.localeCompare(b);
        }
        return airports[b].arrivals - airports[a].arrivals;
    }

    let airportsSortedKeys = Object.keys(airports).sort(sortByArrivalsAndTownName);
    airportsSortedKeys.forEach(town => {
        console.log(town);
        let airport = airports[town];
        console.log(`Arrivals: ${airport.arrivals}`);
        console.log(`Departures: ${airport.departures}`);
        let planes = Object.keys(airport.planes);
        if (planes.length > 0) {
            console.log(`Planes:`);
            planes
                .sort((a, b) => a.localeCompare(b))
                .forEach(a => console.log(`-- ${a}`));
        }
    });
}

// solve([
// 	"Boeing474 Madrid 300 land",
// 	"AirForceOne WashingtonDC 178 land",
// 	"Airbus London 265 depart",
// 	"ATR72 WashingtonDC 272 land",
// 	"ATR72 Madrid 135 depart"
// ]);

solve([
    'RTA72 London -10 land',
    'RTA#72 Brussels -110 depart',
    'RTA7!2 Warshaw 350 land',
    'RTA72 Riga -201 depart',
    'rta72 riga -13 land',
    'rta Riga -200 depart',
]);