#!/usr/bin/env node
const program = require('commander');
const ice = require('iranian-calendar-events').default;

const { version } = require('./package.json');

const prettyPrint = data => JSON.stringify(data, null, 4);

program
  .version(version)
  .arguments('<year> [month]')
  .action(async (year, month) => {
    let events = [];
    if (!month) {
      events = await ice({ year });
    } else {
      events = await ice({ year, month });
    }
    console.log(prettyPrint(events));
  })
  .parse(process.argv);
