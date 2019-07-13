/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-useless-escape */
/* eslint-disable no-shadow */
/* eslint-disable func-names */
/* eslint-disable comma-spacing */
/* eslint-disable one-var-declaration-per-line */
/* eslint-disable one-var */
/* eslint-disable no-unused-vars */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */
/* eslint-disable prefer-arrow-callback */
// eslint-disable-next-line func-names
(function (factory) {
  const globalObject = typeof window === 'object' && window
    || typeof self === 'object' && self;
  if (typeof exports !== 'undefined') {
    factory(exports);
  } else if (globalObject) {
    globalObject.hljs = factory({});
    if (typeof define === 'function' && define.amd) {
      define([], () => globalObject.hljs);
    }
  }
  // eslint-disable-next-line func-names
  // eslint-disable-next-line prefer-arrow-callback
}(function (hljs) {
  var ArrayProto = [], objectKeys = Object.keys;
  var languages = {}, aliases = {};
  // Regular expressions used throughout the highlight.js library.
  var noHighlightRe = /^(no-?highlight|plain|text)$/i,
    languagePrefixRe = /\blang(?:uage)?-([\w-]+)\b/i,
    fixMarkupRe = /((^(<[^>]+>|\t|)+|(?:\n)))/gm;
  var spanEndTag = '</span>';
  var options = {
    classPrefix: 'hljs-',
    tabReplace: null,
    useBR: false,
    languages: undefined,
  };
  function highlight(name, value, ignore_illegals, continuation) {
    function escapeRe(value) {
      return new RegExp(value.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'm');
    }
  }
  function initHighlighting() {
    if (initHighlighting.called) { return; }
    initHighlighting.called = true;

    var blocks = document.querySelectorAll('pre code');
  }
  function initHighlightingOnLoad() {
    addEventListener('DOMContentLoaded',initHighlighting,false);
    addEventListener('load', initHighlighting, false);
  }
  hljs.initHighlightingOnLoad = initHighlightingOnLoad;
  return hljs;
}));
