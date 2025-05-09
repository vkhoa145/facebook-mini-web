export const API_VERSION = 'v1';

// System Configuration
export const TIMEOUT_LIMITED = 600000;
export const TIMEOUT_MESSAGE = 'timeout';
export const SERVER_TIMEOUT_MESSAGE = 'Network Error';
export const TIMEOUT_CODE = 'ECONNABORTED';
export const EXPORT_PROCESS_STATUS_TIMER = 5000;

export const ERROR_STATUS_CODE = {
  401: 401,
  403: 403,
  405: 405,
  406: 406,
  408: 408,
  411: 411,
  412: 412,
  413: 413,
  414: 414,
  415: 415,
  416: 416,
  421: 421,
  422: 422,
  425: 425,
  428: 428,
  429: 429,
  431: 431,
  500: 500,
  501: 501,
  502: 502,
  503: 503,
  504: 504,
  505: 505,
};

export enum REDUX_STATUS {
  Idle = 'idle',
  Pending = 'pending',
  Fulfilled = 'fulfilled',
  Rejected = 'rejected',
  Success = 'success',
  Failed = 'failed',
  Succeeded = 'succeeded',
}
export enum SORT_ORDER {
  Ascend = 'ascend',
  Descend = 'descend',
}
export enum SORT_DIRECTION {
  Asc = 'asc',
  Desc = 'desc',
}
