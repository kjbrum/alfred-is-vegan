'use strict';

const alfy = require('alfy');
const isVegan = require('is-vegan');
const veganList = require('./node_modules/is-vegan/src/util/canbevegan.json');
const nonVeganList = require('./node_modules/is-vegan/src/util/nonvegan.json');

const ingredient = alfy.input;

// Filter vegan list
const veganItems = alfy
    .inputMatches(veganList)
    .map(x => ({
        title: `${x} ✅`,
        icon: {
            path: ' '
        }
    }));

// Filter non-vegan list
const nonVeganItems = alfy
    .inputMatches(nonVeganList)
    .map(x => ({
        title: `${x} ❌`,
        icon: {
            path: ' '
        }
    }));

// Return the output
if (veganItems.length || nonVeganItems.length) {
    alfy.output([
        ...veganItems,
        ...nonVeganItems
    ].sort());
} else {
    alfy.output([{
        title: 'Oops!',
        subtitle: 'No matches found, try a different ingredient.',
        icon: {
            path: alfy.icon.error
        }
    }]);
}
