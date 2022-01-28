import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID LGV53cf_9SWU-tlFQvueqbBIyIbLy9vLJWsV-9NFJbE',
  },
});
