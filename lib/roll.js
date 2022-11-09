function roll_dice(sides, dice, rolls) {

    var results = [];

    for (i = 0; i<rolls; i++){

        var number = 0;

        for (j = 0; j<dice; j++){
            number += Math.floor(Math.random() * 6) + 1
        }

        results.push(number)
    }

    return results;

}