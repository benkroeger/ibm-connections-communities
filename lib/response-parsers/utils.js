'use strict';

// node core modules

// 3rd party modules
const { parseXMLNode } = require('oniyi-utils-xml');
const _ = require('lodash');

// internal modules
const xpath = require('../xpath-select');
const xmlNS = require('../constants/xml-namespaces.json');

const toDate = val => val && Date.parse(val);

const parseUserInfo = node => parseXMLNode(node, {
  name: 'string(atom:name/text())',
  userId: 'string(snx:userid/text())',
  state: 'string(snx:userState/text())',
  email: 'string(atom:email/text())',
  external: 'boolean(snx:isExternal/text())',
}, xpath);

const parseOpenSearchElements = (xmlDoc, elementsToBuild) =>
  elementsToBuild.reduce((result, element) =>
    _.assign(result, {
      [element]: parseInt(xmlDoc.getElementsByTagNameNS(xmlNS.openSearch, element)[0].textContent, 10),
    }), {});

module.exports = {
  toDate,
  parseUserInfo,
  parseOpenSearchElements,
};
