
goog.module('sample');

const idom = goog.require('incrementaldom');
const idomApi = goog.require('google3.javascript.template.soy.api_idom');
const tpl = goog.require('sample.tpl.incrementaldom');


/**
 * @const
 * @type {!idomApi.IncrementalDomRenderer}
 */
const renderer_ = new idomApi.IncrementalDomRenderer();


/**
 * @public
 */
function render() {
  const docFrag = document.createDocumentFragment();
  idom.patch(docFrag, () => {
    tpl.sample(renderer_);
  });
  document.body.appendChild(docFrag);
}

/**
 * @public
 */
function run() {
  console.log('Beginning sample...');
  render();
  console.log('Sample done.');
}


setTimeout(function() {
    run();
}, 1000);
