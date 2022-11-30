#!/usr/bin/env node

import minimist from 'minimist'
import {roll} from "../lib/roll.js"

const args = minimist(process.argv.slice(2))

// print out the results using stringify
console.log(JSON.stringify(roll(args.sides, args.dice, args.rolls)));