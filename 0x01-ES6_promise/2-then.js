export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    try {
      if (promise === true) {
        resolve({ status: 200, body: 'Success' });
      }
    } catch (Error) {
      reject(Error(''));
    } finally {
      console.log('Got a response from the API');
    }
  });
}
