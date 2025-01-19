import { useState, useEffect } from 'react';

const useCurrinfo = (fromCurrency) => {
  const [currencyInfo, setCurrencyInfo] = useState({});
  const [currencyRates, setCurrencyRates] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetching currency options (list of currencies)
    fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json')
      .then((response) => {
        if (!response.ok) throw new Error('Failed to fetch currencies');
        return response.json();
      })
      .then((data) => setCurrencyInfo(data))
      .catch((error) => {
        console.error('Error fetching currencies:', error);
        setError(error.message);
      });

    // Fetch conversion rates for the selected `fromCurrency`
    if (fromCurrency) {
      fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/latest/currencies/${fromCurrency}.json`)
        .then((response) => {
          if (!response.ok) throw new Error('Failed to fetch rates');
          return response.json();
        })
        .then((data) => {
          console.log(`Rates for ${fromCurrency}:`, data); // Log the fetched conversion rates
          setCurrencyRates(data[fromCurrency]);
        })
        .catch((error) => {
          console.error("Error fetching rates:", error); // Log the error if the API request fails
          setError(error.message);
        });
    }
  }, [fromCurrency]); // Re-fetch rates when `fromCurrency` changes

  return { currencyInfo, currencyRates, error };
};

export default useCurrinfo;
