#!/usr/bin/env node

import minimist from 'minimist'
import {roll} from "/lib/roll.js"

const args = minimist(process.argv.slice(2))

// create constants for sides, dice, and rolls.
const sides = args.sides || 6
const dice = args.sides || 2
const rolls = args.rolls || 1

// print out the results using stringify
console.log(JSON.stringify(roll(sides, dice, rolls)))
// all done!
process.exit(0);