// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const BASE_MAXIMO_URL = 'http://vm-win2012r2.com.tw:9080/maximo/';
const BASE_MAXIMO_JSON_URL = BASE_MAXIMO_URL + 'oslc/os/';
const BASE_MAXIMO_REST_URL = BASE_MAXIMO_URL + 'rest/mbo/';

export const environment = {
  production: false,
  BASE_MAXIMO_URL  : BASE_MAXIMO_URL,
  BASE_MAXIMO_WO_URL : BASE_MAXIMO_JSON_URL + 'mxwo',
};
