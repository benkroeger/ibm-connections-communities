'use strict';

// node core modules

// 3rd party modules
const _ = require('lodash');

// internal modules
const { omitDefaultRequestParams, constructError } = require('./utils');
const { communityMembers: parser } = require('../response-parsers');

const qsValidParameters = ['communityUuid', 'userid', 'email', 'page', 'ps', 'role', 'since', 'sortBy', 'sortOrder'];

/**
 * Retrieve all members that belong to a certain community.
 *
 * @param  {Object}   query                   Query object
 * @param  {String}   query.communityUuid     URL parameter that is unique for every community.
 * @param  {Object}   options                 Additional information required by building http request.
 * @param  {Function} callback                [description]
 */
function communityMembers(query = {}, options, callback) {
  const { httpClient } = this;
  const { communityUuid } = query;
  if (!communityUuid) {
    const error = constructError('{{ query.communityUuid }} must be defined in [communityMembers] request', 404);
    callback(error);
    return;
  }

  // construct the request options
  const requestOptions = _.merge({}, omitDefaultRequestParams(options), {
    qs: _.pick(query, qsValidParameters),
    headers: {
      accept: 'application/atom+xml',
    },
    uri: '{ authType }/service/atom/community/members',
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

module.exports = communityMembers;
