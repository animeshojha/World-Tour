import React, { useEffect, useState, useTransition } from 'react';
import { getCountryData } from '../api/postApi';
import Loader from '../components/UI/Loader';
import CountryCard from '../components/Layout/CountryCard';
import SearchFilter from '../components/UI/SearchFilter';
const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [visibleCount, setVisibleCount] = useState(20); // show first 20 initially

  const [search, setSearch] = useState()
  const [filter, setFilter] = useState("all")

  useEffect(() => {
    const fetchData = async () => {
      const res = await getCountryData();
      console.log("API response:", res);

      startTransition(() => {
        setCountries(res.data);
      });
    };

    fetchData();
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 20); // load 20 more each time
  };

  if (isPending || countries.length === 0) return <Loader />;

  const searchCountry=(country)=>{
    if(search){
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  }
  const filterRegion=(country)=>{
    if(filter === 'all')return country;
    
      return country.region === filter;
  }

 const filterCountries= countries.filter((country)=> searchCountry(country)  && filterRegion(country));

  return (
    <section className='country-section'>
      <SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} countries={countries} setCountries={setCountries}></SearchFilter>
      <ul className='grid grid-four-cols'>
        {filterCountries.slice(0, visibleCount).map((currCountry, i) => (
          <CountryCard country={currCountry} key={i} />
        ))}
      </ul>

      {/* Show Load More button only if more countries are left */}
      {visibleCount < countries.length && (
        <div style={{ display: 'flex', marginLeft: '129rem', marginTop: '3rem' }}>
          <button onClick={handleLoadMore}>Show More</button>
        </div>

      )}
    </section>
  );
};

export default Country;
