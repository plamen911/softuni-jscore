// https://judge.softuni.bg/Contests/Compete/Index/633#3
'use strict';

function solve(ballots) {
    let systems = {};
    for (let i = 0; i < ballots.length; i++) {
        let ballot = ballots[i];
        let systemName = ballot.system;
        let candidateName = ballot.candidate;
        let votes = Number(ballot.votes);
        if (!systems.hasOwnProperty(systemName)) {
            systems[systemName] = {};
        }
        if (!systems[systemName].hasOwnProperty(candidateName)) {
            systems[systemName][candidateName] = 0;
        }
        systems[systemName][candidateName] += votes;
    }

    let winnersBySystem = {};
    let finalResults = {};
    let grandTotal = 0;
    for (let systemName in systems) {
        let totalVotes = 0;
        let maxVote = -1;
        let candidateWithMaxVote = '';
        for (let candidateName in systems[systemName]) {
            let vote = Number(systems[systemName][candidateName]);
            if (maxVote < vote) {
                maxVote = vote;
                candidateWithMaxVote = candidateName;
            }

            totalVotes += Number(systems[systemName][candidateName]);
        }
        winnersBySystem[systemName] = {};
        winnersBySystem[systemName][candidateWithMaxVote] = totalVotes;

        if (!finalResults.hasOwnProperty(candidateWithMaxVote)) {
            finalResults[candidateWithMaxVote] = 0;
        }
        finalResults[candidateWithMaxVote] += totalVotes;
        grandTotal += totalVotes;
    }

    let winnerVotes = -1;
    let winnerName = '';
    for (let candidateName in finalResults) {
        if (winnerVotes < finalResults[candidateName]) {
            winnerVotes = finalResults[candidateName];
            winnerName = candidateName;
        }
    }

    if (winnerVotes > grandTotal / 2) {
        console.log(`${winnerName} wins with ${winnerVotes} votes`);
        let runnerUpName = getRunnerUpName(finalResults, winnerName);
        if (runnerUpName === '') {
            console.log(`${winnerName} wins unopposed!`);
        } else {
            console.log(`Runner up: ${runnerUpName}`);

            let runnerUpSystems = {};
            for (let systemName in winnersBySystem) {
                for (let candidateName in winnersBySystem[systemName]) {
                    if (candidateName === runnerUpName) {
                        runnerUpSystems[systemName] = Number(winnersBySystem[systemName][candidateName]);
                    }
                }
            }

            let tuples = [];
            for (let key in runnerUpSystems) tuples.push([key, runnerUpSystems[key]]);

            tuples.sort(function (a, b) {
                a = a[1];
                b = b[1];

                return a < b ? -1 : (a > b ? 1 : 0);
            });

            tuples.reverse();

            for (let i = 0; i < tuples.length; i++) {
                let key = tuples[i][0];
                let value = tuples[i][1];

                console.log(`${key}: ${value}`);
            }
        }

    } else {
        let runnerUpName = getRunnerUpName(finalResults, winnerName);
        let runnerUpVotes = finalResults[runnerUpName];

        let winnerVotesInPercentage = calcPercent(winnerVotes, grandTotal);
        let runnerUpVotesInPercentage = calcPercent(runnerUpVotes, grandTotal);

        console.log(`Runoff between ${winnerName} with ${winnerVotesInPercentage}% and ${runnerUpName} with ${runnerUpVotesInPercentage}%`);
    }
    
    function getRunnerUpName(finalResults, winnerName) {
        let winnerVotes = -1;
        let runnerUpName = '';
        for (let candidateName in finalResults) {
            if (candidateName === winnerName) continue;
            if (winnerVotes < finalResults[candidateName]) {
                winnerVotes = finalResults[candidateName];
                runnerUpName = candidateName;
            }
        }

        return runnerUpName;
    }

    function calcPercent(num, total) {
        return Math.floor(100 / total * num);
    }
}

solve([ { system: 'Theta', candidate: 'Kim Jong Andromeda', votes: 10 },
    { system: 'Tau',   candidate: 'Kim Jong Andromeda', votes: 200 },
    { system: 'Tau',   candidate: 'Flying Shrimp',      votes: 150 } ]);

// solve([ { system: 'Tau',     candidate: 'Flying Shrimp', votes: 150 },
//     { system: 'Tau',     candidate: 'Space Cow',     votes: 100 },
//     { system: 'Theta',   candidate: 'Space Cow',     votes: 10 },
//     { system: 'Sigma',   candidate: 'Space Cow',     votes: 200 },
//     { system: 'Sigma',   candidate: 'Flying Shrimp', votes: 75 },
//     { system: 'Omicron', candidate: 'Flying Shrimp', votes: 50 },
//     { system: 'Omicron', candidate: 'Octocat',       votes: 75 } ]);

// solve([ { system: 'Theta', candidate: 'Flying Shrimp', votes: 10 },
//     { system: 'Sigma', candidate: 'Space Cow',     votes: 200 },
//     { system: 'Sigma', candidate: 'Flying Shrimp', votes: 120 },
//     { system: 'Tau',   candidate: 'Space Cow',     votes: 15 },
//     { system: 'Sigma', candidate: 'Space Cow',     votes: 60 },
//     { system: 'Tau',   candidate: 'Flying Shrimp', votes: 150 } ]);

// solve(
//     [   { system: 'Tau',     candidate: 'Flying Shrimp', votes: 150 },
//         { system: 'Tau',     candidate: 'Space Cow',     votes: 100 },
//         { system: 'Theta',   candidate: 'Space Cow',     votes: 10 },
//         { system: 'Sigma',   candidate: 'Space Cow',     votes: 200 },
//         { system: 'Sigma',   candidate: 'Flying Shrimp', votes: 75 },
//         { system: 'Omicron', candidate: 'Flying Shrimp', votes: 50 },
//         { system: 'Omicron', candidate: 'Octocat',       votes: 75 } ]
// );