'use strict';

const alfy = require('alfy');

const ingredient = alfy.input;

alfy.output([{
    title: 'Is Vegan?',
    subtitle: `${ingredient} is totally vegan!`,
    arg: 'Vegan!'
}]);
