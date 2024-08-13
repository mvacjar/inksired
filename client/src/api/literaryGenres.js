import { ENV } from '@/utils/constants';

export class LiteraryGenres {
  async getAll() {
    try {
      const sort = 'sort=title:asc';
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.LITERARY_GENRES}?${sort}`;
      const response = await fetch(url);
      const result = await response.json();
      if (response.status !== 200) throw result;
      return result;
    } catch (error) {
      throw error;
    }
  }
}
