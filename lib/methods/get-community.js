'use strict';

// node core modules

// 3rd party modules
const _ = require('lodash');

// internal modules
const { omitDefaultRequestParams, constructError } = require('./utils');
const { getCommunity: parser } = require('../response-parsers');

const qsValidParameters = ['communityUuid'];

/**
 * This is the callback called with the results of @
 * @callback getCommunityCallback
 * @param {Object}   err                              Populated with error object if error occurred, otherwise null.
 * @param {Object}   community                        Object populated with details for the requested community.
 * @param {String}   community.id                     Id of the community
 * @param {String}   community.title                  Title of the community
 * @param {String}   community.summary                Summary of the community
 * @param {String}   community.content                Content of the community
 * @param {Date}     community.published              Published date of the community
 * @param {Object}   community.author                 Author of the community
 * @param {String}   community.author.name            Name of author of the community
 * @param {String}   community.author.userId          User id of the author of the community
 * @param {String}   community.author.state           State of the author of the community
 * @param {String}   community.author.email           Email of the author of the community
 * @param {Boolean}  community.author.external        External status of the author of the community
 * @param {Date}     community.updated                Updated date of the community
 * @param {Object}   community.contributer            Contributer to the community
 * @param {String}   community.contributer.name       Name of contributer to the community
 * @param {String}   community.contributer.userId     User id of the contributer to the community
 * @param {String}   community.contributer.state      State of the contributer to the community
 * @param {String}   community.contributer.email      Email of the contributer to the community
 * @param {Boolean}  community.contributer.external   External status of the contributer to the community
 * @param {Object}   community.links                  A dynamic object where each property name is a link relation, and each value is the href for that link relation
 * @param {Number}   community.membercount            Member count of the community
 * @param {String}   community.communityType          Type of the community
 */

/**
 * Get all details for a community given its id.
 *
 * @param  {String}                 communityUuid     URL parameter that is unique for every community.
 * @param  {Object}                 options           Additional information required by building http request.
 * @param  {getCommunityCallback}   callback          Called with `(err, community)`
 */
function getCommunity(communityUuid, options, callback) {
  const { httpClient } = this;
  if (!communityUuid) {
    const error = constructError('{{ communityUuid }} must be defined in [getCommunity] request', 404);
    callback(error);
    return;
  }

  const query = { communityUuid };

  // construct the request options
  const requestOptions = _.merge({}, omitDefaultRequestParams(options), {
    qs: _.pick(query, qsValidParameters),
    headers: {
      accept: 'application/atom+xml',
    },
    uri: '{ authType }/service/atom/community/instance',
  });

  httpClient.makeRequest(requestOptions, (requestError, response, body) => {
    if (requestError) {
      callback(requestError);
      return;
    }

    const { statusCode, headers: { 'content-type': contentType } } = response;
    // expected
    // status codes: 200, 403, 404
    // content-type: application/atom+xml
    if (!response || statusCode !== 200) {
      const error = constructError(body || 'received response with unexpected status code', statusCode);
      callback(error);
      return;
    }

    if (!(response.headers && contentType.startsWith('application/atom+xml'))) {
      const error = constructError(`received response with unexpected content-type ${contentType}`, 401);
      callback(error);
      return;
    }

    callback(null, parser(body));
  });
}

module.exports = getCommunity;
