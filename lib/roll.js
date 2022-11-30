import minimist from 'minimist';
const args = minimist(process.argv.slice(2));

export function roll(sides, dice, rolls) {

    var results = [];

    for (let i = 0; i<rolls; i++){

        var number = 0;

        for (let j = 0; j<dice; j++){
            number += Math.floor(Math.random() * sides) + 1
        }

        results.push(number)
    }

    const result = {
		"sides": sides,
		"dice": dice,
		"rolls": rolls,
		"results": results
	};

    return result;

}