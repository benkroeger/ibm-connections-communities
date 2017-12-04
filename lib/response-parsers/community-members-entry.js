'use strict';

// node core modules

// 3rd party modules
const _ = require('lodash');
const { parseXMLNode } = require('oniyi-utils-xml');

// internal modules
const xpath = require('../xpath-select');
const { toDate, parseUserInfo, parseOpenSearchElements } = require('./utils');
const roleComponents = require('../constants/role-components.json');

const linkRelToNameMap = {
  self: 'self',
  edit: 'edit',
};
const openSearchElements = ['totalResults', 'startIndex', 'itemsPerPage'];

const parseLinks = nodes =>
  _.reduce(
    nodes,
    (result, node) => {
      const link = parseXMLNode(
        node,
        {
          rel: 'string(@rel)',
          href: 'string(@href)',
        },
        xpath
      );
      const { [link.rel || '']: name } = linkRelToNameMap;
      /* beautify preserve:start */
      return Object.assign(result, { [name]: link });
      /* beautify preserve:end */
    },
    {}
  );

const invertedRoleComponents = _.invert(roleComponents);

const parseRole = (node) => {
  const { component, value } = parseXMLNode(
    node,
    {
      component: 'string(@component)',
      value: 'string(.)',
    },
    xpath
  );

  const { [component]: name } = invertedRoleComponents;
  return {
    [name]: value,
  };
};

const parseEntryNode = xmlNode =>
  parseXMLNode(
    xmlNode,
    {
      id: 'string(atom:id)',
      title: 'string(atom:title[@type="text"])',
      summary: 'string(atom:summary[@type="text"])',
      category: 'string(atom:category[@scheme="http://www.ibm.com/xmlns/prod/sn/type" ]/@term)',
      orgId: 'string(snx:orgId)',
      published: { selector: 'string(atom:published)', transform: toDate },
      updated: { selector: 'string(atom:updated)', transform: toDate },
      role: { selector: 'snx:role', transform: parseRole },
      contributor: { selector: 'atom:contributor', transform: parseUserInfo },
      links: { selector: 'atom:link', transform: parseLinks, multi: true },
    },
    xpath
  );

module.exports = (xmlResponse) => {
  const selectorFeed = xpath('atom:feed', xmlResponse, true);

  // if request without userid/email query parameters has been made,
  // parse regular Xml feed response
  if (selectorFeed) {
    const feed = parseOpenSearchElements(selectorFeed, openSearchElements);

    const selectorEntries = xpath('atom:entry', selectorFeed);
    const communityMembers = _.map(selectorEntries, member => parseEntryNode(member));

    return _.assign({ communityMembers }, feed);
  }

  // if feed selector is falsy, that means that request has been made
  // with userid/email query param. In that case, we have only a single
  // entry in Xml response. Simply parse it and return to the caller.
  return parseEntryNode(xpath('atom:entry', xmlResponse, true));
};
