import { ENV, authFetch } from '@/utils';

export class Address {
  async create(data, userId) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ADDRESS}`;
      const params = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: { ...data, user: userId } }),
      };

      const response = await authFetch(url, params);
      const result = await response.json();

      if (!response.ok) {
        console.error('Error:', result);
        throw result;
      }

      return result;
    } catch (error) {
      console.error('Catch Error:', error);
      throw error;
    }
  }

  async getAll(userId) {
    try {
      const filter = `filters[user][id][$eq]=${userId}`;
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ADDRESS}?${filter}`;

      console.log('URL:', url);

      const response = await authFetch(url);
      const result = await response.json();

      console.log('Response:', response);
      console.log('Result:', result);

      if (!response.ok) {
        console.error('Error:', result);
        throw result;
      }

      return result;
    } catch (error) {
      console.error('Catch Error:', error);
      throw error;
    }
  }
}
