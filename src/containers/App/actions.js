import {
  FETCH_APP_VERSION,
} from './constants';

export function appVersion(params) {
  return ({ fetch }) => ({
    type: FETCH_APP_VERSION,
    payload: {
      promise: fetch().appVersion({ params })
        .then(res => res.body)
        .catch(err => {
          throw err;
        }),
    },
  });
}
