'use strict';

// node core modules

// 3rd party modules
const _ = require('lodash');
const { parseXMLNode } = require('oniyi-utils-xml');

// internal modules
const xpath = require('../../xpath-select');
const communityMembersEntryParser = require('../entry/community-members-entry');


module.exports = xmlResponse => {
  const selectorFeed = xpath('/atom:feed')
};
