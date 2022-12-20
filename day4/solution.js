const fs = require('fs');

const file = process.argv[2] === 'demo' ? 'demo.txt' : 'data.txt';
const elves = fs.readFileSync(file, 'utf8').split('\n');

const bags = getBags(elves);
const bagRanges = bags.map(bag => getBagRanges(bag));
const overlaps = getOverlaps(bagRanges);
console.log(overlaps);
function getBags(elves) {
	return elves.map(elf => [elf.split(',')[0], elf.split(',')[1]]);
}

function getBagRanges(bags){
	const bag = [];

	bags.forEach(b => {
		const start = b.split('-')[0];
		const end = b.split('-')[1];
		const range = [];
		
		for(let i = parseInt(start); i <= end; i++){
			range.push(i);
		}
	  bag.push(range);
	});
	return bag;
}


function getOverlaps(bagRanges){
	let overlapCount = 0;
	bagRanges.forEach(range => {
		const sortedByLength = range.sort((a, b) => a.length - b.length); 
		const hasOverlap = sortedByLength[0].some(d => sortedByLength[1].includes(d));
		if(hasOverlap)overlapCount = overlapCount + 1;
	});

	return overlapCount;
}


