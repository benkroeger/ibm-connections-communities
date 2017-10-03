'use strict';

// node core modules

// 3rd party modules
const _ = require('lodash');
const { ensureXMLDoc } = require('oniyi-utils-xml');

// internal modules
const xpath = require('../xpath-select');
const communityMembersParser = require('./feed/community-members-feed');

const responseParser = {
  communityMembers: function communityMembersParserFunction(responseXML) {
    const response = ensureXMLDoc(responseXML);

    return {
      communityMembers: communityMembersParser(response),
    };
  },
};

module.exports = responseParser;
