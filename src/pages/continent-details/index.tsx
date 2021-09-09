import AllCountries from 'components/all-countries';
import Loading from 'components/loading';
import Search from 'components/search';
import { Container } from 'components/_root';
import { useContinent } from 'context/continent';
import { useState } from 'react';
import { useHistory } from 'react-router';

import { IContinent, ICountry } from 'utils/interfaces';

const ContinentDetails = () => {
  const history: any = useHistory();
  const continent: IContinent = history.location.state;
  const countries: ICountry[] = continent.countries;

  const { loadingContinents } = useContinent();

  const [searchText, setSearchText] = useState('');
  const [filteredCountries, setFilteredCountries] = useState<ICountry[]>([]);

  const handleSearch = (e: any) => {
    setSearchText(e.target.value);
    setFilteredCountries(() =>
      countries.filter((country: ICountry) =>
        country.name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  };

  if (loadingContinents) return <Loading />;
  return (
    <Container>
      <Search value={searchText} onChange={handleSearch} />
      <h1>
        <span className='pr-1 text-gray-500 '>Continent Name: </span>
        {continent.name}
      </h1>
      <h1>
        <span className='pr-2 text-gray-500'>Continent Code: </span>{' '}
        {continent.code}
      </h1>

      <AllCountries
        countries={filteredCountries.length ? filteredCountries : countries}
      />
    </Container>
  );
};

export default ContinentDetails;
