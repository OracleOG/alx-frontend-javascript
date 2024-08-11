import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const [photo, user] = await Promise.allSettled([uploadPhoto(fileName),
    createUser(firstName, lastName)]);
  return [{
    status: user.status,
    value: user.status === 'fulfilled' ? user.value : user.reason,
  },
  {
    status: photo.status,
    value: photo.status === 'fulfilled' ? photo.value : photo.reason,
  }];
}
