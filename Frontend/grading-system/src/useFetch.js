import { useState, useEffect } from 'react';

export function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data))
  }, []); // Debes incluir url como dependencia para que useEffect se ejecute cuando cambie

  return { data };
}
