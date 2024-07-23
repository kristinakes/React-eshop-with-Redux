import { useState, useEffect } from "react";

function useFetch(url, options) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=> {
    setTimeout(()=> {
        fetch(url, options).then(result => {
            if (!result.ok) {
                throw Error('Error fetching data');
            }
            return result.json();
        }).then(data => {
            setData(data);
            setIsPending(false);
            setError(null);
        }).catch(err => {
            setIsPending(false);
            setError(err.message)
        });
    }, 1000);
  }, [url, options]);

  return {data, isPending, error};
}
export default useFetch;
