'use strict';

module.exports.hello = async event => {
  return {
    statusCode: 200,
    headers:
      {
      'Access-Control-Allow-Origin': '*'
      },
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

'use strict';

const axios = require('axios');

module.exports.getAccessToken = async (event) => {

  const MEETUP_OAUTH_URL = 'https://secure.meetup.com/oauth2/access'
    + '?client_id=AKIAJQEFFWEUZ35TGW2Q'
    + '&client_secret=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'
    + '&grant_type=authorization_code'
    + '&redirect_uri=httsps://bxchang04.github.io/meetup' //does this need https://?
    //+ '&code=USER_AUTHORIZATION_CODE'; //paste this from URL 4.2 and test
    + '&code=' + event.pathParameters.code;
  const info = await axios.post(MEETUP_OAUTH_URL);

  return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        access_token: info.data.access_token,
        refresh_token: info.data.refresh_token,
      }),
    };
}
