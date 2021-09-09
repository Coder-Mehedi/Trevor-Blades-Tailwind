import AllCountries from 'components/all-countries';
import Loading from 'components/loading';
import Search from 'components/search';
import { Container } from 'components/_root';
import { useCountry } from 'context/country';

const Countries = () => {
  const { countries, loadingCountries, searchText, setSearchText } =
    useCountry();
  if (loadingCountries) return <Loading />;

  return (
    <Container>
      <Search
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      <AllCountries countries={countries} />
    </Container>
  );
};

export default Countries;
