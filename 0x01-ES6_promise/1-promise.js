/* eslint-disable prefer-promise-reject-errors */
export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    switch (success) {
      case true:
        resolve({ status: 200, body: 'Success' });
        break;
      case false:
        reject('The fake API is not working currently');
        break;
      default:
        break;
    }
  });
}
