import { useEffect, useState } from "react";
import "./App.css";

type Ayah = {
  text: string;
  numberInSurah: number;
  surah: {
    number: number;
    englishName: string;
  };
};

type AyahResponse = {
  code: number;
  status: string;
  data: Ayah;
};

function App() {
  const [ayat, setAyat] = useState<Ayah | null>(null);

  useEffect(() => {
    const getRandomNumber = (min: number, max: number) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const fetchQuranAyat = async () => {
      const number = getRandomNumber(1, 6236);
      const url = `https://api.alquran.cloud/v1/ayah/${number}`;
      const response = await fetch(url);
      const result: AyahResponse = await response.json();
      if (result?.code === 200 && result?.status === "OK") {
        setAyat(result?.data);
      }
    };

    fetchQuranAyat();
  }, []);

  return (
    <div className="app">
      <div className="app-header">
        <p>{ayat?.text || "Loading....."}</p>
        <p>
          {ayat?.surah?.englishName} {ayat?.surah ? "[" : ""}
          {ayat?.surah?.number}
          {ayat?.surah ? ":" : ""}
          {ayat?.numberInSurah}
          {ayat?.surah ? "]" : ""}
        </p>
      </div>
    </div>
  );
}

export default App;
