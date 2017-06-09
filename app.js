#!/usr/bin/env node
const program = require('commander');
const ice = require('iranian-calendar-events').default;

const { version } = require('./package.json');

const prettyPrint = data => JSON.stringify(data, null, 4);

program
  .version(version)
  .arguments('<year> [month] [day]')
  .action(async (y, m, d) => {
    // convert year and month to int
    const year = parseInt(y, 10);
    const month = parseInt(m, 10);
    const day = parseInt(d, 10);
    // final events output
    const events = await ice({ year, month, day });
    // pretty print events
    return console.log(prettyPrint(events));
  })
  .parse(process.argv);
