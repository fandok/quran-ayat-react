import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [ayat, setAyat] = useState({});

  useEffect(() => {
    const getRandomNumber = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const fetchQuranAyat = async () => {
      const number = getRandomNumber(1, 6236);
      const url = `https://api.alquran.cloud/v1/ayah/${number}`;
      const response = await fetch(url);
      const result = await response.json();
      if (result?.code === 200 && result?.status === "OK") {
        setAyat(result?.data);
      }
    };

    fetchQuranAyat();
  }, []);

  return (
    
  );
}

export default App;
