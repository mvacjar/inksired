import { ENV, authFetch } from '@/utils';

export class Icon {
  async getAllIcons() {
    try {
      const sort = 'sort=icon_name:asc';
      const populate = 'populate=*';

      const urlParams = [populate, sort].filter((param) => param).join('&');

      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ICONS}?${urlParams}`;

      // Log the URL to the console
      console.log('Fetching icons from URL:', url);

      const response = await authFetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      throw error;
    }
  }

  async iconUpdate(iconId, data) {
    try {
      const populate = 'populate=*';
      const urlParams = [populate].filter((param) => param).join('&');

      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ICONS}/${iconId}?${urlParams}`;
      const params = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data }),
      };

      const response = await authFetch(url, params);
      const result = await response.json();

      if (!response.ok) {
        console.error('Error:', result);
        throw result;
      }

      return result;
    } catch (error) {
      throw error;
    }
  }
}
