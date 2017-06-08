#!/usr/bin/env node
const program = require('commander');
const ice = require('iranian-calendar-events').default;

const { version } = require('./package.json');

const prettyPrint = data => JSON.stringify(data, null, 4);

program
  .version(version)
  .arguments('<year> [month]')
  .action(async (y, m) => {
    // convert year and month to int
    const year = parseInt(y, 10);
    const month = parseInt(m, 10);
    // final events output
    let events = [];
    // year or month events
    if (!month) {
      // year events
      events = await ice({ year });
    } else {
      // month events
      events = await ice({ year, month });
    }
    // pretty print events
    return console.log(prettyPrint(events));
  })
  .parse(process.argv);
