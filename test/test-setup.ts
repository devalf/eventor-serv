import axios from 'axios';

module.exports = async function () {
  // Configure axios for tests to use.
  const host = process.env.HOST ?? 'localhost';
  const port = process.env.PORT ?? '8050';
  axios.defaults.baseURL = `http://${host}:${port}`;
  axios.defaults.headers.common['X-Authorization-Simulation'] =
    'jwt-simulation-token';
};
