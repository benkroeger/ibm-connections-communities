'use strict';

// node core modules

// 3rd party modules
const _ = require('lodash');
const { parseXMLNode } = require('oniyi-utils-xml');

// internal modules
const xpath = require('../xpath-select');
const { toDate, parseUserInfo } = require('./utils');

const linkRelToNameMap = {
  self: 'self',
  edit: 'edit',
};

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

const parseEntryNode = xmlNode =>
  parseXMLNode(
    xmlNode,
    {
      id: 'string(atom:id)',
      title: 'string(atom:title[@type="text"])',
      summary: 'string(atom:summary[@type="text"])',
      content: 'string(atom:content[@type="html"])',
      published: { selector: 'string(atom:published)', transform: toDate },
      author: { selector: 'atom:author', transform: parseUserInfo },
      updated: { selector: 'string(atom:updated)', transform: toDate },
      contributor: { selector: 'atom:contributor', transform: parseUserInfo },
      category: 'string(atom:category[@scheme="http://www.ibm.com/xmlns/prod/sn/type" ]/@term)',
      links: { selector: 'atom:link', transform: parseLinks, multi: true },
      membercount: 'snx:membercount',
      communityType: 'snx:communityType',
    },
    xpath
  );

module.exports = xmlResponse => parseEntryNode(xpath('atom:entry', xmlResponse, true));
