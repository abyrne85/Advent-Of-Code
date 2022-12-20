const fs = require('fs');

const file = process.argv[2] === 'demo' ? 'demo.txt' : 'data.txt';
const rounds = fs.readFileSync(file, 'utf8').split('\n');

console.log(rounds);

const elfA = [
	['A X', 4],
	['A Y', 8],
	['A Z', 3],
	['B X', 1],
	['B Y', 5],
	['B Z', 9],
	['C X', 7],
	['C Y', 2],
	['C Z', 6],
];

const elfB = [
	['A X', 3],
	['A Y', 4],
	['A Z', 8],
	['B X', 1],
	['B Y', 5],
	['B Z', 9],
	['C X', 2],
	['C Y', 6],
	['C Z', 7],
]

const totalElfA = getScores(elfA);
const totalElfB = getScores(elfB);

console.log(totalElfA, totalElfB);

function getScores(set){
	let score = 0; 
	rounds.forEach(d => {
		const hand = set.find(s => s[0] === d);
		score += hand[1];
	});
	return score;
}