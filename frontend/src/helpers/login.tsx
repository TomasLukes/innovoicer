import axios from 'axios';

export default async function handleLogin(username: string, password: string) {
try {
  const response = await axios
    .post('http://localhost:1337/api/auth/local', {
      identifier: username,
      password: password,
  })

  console.log('Well done!');
  console.log('User profile', response.data.user);
  console.log('User token', response.data.jwt);
  document.cookie = `token = ${response.data.jwt}`;

} catch(error: any) {
    console.log('An error occurred:', error.response);
  };
}