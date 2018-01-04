'use strict';

// node core modules

// 3rd party modules
const _ = require('lodash');

// internal modules
const { omitDefaultRequestParams, constructError } = require('./utils');
const { getCommunity: parser } = require('../response-parsers');

const qsValidParameters = ['communityUuid'];

/**
 * Get all details for a community given its id.
 *
 * @param  {String}   communityUuid     URL parameter that is unique for every community.
 * @param  {Object}   options           Additional information required by building http request.
 * @param  {Function} callback          Called with `(err, community)`
 */
function getCommunity(communityUuid, options, callback) {
  const { httpClient } = this;
  if (!communityUuid) {
    const error = constructError('{{ query.communityUuid }} must be defined in [get] request', 404);
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
