import { ENV } from '@/utils';

export class Author {
  async searchAuthors(text, page) {
    try {
      const filters = `filters[name_author][$contains]=${text}`;
      const pagination = `pagination[page]=${page}&pagination[pageSize]=10`;
      const sort = `sort[name_author]=desc`;
      const populate = `populate[books][populate]=cover,sagas`;

      const urlParams = [filters, pagination, populate, sort]
        .filter((param) => param)
        .join('&');

      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.AUTHORS}?${urlParams}`;
      console.log('Request URL:', url);

      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw error;

      return result;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
}
