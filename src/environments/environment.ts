// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDBgyvX55wjxG7AVLfETAUCq9HUmE6wuM8',
    authDomain: 'fir-demo-bc7ee.firebaseapp.com',
    databaseURL: 'https://fir-demo-bc7ee.firebaseio.com',
    projectId: 'fir-demo-bc7ee',
    storageBucket: 'fir-demo-bc7ee.appspot.com',
    messagingSenderId: '301938741999'
  }
};
