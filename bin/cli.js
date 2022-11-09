#!/usr/bin/env node

import minimist from 'minimist'
import { roll } from "/lib/roll.js"

const args = minimist(process.argv.slice(2))

// create constants for sides, dice, and rolls.
const sides = args.sides ? args.sides: 6;
const dice = args.dice ? args.dice: 2;
const rolls = args.rolls ? args.rolls: 1;

let results = roll_dice(sides, dice, rolls)

// print out the results using stringify
console.log(JSON.stringify({"sides": sides,"dice": dice, "rolls": rolls,"results": results}))  
// all done!
process.exit(0);