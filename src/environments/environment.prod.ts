const BASE_MAXIMO_URL = 'http://vm-win2012r2.com.tw:9080/maximo/';
const BASE_MAXIMO_JSON_URL = BASE_MAXIMO_URL + 'oslc/os/';
const BASE_MAXIMO_REST_URL = BASE_MAXIMO_URL + 'rest/mbo/';

export const environment = {
  production: true,
  BASE_MAXIMO_URL  : BASE_MAXIMO_URL,
  BASE_MAXIMO_WO_URL : BASE_MAXIMO_JSON_URL + 'mxwo',
};
