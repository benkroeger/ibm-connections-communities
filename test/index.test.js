

// node core modules

// 3rd party modules
import test from 'ava';
import _ from 'lodash';

// internal modules
import { mock, record, persist } from './fixtures/http-mocking';
import serviceFactory from '../lib';

const { unmocked, username, password } = process.env;

test.before(() => (unmocked ? record() : mock()));
test.after(() => unmocked && persist());

test.beforeEach((t) => {
  const serviceOptions = {
    defaults: {},
  };

  if (unmocked) {
    Object.assign(serviceOptions.defaults, {
      auth: {
        user: username,
        pass: password,
      },
    });
  }

  const service = serviceFactory('https://apps.na.collabserv.com/communities/', serviceOptions);
  // const service = serviceFactory('https://lc.gish.de/wikis/', serviceOptions);

  const communityEntryProps = [
    'id',
    'title',
    'summary',
    'category',
    'orgId',
    'published',
    'updated',
    'role',
    'contributor',
    'links',
  ];

  const contributorProps = ['name', 'userId', 'state', 'email', 'external'];

  _.assign(t.context, {
    service,
    serviceOptions,
    communityEntryProps,
    contributorProps,
  });
});

/* Successful scenarios validations */

test.cb('validate retrieving community members feed, communityUuid provided', (t) => {
  const { service } = t.context;
  const query = {
    communityUuid: '5dd83cd6-d3a5-4fb3-89cd-1e2c04e52250',
  };

  service.communityMembers(
    query,
    {
      /* options */
    },
    (err, response) => {
      t.ifError(err);
      const {
        totalResults, startIndex, itemsPerPage, communityMembers,
      } = response;
      t.is(totalResults, 9);
      t.is(startIndex, 1);
      t.is(itemsPerPage, 10);

      t.true(_.isArray(communityMembers));
      t.is(communityMembers.length, totalResults);

      t.end();
    }
  );
});

test.cb('validate retrieving community member entry, communityUuid && email provided', (t) => {
  const { service, communityEntryProps, contributorProps } = t.context;
  const query = {
    communityUuid: '5dd83cd6-d3a5-4fb3-89cd-1e2c04e52250',
    email: 'albert.energy@gis-demo.com',
  };

  service.communityMembers(
    query,
    {
      /* options */
    },
    (err, communityMember) => {
      t.ifError(err);
      communityEntryProps.forEach(prop =>
        t.true(prop in communityMember, `[${prop}] should be a property of a communityMember object`));
      const {
        published, updated, contributor, links,
      } = communityMember;

      t.true(_.isFinite(published));
      t.true(_.isFinite(updated));

      t.true(_.isPlainObject(contributor));
      contributorProps.forEach(prop =>
        t.true(prop in contributor, `[${prop}] should be a member of contributor object`));

      t.true(_.isPlainObject(links));
      ['self', 'edit'].forEach(link => t.true(link in links, `[${link}] should be a member of links object`));

      t.end();
    }
  );
});

test.cb('validate retrieving community member entry, communityUuid && userid provided', (t) => {
  const { service, communityEntryProps, contributorProps } = t.context;
  const query = {
    communityUuid: '5dd83cd6-d3a5-4fb3-89cd-1e2c04e52250',
    userid: '23176546',
  };

  service.communityMembers(
    query,
    {
      /* options */
    },
    (err, communityMember) => {
      t.ifError(err);
      communityEntryProps.forEach(prop =>
        t.true(prop in communityMember, `[${prop}] should be a property of a communityMember object`));
      const {
        published, updated, contributor, links,
      } = communityMember;

      t.true(_.isFinite(published));
      t.true(_.isFinite(updated));

      t.true(_.isPlainObject(contributor));
      contributorProps.forEach(prop =>
        t.true(prop in contributor, `[${prop}] should be a member of contributor object`));

      t.true(_.isPlainObject(links));
      ['self', 'edit'].forEach(link => t.true(link in links, `[${link}] should be a member of links object`));

      t.end();
    }
  );
});

/* Error / Wrong input scenarios validations */

test.cb('error validation for retrieving community members list, communityUuid not provided', (t) => {
  const { service } = t.context;

  service.communityMembers(
    {
      /* query */
    },
    {
      /* options */
    },
    (err) => {
      t.is(err.message, '{{ query.communityUuid }} must be defined in [communityMembers] request');
      t.is(err.httpStatus, 404);
      t.end();
    }
  );
});

test.cb('error validation for retrieving community members list, wrong communityId provided', (t) => {
  const { service } = t.context;
  const query = {
    communityUuid: 'mock community ud',
  };
  service.communityMembers(
    query,
    {
      /* options */
    },
    (err) => {
      t.is(err.httpStatus, 404);
      t.is(err.name, 'Error');
      t.end();
    }
  );
});

test.cb('error validation for retrieving community members list, wrong email provided', (t) => {
  const { service } = t.context;
  const query = {
    communityUuid: '5dd83cd6-d3a5-4fb3-89cd-1e2c04e52250',
    email: 'mock mail',
  };
  service.communityMembers(
    query,
    {
      /* options */
    },
    (err) => {
      t.is(err.httpStatus, 400);
      t.is(err.name, 'Error');
      t.end();
    }
  );
});

test.cb('error validation for retrieving community members list, wrong userid provided', (t) => {
  const { service } = t.context;
  const query = {
    communityUuid: '5dd83cd6-d3a5-4fb3-89cd-1e2c04e52250',
    userid: 'mock userid',
  };
  service.communityMembers(
    query,
    {
      /* options */
    },
    (err) => {
      t.is(err.httpStatus, 400);
      t.is(err.name, 'Error');
      t.end();
    }
  );
});
