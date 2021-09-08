import { useQuery } from '@apollo/client';
import { GET_COUNTRIES } from 'api/graphql/query/countries';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { ICountry } from 'utils/interfaces';

const CountryContext = createContext({
  countries: [] as ICountry[],
  loadingCountries: true,
  searchText: '',
  setSearchText: (searchText: string) => {},
});

function CountryProvider({ children }: { children: ReactNode }) {
  const [searchText, setSearchText] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);
  const { data: countries, loading: loadingCountries } = useQuery(
    GET_COUNTRIES,
    {
      onError: (err) => console.log(err),
    }
  );
  useEffect(() => {
    if (searchText) {
      setFilteredCountries(() =>
        countries?.countries.filter((country: ICountry) =>
          country.name
            .toLocaleLowerCase()
            .includes(searchText.toLocaleLowerCase())
        )
      );
    } else {
      setFilteredCountries([]);
    }
    // eslint-disable-next-line
  }, [searchText]);

  return (
    <CountryContext.Provider
      value={{
        countries: filteredCountries.length
          ? filteredCountries
          : countries?.countries,
        loadingCountries,
        searchText,
        setSearchText,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
}

const useCountry = () => useContext(CountryContext);

export { CountryProvider, useCountry };
