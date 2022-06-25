'use strict';

let packageJSON = require('package-json');

module.exports = async function fetchEmberVersions(options = {}) {
  let _packageJSON = options.packageJSON || packageJSON;

  try {
    let data = await _packageJSON('ember-source', { allVersions: true });

    return Object.keys(data.versions);
  } catch (err) {
    if (options.logErrors) {
      console.log(err.stack);
      throw err;
    }
    return [];
  }
};
