import { Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { IContinent } from 'utils/interfaces';

const Continent = ({ continent }: { continent: IContinent }) => {
  return (
    <>
      <Transition
        appear={true}
        as={Fragment}
        show={true}
        enter='transform transition duration-[400ms]'
        enterFrom='opacity-0 rotate-[-120deg] scale-50'
        enterTo='opacity-100 rotate-0 scale-100'
        leave='transform duration-200 transition ease-in-out'
        leaveFrom='opacity-100 rotate-0 scale-100 '
        leaveTo='opacity-0 scale-95'
      >
        <div className='relative group'>
          <div className='flex items-center justify-center w-full overflow-hidden font-bold text-white transform skew-y-6 rounded-md min-h-80 bg-primary aspect-w-1 aspect-h-1 group-hover:opacity-75 lg:h-80 lg:aspect-none'>
            {continent.name}
          </div>
          <div className='flex justify-between mt-4 transform skew-y-6'>
            <div>
              <h3 className='text-sm text-gray-700'>Continent code</h3>
              <p className='mt-1 text-sm text-gray-700'>Number of countries</p>
            </div>
            <div>
              <p className='text-sm font-medium text-gray-900'>
                {continent.code}
              </p>
              <p className='text-sm font-medium text-gray-900'>
                {continent.countries.length}
              </p>
            </div>
          </div>
        </div>
      </Transition>
    </>
  );
};

export default Continent;
