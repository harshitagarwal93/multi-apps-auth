# Simple React project to have multiple apps authentication
This React app aims to showcase the scenario where multiple apps need to co-exist together (Micro Frontend scenarios) and have independent authentication of their own.
The Azure AD Appps would be different for them, but because of the shared consent with delegated APIs, a token generated in App1 would be able to be used seamlessly in App2.

## To run the Project:
Install yarn and update dependencies:
```
npm i -g yarn
yarn
```
Replace the AppIds and Tenant info in `authProvider1.js` and `authProvider2.js`.

Run the application!
```
yarn start
```

`/abc` is the path for the first protected component.

`/def` is the path for the second protected component.


### Todos:
1. Update the implementation to support multiple instances of MSAL Auth provider running at once (Not necessary in Micro frontend scenarios)
2. Move to first party MSAL.js library
3. Update tests