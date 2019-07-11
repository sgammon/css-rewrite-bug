
goog.module('sample');

const soy = goog.require('goog.soy');
const tpl = goog.require('sample.tpl');


const el = soy.renderAsElement(
  tpl.sample,
  {},
  {});

document.body.appendChild(el);
console.log('Sample done.');
