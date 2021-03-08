// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // apiUrl: "https://api.nextquest.in/api"
  apiUrl: "http://localhost:5000/api"
};

export const authconfig = {
  aws_project_region: 'eu-central-1',
  aws_cognito_region: 'eu-central-1',
  aws_user_pools_id: 'eu-central-1_hS14qHtjF',
  aws_user_pools_web_client_id: '3iu5q81uo546o73j7lus893j0k',
  oauth: {
    domain: 'nextquest.auth.eu-central-1.amazoncognito.com',
    scope: ['email', 'openid', 'profile'],
    redirectSignIn: 'http://localhost:4200',
    redirectSignOut: 'http://localhost:4200',
    responseType: 'code'
  }
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
