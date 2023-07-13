import axios from 'axios';

export default async function handleLogin(username: string, password: string) {
// Request API.
axios
  .post('http://localhost:1337/api/auth/local', {
    identifier: 'test@user.com',
    password: 'AkcentaDigital',
  })
  .then(response => {
    // Handle success.
    console.log('Well done!');
    console.log('User profile', response.data.user);
    console.log('User token', response.data.jwt);
  })
  .catch(error => {
    // Handle error.
    console.log('An error occurred:', error.response);
  });
}