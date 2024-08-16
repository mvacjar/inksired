import { ENV } from '@/utils/constants';

export class Book {
  async getLastBookPublished() {
    try {
      const sort = 'sort=publishedAt:desc';
      const pagination = 'pagination[limit]=5';
      const populate = 'populate=*';
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.BOOKS}?${sort}&${pagination}&${populate}`;
      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }
}
