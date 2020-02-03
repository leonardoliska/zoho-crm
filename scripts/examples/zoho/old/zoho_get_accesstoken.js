require('dotenv').config({path: '../../../../.env'});

// Zoho examples
const ZohoClass = require('../../../../class/Old_Zoho');
const Zoho = new ZohoClass();

Zoho.ZCRMRestClient.getOAuthTokens().then(accesstoken => {
  console.log(accesstoken);
});