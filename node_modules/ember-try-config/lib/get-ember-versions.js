'use strict';

let array = require('lodash/array');
let sortVersions = require('./sort-versions');
let fetchEmberVersions = require('./fetch-ember-versions');

module.exports = async function getEmberVersions(maybeVersions) {
  let versions = maybeVersions ? maybeVersions : await fetchEmberVersions();

  return sortVersions(array.uniq([...versionsFromNpm(), ...versions]));
};

function versionsFromNpm() {
  return require('./known-ember-source-versions');
}
