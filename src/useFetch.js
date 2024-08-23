import { useState, useEffect } from 'react';

export function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    setLoading(true);
    fetch(url, { signal: abortController.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => {
        if (error.name !== 'AbortError') {
          setError(error);
        }
      })
      .finally(() => {
        setLoading(false);
      });

    return () => abortController.abort();
  }, [url]);

  return { data, loading, error };
}
