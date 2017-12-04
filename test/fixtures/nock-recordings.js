const nock = require('nock');

/* eslint-disable */

nock('https://apps.na.collabserv.com:443', { encodedQueryParams: true })
  .get('/communities/service/atom/community/members')
  .query({ communityUuid: 'mock community ud' })
  .reply(
    404,
    '\n\n\n\n\n\n\n\n\n\n\n\n<error xmlns="http://www.ibm.com/xmlns/prod/sn">\n\t<code>404</code>\n\t<message>\n\t\t\n\t\t\t\n\t\t\t\t\n\t\t\t\tThe community which this resource or page is associated with does not exist.\n\t\t\t\n\t\t\t\n\t\t\t\n\t\t\n\t\t\n\t</message>\n \t<trace>\n \t\t\n\t</trace>\n</error>\n',
    [
      'Content-Language',
      'en-US',
      'Content-Type',
      'text/xml;charset=UTF-8',
      'Last-Modified',
      'Tue, 03 Oct 2017 13:06:46 GMT',
      'p3p',
      'CP="NON CUR OTPi OUR NOR UNI"',
      'x-frame-options',
      'SAMEORIGIN',
      'Cache-Control',
      'no-store, no-cache, must-revalidate, private, must-revalidate',
      'x-lconn-auth',
      'true',
      'Expires',
      'Thu, 1 Jan 1970 00:00:00 GMT',
      'x-ua-compatible',
      'IE=edge',
      'Strict-Transport-Security',
      'max-age=31536000; includeSubDomains; preload',
      'X-Padding',
      'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
      'X-Content-Type-Options',
      'nosniff',
      'Date',
      'Tue, 03 Oct 2017 13:06:46 GMT',
      'Content-Length',
      '246',
      'Connection',
      'close',
    ]
  );

nock('https://apps.na.collabserv.com:443', { encodedQueryParams: true })
  .get('/communities/service/atom/community/members')
  .query({ communityUuid: '5dd83cd6-d3a5-4fb3-89cd-1e2c04e52250', email: 'mock mail' })
  .reply(
    400,
    '\n\n\n\n\n\n\n\n\n\n\n\n<error xmlns="http://www.ibm.com/xmlns/prod/sn">\n\t<code>400</code>\n\t<message>\n\t\t\n\t\t\t\n\t\t\t\t\n\t\t\t\tUnknown user.\n\t\t\t\n\t\t\t\n\t\t\t\n\t\t\n\t\t\n\t</message>\n \t<trace>\n \t\t\n\t</trace>\n</error>\n',
    [
      'Content-Language',
      'en-US',
      'Content-Type',
      'text/xml;charset=UTF-8',
      'Last-Modified',
      'Tue, 03 Oct 2017 13:06:46 GMT',
      'p3p',
      'CP="NON CUR OTPi OUR NOR UNI"',
      'x-frame-options',
      'SAMEORIGIN',
      'Cache-Control',
      'no-store, no-cache, must-revalidate, private, must-revalidate',
      'x-lconn-auth',
      'true',
      'Expires',
      'Thu, 1 Jan 1970 00:00:00 GMT',
      'x-ua-compatible',
      'IE=edge',
      'Strict-Transport-Security',
      'max-age=31536000; includeSubDomains; preload',
      'X-Padding',
      'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
      'X-Content-Type-Options',
      'nosniff',
      'Date',
      'Tue, 03 Oct 2017 13:06:46 GMT',
      'Connection',
      'close',
    ]
  );

nock('https://apps.na.collabserv.com:443', { encodedQueryParams: true })
  .get('/communities/service/atom/community/members')
  .query({ communityUuid: '5dd83cd6-d3a5-4fb3-89cd-1e2c04e52250' })
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><feed xmlns="http://www.w3.org/2005/Atom" xmlns:app="http://www.w3.org/2007/app" xmlns:snx="http://www.ibm.com/xmlns/prod/sn" xmlns:opensearch="http://a9.com/-/spec/opensearch/1.1/"><opensearch:totalResults xmlns:opensearch="http://a9.com/-/spec/opensearch/1.1/">9</opensearch:totalResults><opensearch:startIndex xmlns:opensearch="http://a9.com/-/spec/opensearch/1.1/">1</opensearch:startIndex><opensearch:itemsPerPage xmlns:opensearch="http://a9.com/-/spec/opensearch/1.1/">10</opensearch:itemsPerPage><title type="text">Gravity Gallery - Members</title><id>https://apps.na.collabserv.com/communities/service/atom/community/members?communityUuid=5dd83cd6-d3a5-4fb3-89cd-1e2c04e52250</id><updated>2017-10-03T13:06:46.437Z</updated><generator uri="http://www.ibm.com/xmlns/prod/sn" version="6.0.0.0">IBM Connections - Communities</generator><link href="https://apps.na.collabserv.com/communities/service/atom/community/members?communityUuid=5dd83cd6-d3a5-4fb3-89cd-1e2c04e52250" rel="self"></link><link href="https://apps.na.collabserv.com/communities/service/atom/community/members?communityUuid=5dd83cd6-d3a5-4fb3-89cd-1e2c04e52250&amp;outputType=categories" rel="http://www.ibm.com/xmlns/prod/sn/tag-cloud" type="application/atomcat+xml"></link><link href="https://apps.na.collabserv.com/communities/service/atom/community/service?communityUuid=5dd83cd6-d3a5-4fb3-89cd-1e2c04e52250" rel="http://www.ibm.com/xmlns/prod/sn/service" type="application/atomsvc+xml"></link><snx:communityLastMod xmlns:snx="http://www.ibm.com/xmlns/prod/sn" component="http://www.ibm.com/xmlns/prod/sn/communities">1500476702606</snx:communityLastMod><snx:rank xmlns:snx="http://www.ibm.com/xmlns/prod/sn" scheme="http://www.ibm.com/xmlns/prod/sn/user">9</snx:rank><snx:rank xmlns:snx="http://www.ibm.com/xmlns/prod/sn" scheme="http://www.ibm.com/xmlns/prod/sn/group">0</snx:rank><entry><title type="text">Wolfgang Raestrup</title><id>http://communities.ibm.com:2006/service/atom/community/members?communityUuid=5dd83cd6-d3a5-4fb3-89cd-1e2c04e52250&amp;email=wolfgang.raestrup@gis-group.net</id><summary type="text">Wolfgang Raestrup</summary><content type="xhtml"><div xmlns="http://www.w3.org/1999/xhtml"><span><div><a href="mailto:wolfgang.raestrup@gis-group.net" class="email">wolfgang.raestrup@gis-group.net</a></div><div class="x-guid">22332390</div><div class="x-community-role">owner</div></span></div></content><published>2016-06-06T13:55:38.319Z</published><updated>2016-06-06T13:55:38.319Z</updated><contributor><email>wolfgang.raestrup@gis-group.net</email><snx:userid xmlns:snx="http://www.ibm.com/xmlns/prod/sn">22332390</snx:userid><snx:userState xmlns:snx="http://www.ibm.com/xmlns/prod/sn">active</snx:userState><snx:isExternal xmlns:snx="http://www.ibm.com/xmlns/prod/sn">false</snx:isExternal><name>Wolfgang Raestrup</name></contributor><link href="https://apps.na.collabserv.com/communities/service/atom/community/members?communityUuid=5dd83cd6-d3a5-4fb3-89cd-1e2c04e52250&amp;userid=22332390" rel="self"></link><link href="https://apps.na.collabserv.com/communities/service/atom/community/members?communityUuid=5dd83cd6-d3a5-4fb3-89cd-1e2c04e52250&amp;userid=22332390" rel="edit"></link><snx:role xmlns:snx="http://www.ibm.com/xmlns/prod/sn" component="http://www.ibm.com/xmlns/prod/sn/communities">owner</snx:role><category term="business-owner" scheme="http://www.ibm.com/xmlns/prod/sn/type"></category><category term="person" scheme="http://www.ibm.com/xmlns/prod/sn/type"></category><snx:orgId xmlns:snx="http://www.ibm.com/xmlns/prod/sn">20170081</snx:orgId></entry><entry><title type="text">Jack Developer</title><id>http://communities.ibm.com:2006/service/atom/community/members?communityUuid=5dd83cd6-d3a5-4fb3-89cd-1e2c04e52250&amp;email=jack.developer@gis-demo.com</id><summary type="text">Jack Developer</summary><content type="xhtml"><div xmlns="http://www.w3.org/1999/xhtml"><span><div><a href="mailto:jack.developer@gis-demo.com" class="email">jack.developer@gis-demo.com</a></div><div class="x-guid">23176544</div><div class="x-community-role">owner</div></span></div></content><published>2017-02-09T12:49:20.624Z</published><updated>2017-02-09T12:49:20.624Z</updated><contributor><email>jack.developer@gis-demo.com</email><snx:userid xmlns:snx="http://www.ibm.com/xmlns/prod/sn">23176544</snx:userid><snx:userState xmlns:snx="http://www.ibm.com/xmlns/prod/sn">active</snx:userState><snx:isExternal xmlns:snx="http://www.ibm.com/xmlns/prod/sn">false</snx:isExternal><name>Jack Developer</name></contributor><link href="https://apps.na.collabserv.com/communities/service/atom/community/members?communityUuid=5dd83cd6-d3a5-4fb3-89cd-1e2c04e52250&amp;userid=23176544" rel="self"></link><link href="https://apps.na.collabserv.com/communities/service/atom/community/members?communityUuid=5dd83cd6-d3a5-4fb3-89cd-1e2c04e52250&amp;userid=23176544" rel="edit"></link><snx:role xmlns:snx="http://www.ibm.com/xmlns/prod/sn" component="http://www.ibm.com/xmlns/prod/sn/communities">owner</snx:role><category term="person" scheme="http://www.ibm.com/xmlns/prod/sn/type"></category><snx:orgId xmlns:snx="http://www.ibm.com/xmlns/prod/sn">20170081</snx:orgId></entry><entry><title type="text">Benjamin Kröger</title><id>http://communities.ibm.com:2006/service/atom/community/members?communityUuid=5dd83cd6-d3a5-4fb3-89cd-1e2c04e52250&amp;email=benjamin.kroeger@gis-group.net</id><summary type="text">Benjamin Kröger</summary><content type="xhtml"><div xmlns="http://www.w3.org/1999/xhtml"><span><div><a href="mailto:benjamin.kroeger@gis-group.net" class="email">benjamin.kroeger@gis-group.net</a></div><div class="x-guid">22444898</div><div class="x-community-role">owner</div></span></div></content><published>2016-06-06T13:56:12.266Z</published><updated>2016-06-08T05:45:03.483Z</updated><contributor><email>benjamin.kroeger@gis-group.net</email><snx:userid xmlns:snx="http://www.ibm.com/xmlns/prod/sn">22444898</snx:userid><snx:userState xmlns:snx="http://www.ibm.com/xmlns/prod/sn">active</snx:userState><snx:isExternal xmlns:snx="http://www.ibm.com/xmlns/prod/sn">false</snx:isExternal><name>Benjamin Kröger</name></contributor><link href="https://apps.na.collabserv.com/communities/service/atom/community/members?communityUuid=5dd83cd6-d3a5-4fb3-89cd-1e2c04e52250&amp;userid=22444898" rel="self"></link><link href="https://apps.na.collabserv.com/communities/service/atom/community/members?communityUuid=5dd83cd6-d3a5-4fb3-89cd-1e2c04e52250&amp;userid=22444898" rel="edit"></link><snx:role xmlns:snx="http://www.ibm.com/xmlns/prod/sn" component="http://www.ibm.com/xmlns/prod/sn/communities">owner</snx:role><category term="person" scheme="http://www.ibm.com/xmlns/prod/sn/type"></category><snx:orgId xmlns:snx="http://www.ibm.com/xmlns/prod/sn">20170081</snx:orgId></entry><entry><title type="text">Tony Wehrstein</title><id>http://communities.ibm.com:2006/service/atom/community/members?communityUuid=5dd83cd6-d3a5-4fb3-89cd-1e2c04e52250&amp;email=tony.wehrstein@gis-ag.com</id><summary type="text">Tony Wehrstein</summary><content type="xhtml"><div xmlns="http://www.w3.org/1999/xhtml"><span><div><a href="mailto:tony.wehrstein@gis-ag.com" class="email">tony.wehrstein@gis-ag.com</a></div><div class="x-guid">21522417</div><div class="x-community-role">member</div></span></div></content><published>2017-07-19T15:05:02.605Z</published><updated>2017-07-19T15:05:02.605Z</updated><contributor><email>tony.wehrstein@gis-ag.com</email><snx:userid xmlns:snx="http://www.ibm.com/xmlns/prod/sn">21522417</snx:userid><snx:userState xmlns:snx="http://www.ibm.com/xmlns/prod/sn">active</snx:userState><snx:isExternal xmlns:snx="http://www.ibm.com/xmlns/prod/sn">false</snx:isExternal><name>Tony Wehrstein</name></contributor><link href="https://apps.na.collabserv.com/communities/service/atom/community/members?communityUuid=5dd83cd6-d3a5-4fb3-89cd-1e2c04e52250&amp;userid=21522417" rel="self"></link><link href="https://apps.na.collabserv.com/communities/service/atom/community/members?communityUuid=5dd83cd6-d3a5-4fb3-89cd-1e2c04e52250&amp;userid=21522417" rel="edit"></link><snx:role xmlns:snx="http://www.ibm.com/xmlns/prod/sn" component="http://www.ibm.com/xmlns/prod/sn/communities">member</snx:role><category term="person" scheme="http://www.ibm.com/xmlns/prod/sn/type"></category><snx:orgId xmlns:snx="http://www.ibm.com/xmlns/prod/sn">20170081</snx:orgId></entry><entry><title type="text">Stefan Gojan</title><id>http://communities.ibm.com:2006/service/atom/community/members?communityUuid=5dd83cd6-d3a5-4fb3-89cd-1e2c04e52250&amp;userid=22753413</id><summary type="text">Stefan Gojan</summary><content type="xhtml"><div xmlns="http://www.w3.org/1999/xhtml"><span><div class="x-guid">22753413</div><div class="x-community-role">member</div></span></div></content><published>2016-06-06T13:56:12.269Z</published><updated>2016-06-06T13:56:12.269Z</updated><contributor><snx:userid xmlns:snx="http://www.ibm.com/xmlns/prod/sn">22753413</snx:userid><snx:userState xmlns:snx="http://www.ibm.com/xmlns/prod/sn">active</snx:userState><snx:isExternal xmlns:snx="http://www.ibm.com/xmlns/prod/sn">false</snx:isExternal><name>Stefan Gojan</name></contributor><link href="https://apps.na.collabserv.com/communities/service/atom/community/members?communityUuid=5dd83cd6-d3a5-4fb3-89cd-1e2c04e52250&amp;userid=22753413" rel="self"></link><link href="https://apps.na.collabserv.com/communities/service/atom/community/members?communityUuid=5dd83cd6-d3a5-4fb3-89cd-1e2c04e52250&amp;userid=22753413" rel="edit"></link><snx:role xmlns:snx="http://www.ibm.com/xmlns/prod/sn" component="http://www.ibm.com/xmlns/prod/sn/communities">member</snx:role><category term="person" scheme="http://www.ibm.com/xmlns/prod/sn/type"></category><snx:orgId xmlns:snx="http://www.ibm.com/xmlns/prod/sn">0</snx:orgId></entry><entry><title type="text">Markus Langer</title><id>http://communities.ibm.com:2006/service/atom/community/members?communityUuid=5dd83cd6-d3a5-4fb3-89cd-1e2c04e52250&amp;email=markus.langer@gis-ag.com</id><summary type="text">Markus Langer</summary><content type="xhtml"><div xmlns="http://www.w3.org/1999/xhtml"><span><div><a href="mailto:markus.langer@gis-ag.com" class="email">markus.langer@gis-ag.com</a></div><div class="x-guid">22842877</div><div class="x-community-role">member</div></span></div></content><published>2016-09-21T11:59:51.755Z</published><updated>2016-09-21T11:59:51.755Z</updated><contributor><email>markus.langer@gis-ag.com</email><snx:userid xmlns:snx="http://www.ibm.com/xmlns/prod/sn">22842877</snx:userid><snx:userState xmlns:snx="http://www.ibm.com/xmlns/prod/sn">active</snx:userState><snx:isExternal xmlns:snx="http://www.ibm.com/xmlns/prod/sn">false</snx:isExternal><name>Markus Langer</name></contributor><link href="https://apps.na.collabserv.com/communities/service/atom/community/members?communityUuid=5dd83cd6-d3a5-4fb3-89cd-1e2c04e52250&amp;userid=22842877" rel="self"></link><link href="https://apps.na.collabserv.com/communities/service/atom/community/members?communityUuid=5dd83cd6-d3a5-4fb3-89cd-1e2c04e52250&amp;userid=22842877" rel="edit"></link><snx:role xmlns:snx="http://www.ibm.com/xmlns/prod/sn" component="http://www.ibm.com/xmlns/prod/sn/communities">member</snx:role><category term="person" scheme="http://www.ibm.com/xmlns/prod/sn/type"></category><snx:orgId xmlns:snx="http://www.ibm.com/xmlns/prod/sn">20170081</snx:orgId></entry><entry><title type="text">Andreja Jevtic</title><id>http://communities.ibm.com:2006/service/atom/community/members?communityUuid=5dd83cd6-d3a5-4fb3-89cd-1e2c04e52250&amp;userid=23157826</id><summary type="text">Andreja Jevtic</summary><content type="xhtml"><div xmlns="http://www.w3.org/1999/xhtml"><span><div class="x-guid">23157826</div><div class="x-community-role">member</div></span></div></content><published>2017-01-27T14:25:31.967Z</published><updated>2017-05-15T14:53:37.656Z</updated><contributor><snx:userid xmlns:snx="http://www.ibm.com/xmlns/prod/sn">23157826</snx:userid><snx:userState xmlns:snx="http://www.ibm.com/xmlns/prod/sn">active</snx:userState><snx:isExternal xmlns:snx="http://www.ibm.com/xmlns/prod/sn">false</snx:isExternal><name>Andreja Jevtic</name></contributor><link href="https://apps.na.collabserv.com/communities/service/atom/community/members?communityUuid=5dd83cd6-d3a5-4fb3-89cd-1e2c04e52250&amp;userid=23157826" rel="self"></link><link href="https://apps.na.collabserv.com/communities/service/atom/community/members?communityUuid=5dd83cd6-d3a5-4fb3-89cd-1e2c04e52250&amp;userid=23157826" rel="edit"></link><snx:role xmlns:snx="http://www.ibm.com/xmlns/prod/sn" component="http://www.ibm.com/xmlns/prod/sn/communities">member</snx:role><category term="person" scheme="http://www.ibm.com/xmlns/prod/sn/type"></category><snx:orgId xmlns:snx="http://www.ibm.com/xmlns/prod/sn">0</snx:orgId></entry><entry><title type="text">Alex Olson</title><id>http://communities.ibm.com:2006/service/atom/community/members?communityUuid=5dd83cd6-d3a5-4fb3-89cd-1e2c04e52250&amp;email=alex.olson@gis-ag.com</id><summary type="text">Alex Olson</summary><content type="xhtml"><div xmlns="http://www.w3.org/1999/xhtml"><span><div><a href="mailto:alex.olson@gis-ag.com" class="email">alex.olson@gis-ag.com</a></div><div class="x-guid">23026382</div><div class="x-community-role">member</div></span></div></content><published>2016-11-01T19:15:11.914Z</published><updated>2016-11-01T19:15:11.914Z</updated><contributor><email>alex.olson@gis-ag.com</email><snx:userid xmlns:snx="http://www.ibm.com/xmlns/prod/sn">23026382</snx:userid><snx:userState xmlns:snx="http://www.ibm.com/xmlns/prod/sn">active</snx:userState><snx:isExternal xmlns:snx="http://www.ibm.com/xmlns/prod/sn">false</snx:isExternal><name>Alex Olson</name></contributor><link href="https://apps.na.collabserv.com/communities/service/atom/community/members?communityUuid=5dd83cd6-d3a5-4fb3-89cd-1e2c04e52250&amp;userid=23026382" rel="self"></link><link href="https://apps.na.collabserv.com/communities/service/atom/community/members?communityUuid=5dd83cd6-d3a5-4fb3-89cd-1e2c04e52250&amp;userid=23026382" rel="edit"></link><snx:role xmlns:snx="http://www.ibm.com/xmlns/prod/sn" component="http://www.ibm.com/xmlns/prod/sn/communities">member</snx:role><category term="person" scheme="http://www.ibm.com/xmlns/prod/sn/type"></category><snx:orgId xmlns:snx="http://www.ibm.com/xmlns/prod/sn">20170081</snx:orgId></entry><entry><title type="text">Albert Energy</title><id>http://communities.ibm.com:2006/service/atom/community/members?communityUuid=5dd83cd6-d3a5-4fb3-89cd-1e2c04e52250&amp;email=albert.energy@gis-demo.com</id><summary type="text">Albert Energy</summary><content type="xhtml"><div xmlns="http://www.w3.org/1999/xhtml"><span><div><a href="mailto:albert.energy@gis-demo.com" class="email">albert.energy@gis-demo.com</a></div><div class="x-guid">23176546</div><div class="x-community-role">member</div></span></div></content><published>2017-02-09T12:49:35.096Z</published><updated>2017-02-09T12:49:35.096Z</updated><contributor><email>albert.energy@gis-demo.com</email><snx:userid xmlns:snx="http://www.ibm.com/xmlns/prod/sn">23176546</snx:userid><snx:userState xmlns:snx="http://www.ibm.com/xmlns/prod/sn">active</snx:userState><snx:isExternal xmlns:snx="http://www.ibm.com/xmlns/prod/sn">false</snx:isExternal><name>Albert Energy</name></contributor><link href="https://apps.na.collabserv.com/communities/service/atom/community/members?communityUuid=5dd83cd6-d3a5-4fb3-89cd-1e2c04e52250&amp;userid=23176546" rel="self"></link><link href="https://apps.na.collabserv.com/communities/service/atom/community/members?communityUuid=5dd83cd6-d3a5-4fb3-89cd-1e2c04e52250&amp;userid=23176546" rel="edit"></link><snx:role xmlns:snx="http://www.ibm.com/xmlns/prod/sn" component="http://www.ibm.com/xmlns/prod/sn/communities">member</snx:role><category term="person" scheme="http://www.ibm.com/xmlns/prod/sn/type"></category><snx:orgId xmlns:snx="http://www.ibm.com/xmlns/prod/sn">20170081</snx:orgId></entry></feed>',
    [
      'Content-Language',
      'en-US',
      'Content-Type',
      'application/atom+xml;charset=UTF-8',
      'Last-Modified',
      'Tue, 03 Oct 2017 13:06:46 GMT',
      'p3p',
      'CP="NON CUR OTPi OUR NOR UNI"',
      'x-frame-options',
      'SAMEORIGIN',
      'Cache-Control',
      'no-store, no-cache, must-revalidate, private, must-revalidate',
      'x-lconn-auth',
      'true',
      'Expires',
      'Thu, 1 Jan 1970 00:00:00 GMT',
      'Pragma',
      'no-cache',
      'x-ua-compatible',
      'IE=edge',
      'Strict-Transport-Security',
      'max-age=31536000; includeSubDomains; preload',
      'X-Padding',
      'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
      'X-Content-Type-Options',
      'nosniff',
      'Date',
      'Tue, 03 Oct 2017 13:06:46 GMT',
      'Content-Length',
      '16014',
      'Connection',
      'close',
    ]
  );

nock('https://apps.na.collabserv.com:443', { encodedQueryParams: true })
  .get('/communities/service/atom/community/members')
  .query({ communityUuid: '5dd83cd6-d3a5-4fb3-89cd-1e2c04e52250', userid: '23176546' })
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><entry xmlns="http://www.w3.org/2005/Atom" xmlns:app="http://www.w3.org/2007/app" xmlns:snx="http://www.ibm.com/xmlns/prod/sn"><title type="text">Albert Energy</title><id>http://communities.ibm.com:2006/service/atom/community/members?communityUuid=5dd83cd6-d3a5-4fb3-89cd-1e2c04e52250&amp;email=albert.energy@gis-demo.com</id><summary type="text">Albert Energy</summary><content type="xhtml"><div xmlns="http://www.w3.org/1999/xhtml"><span><div><a href="mailto:albert.energy@gis-demo.com" class="email">albert.energy@gis-demo.com</a></div><div class="x-guid">23176546</div><div class="x-community-role">member</div></span></div></content><published>2017-02-09T12:49:35.096Z</published><updated>2017-02-09T12:49:35.096Z</updated><contributor><email>albert.energy@gis-demo.com</email><snx:userid xmlns:snx="http://www.ibm.com/xmlns/prod/sn">23176546</snx:userid><snx:userState xmlns:snx="http://www.ibm.com/xmlns/prod/sn">active</snx:userState><snx:isExternal xmlns:snx="http://www.ibm.com/xmlns/prod/sn">false</snx:isExternal><name>Albert Energy</name></contributor><link href="https://apps.na.collabserv.com/communities/service/atom/community/members?communityUuid=5dd83cd6-d3a5-4fb3-89cd-1e2c04e52250&amp;userid=23176546" rel="self"></link><link href="https://apps.na.collabserv.com/communities/service/atom/community/members?communityUuid=5dd83cd6-d3a5-4fb3-89cd-1e2c04e52250&amp;userid=23176546" rel="edit"></link><snx:role xmlns:snx="http://www.ibm.com/xmlns/prod/sn" component="http://www.ibm.com/xmlns/prod/sn/communities">member</snx:role><category term="person" scheme="http://www.ibm.com/xmlns/prod/sn/type"></category><snx:orgId xmlns:snx="http://www.ibm.com/xmlns/prod/sn">20170081</snx:orgId></entry>',
    [
      'Content-Language',
      'en-US',
      'Content-Type',
      'application/atom+xml;charset=UTF-8',
      'Last-Modified',
      'Tue, 03 Oct 2017 13:06:46 GMT',
      'p3p',
      'CP="NON CUR OTPi OUR NOR UNI"',
      'x-frame-options',
      'SAMEORIGIN',
      'Cache-Control',
      'no-store, no-cache, must-revalidate, private, must-revalidate',
      'x-lconn-auth',
      'true',
      'Expires',
      'Thu, 1 Jan 1970 00:00:00 GMT',
      'Pragma',
      'no-cache',
      'x-ua-compatible',
      'IE=edge',
      'Strict-Transport-Security',
      'max-age=31536000; includeSubDomains; preload',
      'X-Padding',
      'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
      'X-Content-Type-Options',
      'nosniff',
      'Date',
      'Tue, 03 Oct 2017 13:06:46 GMT',
      'Content-Length',
      '1750',
      'Connection',
      'close',
    ]
  );

nock('https://apps.na.collabserv.com:443', { encodedQueryParams: true })
  .get('/communities/service/atom/community/members')
  .query({ communityUuid: '5dd83cd6-d3a5-4fb3-89cd-1e2c04e52250', email: 'albert.energy@gis-demo.com' })
  .reply(
    200,
    '<?xml version="1.0" encoding="UTF-8"?><entry xmlns="http://www.w3.org/2005/Atom" xmlns:app="http://www.w3.org/2007/app" xmlns:snx="http://www.ibm.com/xmlns/prod/sn"><title type="text">Albert Energy</title><id>http://communities.ibm.com:2006/service/atom/community/members?communityUuid=5dd83cd6-d3a5-4fb3-89cd-1e2c04e52250&amp;email=albert.energy@gis-demo.com</id><summary type="text">Albert Energy</summary><content type="xhtml"><div xmlns="http://www.w3.org/1999/xhtml"><span><div><a href="mailto:albert.energy@gis-demo.com" class="email">albert.energy@gis-demo.com</a></div><div class="x-guid">23176546</div><div class="x-community-role">member</div></span></div></content><published>2017-02-09T12:49:35.096Z</published><updated>2017-02-09T12:49:35.096Z</updated><contributor><email>albert.energy@gis-demo.com</email><snx:userid xmlns:snx="http://www.ibm.com/xmlns/prod/sn">23176546</snx:userid><snx:userState xmlns:snx="http://www.ibm.com/xmlns/prod/sn">active</snx:userState><snx:isExternal xmlns:snx="http://www.ibm.com/xmlns/prod/sn">false</snx:isExternal><name>Albert Energy</name></contributor><link href="https://apps.na.collabserv.com/communities/service/atom/community/members?communityUuid=5dd83cd6-d3a5-4fb3-89cd-1e2c04e52250&amp;userid=23176546" rel="self"></link><link href="https://apps.na.collabserv.com/communities/service/atom/community/members?communityUuid=5dd83cd6-d3a5-4fb3-89cd-1e2c04e52250&amp;userid=23176546" rel="edit"></link><snx:role xmlns:snx="http://www.ibm.com/xmlns/prod/sn" component="http://www.ibm.com/xmlns/prod/sn/communities">member</snx:role><category term="person" scheme="http://www.ibm.com/xmlns/prod/sn/type"></category><snx:orgId xmlns:snx="http://www.ibm.com/xmlns/prod/sn">20170081</snx:orgId></entry>',
    [
      'Content-Language',
      'en-US',
      'Content-Type',
      'application/atom+xml;charset=UTF-8',
      'Last-Modified',
      'Tue, 03 Oct 2017 13:06:46 GMT',
      'p3p',
      'CP="NON CUR OTPi OUR NOR UNI"',
      'x-frame-options',
      'SAMEORIGIN',
      'Cache-Control',
      'no-store, no-cache, must-revalidate, private, must-revalidate',
      'x-lconn-auth',
      'true',
      'Expires',
      'Thu, 1 Jan 1970 00:00:00 GMT',
      'Pragma',
      'no-cache',
      'x-ua-compatible',
      'IE=edge',
      'Strict-Transport-Security',
      'max-age=31536000; includeSubDomains; preload',
      'X-Padding',
      'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
      'X-Content-Type-Options',
      'nosniff',
      'Date',
      'Tue, 03 Oct 2017 13:06:46 GMT',
      'Content-Length',
      '1750',
      'Connection',
      'close',
    ]
  );

nock('https://apps.na.collabserv.com:443', { encodedQueryParams: true })
  .get('/communities/service/atom/community/members')
  .query({ communityUuid: '5dd83cd6-d3a5-4fb3-89cd-1e2c04e52250', userid: 'mock userid' })
  .reply(
    400,
    '\n\n\n\n\n\n\n\n\n\n\n\n<error xmlns="http://www.ibm.com/xmlns/prod/sn">\n\t<code>400</code>\n\t<message>\n\t\t\n\t\t\t\n\t\t\t\t\n\t\t\t\tUnknown user.\n\t\t\t\n\t\t\t\n\t\t\t\n\t\t\n\t\t\n\t</message>\n \t<trace>\n \t\t\n\t</trace>\n</error>\n',
    [
      'Content-Language',
      'en-US',
      'Content-Type',
      'text/xml;charset=UTF-8',
      'Last-Modified',
      'Tue, 03 Oct 2017 13:06:46 GMT',
      'p3p',
      'CP="NON CUR OTPi OUR NOR UNI"',
      'x-frame-options',
      'SAMEORIGIN',
      'Cache-Control',
      'no-store, no-cache, must-revalidate, private, must-revalidate',
      'x-lconn-auth',
      'true',
      'Expires',
      'Thu, 1 Jan 1970 00:00:00 GMT',
      'x-ua-compatible',
      'IE=edge',
      'Strict-Transport-Security',
      'max-age=31536000; includeSubDomains; preload',
      'X-Padding',
      'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
      'X-Content-Type-Options',
      'nosniff',
      'Date',
      'Tue, 03 Oct 2017 13:06:46 GMT',
      'Connection',
      'close',
    ]
  );

/* eslint-enable */
