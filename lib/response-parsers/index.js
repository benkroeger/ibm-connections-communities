'use strict';

// node core modules

// 3rd party modules
const { ensureXMLDoc } = require('oniyi-utils-xml');

// internal modules
const communityParser = require('./community-entry');
const communityMembersParser = require('./community-members-entry');

const responseParser = {
  getCommunity: function communityEntryParserFunction(responseXML) {
    const response = ensureXMLDoc(responseXML);

    return communityParser(response);
  },

  communityMembers: function communityMembersParserFunction(responseXML) {
    const response = ensureXMLDoc(responseXML);

    return communityMembersParser(response);
  },
};

module.exports = responseParser;
