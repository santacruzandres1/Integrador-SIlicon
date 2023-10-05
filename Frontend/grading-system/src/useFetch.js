import { useState, useEffect } from 'react';

export function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data))
  }, [url]); // Incluye 'url' en el arreglo de dependencias para que useEffect se ejecute cuando cambie

  return { data };
}
