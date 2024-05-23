import React, { createContext, useState, useEffect } from 'react';
// Import data
import { housesData } from '../data';

// Create context
export const HouseContext = createContext();

// Provider
const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState('اختر مكانك');
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState('نوع العقار (أي)');
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('نطاق السعر (أي)');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const uniqueCountries = ['اختر مكانك', ...new Set(houses.map((house) => house.country))];
    setCountries(uniqueCountries);
  }, [houses]);

  useEffect(() => {
    const uniqueProperties = ['نوع العقار (أي)', ...new Set(houses.map((house) => house.type))];
    setProperties(uniqueProperties);
  }, [houses]);

  const handleClick = () => {
    setLoading(true);

    const isDefault = (str) => str.includes('(أي)');
    const [minPrice, maxPrice] = price.split(' - ').map(p => parseInt(p.replace(/,/g, ''), 10));

    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price.replace(/,/g, ''), 10);

      if (isDefault(country) && isDefault(property) && isDefault(price)) return true;
      if (!isDefault(country) && house.country !== country) return false;
      if (!isDefault(property) && house.type !== property) return false;
      if (!isDefault(price) && (housePrice < minPrice || housePrice > maxPrice)) return false;

      return true;
    });

    setTimeout(() => {
      setHouses(newHouses);
      setLoading(false);
    }, 1000);
  };

  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        handleClick,
        houses,
        loading,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
