// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  api_url: 'https://conduit.productionready.io/api',
  appInsights: {
        instrumentationKey: '8f03088c-7edb-4858-82f4-b308b19cf00b'
    }

};
