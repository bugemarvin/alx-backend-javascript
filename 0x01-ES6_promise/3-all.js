/* eslint-disable import/extensions */
import { createUser, uploadPhoto } from './utils.js';

export default function handleProfileSignup() {
  return Promise
    .all([createUser(), uploadPhoto()])
    .then((txt) => console.log(`${txt[0].body} ${txt[0].firstName} ${txt[0].lastName}`));
}
