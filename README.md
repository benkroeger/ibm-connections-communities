#  IBM Connections Communities Service

> an implementation for the IBM Connections Communities API


## Install

```sh
$ npm install --save ibm-connections-communities
```

## Usage

After you require community service, you can easily setup the default properties. 
```js
const communitiesService = require('ibm-connections-communities');

const defaults = {
  headers: {
    Authorization: 'Basic 12345', // or any other auth method
  },
};
```

Beside default authorization, this service supports ```oniyi-http-plugin-credentials``` and ```oniyi-http-plugin-format-url-template```.

**Credentials** plugin is used only if ```plugins.credentials``` is provided.

**Format-url-template** is used by default, and it is recommended to use it in combination with **credentials** plugin.

For more details about plugins usage, please visit:

[oniyi-http-plugin-credentials](https://www.npmjs.com/package/oniyi-http-plugin-credentials)

[oniyi-http-plugin-format-url-template](https://www.npmjs.com/package/oniyi-http-plugin-format-url-template)

```js
const plugins = {
  credentials: {
    providerName: 'customProvider',
    userRelationProp: 'credentials',
  },
  formatUrlTemplate: {
    valuesMap: {
      authType: {
        basic: 'customAuthType', 
      }
    },
    applyToQueryString: true,
  }
};

const serviceOptions = {
  defaults,
  plugins,
  baseUrl: 'https://base-url.com',
};

const service = communitiesService(serviceOptions.baseUrl, serviceOptions);
```

If not, please provide you own authorization type directly into the ```options``` object.
Once service instance is created, you are able to use next methods:
```
    service.communityMembers
```

Method comes with three arguments, ```query```, ```options``` and ```callback```.

```query```     - valid query parameters for each method can be found in the source code: /lib/methods/*

```options```   - additional options merged into default http request params

### service.communityMembers

If you need to retrieve list of all community members, simply provide ```communityUuid``` through ```query``` object.
```js

const query = {
  communityUuid: 'enter-community-id-here', // not an optional parameter!
  ps: 100, // the default value is 10
};

service.communityMembers(query, {/* request options param */}, (err, response) => {
  const { communityMembers } = response;
  
  // use communityMembers Array to extract metadata about each member.
});
```

These are the valid query parameters, that can help with sorting/filtering the result:
```
    -userid
    -email
    -page
    -ps
    -role
    -since
    -sortBy
    -sortOrder
```

If you need to retrieve a single community member, please provide ```communityUuid``` and ```email/userid``` through ```query``` object.

**Warning**: When ```email/userid``` is provided, all other valid query parameters are ignored!

```js
const query = {
  communityUuid: 'enter-community-id-here',
  userid: '123456', // or email: 'private-mail@something.me'
  ps: 100, // this parameter will be ignored
  sortBy: 'name', // this parameter will be ignored as well
};

service.communityMembers(query, {/* request options param */}, (err, communityMember) => {
  // use communityMember Object to extract user's metadata.
});
```

## Running the tests

We are using [nock](https://www.npmjs.com/package/nock) library for recording and mocking HTTP requests. 
These recordings can be found in _test/fixtures/nock-recordings.js_ file. In order to run them, simply input:

```
npm run test
```

If it is necessary to load custom API's and run tests with real-time data, you should to run:

```
unmocked=true username=basicUser password=basicPassword npm run test
```

This line of code is saying that tests are not being mocked and will use the real data.
Also, please provide valid username and password in order to make a real HTTP request.

## License

UNLICENSED ©  [GIS AG](https://gis-ag.com)