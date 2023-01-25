/* eslint-disable import/extensions */
import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise
    .all([uploadPhoto(), createUser()])
    .then((txt) => {
      console.log(`${txt[0].body} ${txt[1].firstName} ${txt[1].lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
