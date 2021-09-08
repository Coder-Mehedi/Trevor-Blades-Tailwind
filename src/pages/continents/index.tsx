import Continent from 'components/continent';
import { Container } from 'components/_root';
import { useContinent } from 'context/continent';

const Continents = () => {
  const { continents, loadingContinents } = useContinent();

  if (loadingContinents) return <p>Loading...</p>;

  return (
    <Container>
      <div className='bg-white'>
        <div className='max-w-2xl px-4 py-6 mx-auto sm:px-6 lg:max-w-7xl lg:px-8'>
          <div className='grid grid-cols-1 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
            {continents?.map((continent) => (
              <Continent continent={continent} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Continents;
