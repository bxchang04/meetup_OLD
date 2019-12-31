'use strict';

const axios = require('axios');

module.exports.getAccessToken = async (event) => {

  const MEETUP_OAUTH_URL = 'https://secure.meetup.com/oauth2/access'
    + '?client_id=3dssascu6mej4fuptij43jdbh4' //YOUR_CONSUMER_KEY
    + '&client_secret=3dssascu6mej4fuptij43jdbh4' //YOUR_CONSUMER_SECRET
    + '&grant_type=authorization_code'
    + '&redirect_uri=https://bxchang04.github.io/meetup' //YOUR_CONSUMER_REDIRECT_URI
    //+ '&code=137644aff4659fced3d53371ce3b7042'; //USER_AUTHORIZATION_CODE
    + '&code=' + event.pathParameters.code;

  const info = await axios.post(MEETUP_OAUTH_URL);

  return {
    statusCode: 200,
    body: JSON.stringify({
      access_token: info.data.access_token,
      refresh_token: info.data.refresh_token,
    }),
  };
};
