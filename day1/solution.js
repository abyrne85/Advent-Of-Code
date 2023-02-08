const fs = require('fs');

const file = process.argv[2] === 'demo' ? 'demo.txt' : 'data.txt';
const data = fs.readFileSync(file, 'utf8');
const calories = data.toString().split('\n');
const elves = getElves(calories);
const solution = getHighestThreeElves(elves);

function getHighestThreeElves(elves){
	const sortedElves = elves.sort().reverse();

	return sortedElves[0] + sortedElves[1] + sortedElves[2];
}

function getElves(calories){
	let sum = 0;
	const elves = [];
	calories.forEach((c, i) => {
		if(c !== '') sum += parseInt(c);
		else {
			elves.push(sum);
			sum = 0;
		};
	});


	return elves;
}



