import { MsalAuthProvider, LoginType } from 'react-aad-msal';

// Msal Configurations
const config = {
  auth: {
    authority: 'https://login.microsoftonline.com/<TenantID>',
    clientId: '<AppID2>',
    redirectUri: `${window.location.origin}/def`,
    navigateToLoginRequestUrl: true
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: true
  }
};

// Authentication Parameters
const authenticationParameters = {
  scopes: [
    'https://graph.microsoft.com/User.Read',
  ]
}

// Options
const options = {
  loginType: LoginType.Redirect,
  tokenRefreshUri: window.location.origin + '/def'
}

export const authProvider = new MsalAuthProvider(config, authenticationParameters, options)