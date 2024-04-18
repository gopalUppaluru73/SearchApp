import { useState } from 'react';
import yelpApi  from './APIInfo';

function useAPIResponse() {
  const [data, setData] = useState('');

  const fetchData = async ({ url, params = {} }) => {
    try {
      const response = await yelpApi.get(url, { params });
      setData(JSON.stringify(response.data));
    } catch (error) {
      setData('Error fetching data');
    }
  };

  return [data, fetchData];
}

export default useAPIResponse;
