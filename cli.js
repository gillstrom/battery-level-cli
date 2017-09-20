#!/usr/bin/env node
'use strict';
const batteryLevel = require('battery-level');
const meow = require('meow');
const toPercent = require('to-percent');

meow(`
	Usage
		$ battery-level
		55%
`);

batteryLevel().then(res => console.log(toPercent(res) + '%'));
