import React, { useEffect, useState } from 'react';
import { cssApp, cssAppHeader } from './style';

const App = () => {
  const [ayat, setAyat] = useState({});

  useEffect(() => {
    const getRandomNumber = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    const fetchQuranAyat = async () => {
      const number = getRandomNumber(1, 6236);
      const url = `https://api.alquran.cloud/v1/ayah/${number}`;
      const response = await fetch(url);
      const result = await response.json();
      if (result?.code === 200 && result?.status === "OK") {
        setAyat(result?.data);
      }
    }
    
    fetchQuranAyat();
  }, []);

  return (
    <div css={cssApp}>
      <div css={cssAppHeader}>
        <p>
          {ayat?.text || "Loading....."}
        </p>
        <p>
          {ayat?.surah?.englishName} {ayat?.surah ? '[' : ''}{ayat?.surah?.number}{ayat?.surah ? ':' : ''}{ayat?.numberInSurah}{ayat?.surah ? ']' : ''}
        </p>
      </div>
    </div>
  );
}

export default App;
