import { ENV } from '@/utils';

export class Saga {
  async allSagas(page, text) {
    try {
      const pagination = `pagination[page]=${page}&pagination[pageSize]=10`;
      const filters = `filters[saga_title][$contains]=${text}`;
      const populate = `populate[books][populate][cover]=*`;

      const urlParams = [filters, pagination, populate]
        .filter((param) => param)
        .join('&');
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.SAGAS}?${urlParams}`;

      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;

      if (result.data) {
        result.data.forEach((saga) => {
          if (saga.attributes.books && saga.attributes.books.data) {
            saga.attributes.books.data.sort(
              (a, b) => a.attributes.order_in_saga - b.attributes.order_in_saga
            );
          }
        });
      }

      return result;
    } catch (error) {
      console.error('Error fetching sagas:', error);
      throw error;
    }
  }
}
