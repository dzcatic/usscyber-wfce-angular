// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //apiUrl: "http://192.168.0.14:8080/laravel/wfceAppDB/public/api/"
  apiUrl: "http://13.66.167.226/api/",
  redirectUrl: 'http://localhost:4200',
  imageBaseUrl: 'http://localhost:4200/'
};
//redirectUri: 'http://usscyber.com/wfce/',
//redirectUri: 'http://localhost:4200',
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
