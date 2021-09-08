import { Transition } from '@headlessui/react';
import Continent from 'components/continent';
import { Container } from 'components/_root';
import { useContinent } from 'context/continent';
import { Fragment } from 'react';

const Continents = () => {
  const { continents, loadingContinents } = useContinent();
  if (loadingContinents) return <p>Loading...</p>;

  return (
    <Container>
      <Transition
        as={Fragment}
        show={true}
        enter='transform transition duration-[400ms]'
        enterFrom='opacity-0 rotate-[-120deg] scale-50'
        enterTo='opacity-100 rotate-0 scale-100'
        leave='transform duration-200 transition ease-in-out'
        leaveFrom='opacity-100 rotate-0 scale-100 '
        leaveTo='opacity-0 scale-95'
      >
        <div className='bg-white'>
          <div className='max-w-2xl mx-auto py-6 px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
            <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
              {continents?.map((continent) => (
                <Continent continent={continent} />
              ))}
            </div>
          </div>
        </div>
      </Transition>
    </Container>
  );
};

export default Continents;
