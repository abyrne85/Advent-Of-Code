const fs = require('fs');

const file = process.argv[2] === 'demo' ? 'demo.txt' : 'data.txt';
const bags = fs.readFileSync(file, 'utf8').split('\n');
const priorities = getPriorities();
const commonItems = getCommonItems(bags);

const priorityTotals = getTotalPriority();

console.log(priorityTotals);

function getTotalPriority(){
	let total = 0;
	console.log(priorities, commonItems);
	commonItems.forEach(item => {
		total += priorities.indexOf(item) + 1;
	});
	return total;
}


function getPriorities(){
	const alpha = Array.from(Array(26)).map((e, i) => i + 65);
	return [...alpha.map((x) => String.fromCharCode(x).toLowerCase()), ...alpha.map((x) => String.fromCharCode(x))];
}

function getCommonItems(bags){
	const commonItems = [];
	bags.forEach(b => {
		const bag1 = b.substr(0, b.length / 2);
		const bag2 = b.substr(b.length / 2, b.length -1);
		commonItems.push(...new Set(bag1.split('').filter(value => bag2.split('').includes(value)))) 
	});	
	return commonItems;
}