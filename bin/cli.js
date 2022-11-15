#!/usr/bin/env node

import minimist from 'minimist'
import { roll_dice } from "/lib/roll.js"

const args = minimist(process.argv.slice(2))

// create constants for sides, dice, and rolls.
const sides_arg = args.sides || 6
const dice_arg = args.sides || 2
const rolls_arg = args.rolls || 1

// print out the results using stringify
console.log(JSON.stringify(roll(args.sides, args.dice, args.rolls)));
// all done!
process.exit(0);