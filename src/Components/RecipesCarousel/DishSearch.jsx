import React, { useEffect, useState } from 'react';
import { getDishDetails } from '../../gemini.js';

function DishSearch({ dishName }) {
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchData() {
      if (!dishName) return;
      setLoading(true);
      setResult('');
      setError('');

      try {
        const res = await getDishDetails(dishName);
        setResult(res);
      } catch (err) {
        console.error("Gemini fetch error:", err);
        setError('❌ Failed to fetch from Gemini. Please try again.');
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [dishName]);

  if (!dishName) return null;

  return (
    <div className="mt-6 bg-gray-100 p-4 rounded max-w-2xl mx-auto">
      {loading ? (
        <p className="text-gray-600">🔄 Fetching details from Gemini...</p>
      ) : error ? (
        <p className="text-red-600">{error}</p>
      ) : (
        <pre className="whitespace-pre-wrap text-sm">{result}</pre>
      )}
    </div>
  );
}

export default DishSearch;
