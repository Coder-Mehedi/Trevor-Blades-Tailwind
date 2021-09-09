import { Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { ICountry } from 'utils/interfaces';

const AllCountries = ({ countries }: { countries?: ICountry[] }) => {
  return (
    <div className='flex flex-col mt-6'>
      <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
          <div className='overflow-hidden border-b border-gray-200 shadow sm:rounded-lg'>
            <table className='min-w-full divide-y divide-gray-200'>
              <thead className='bg-gray-50'>
                <tr>
                  <th
                    scope='col'
                    className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase'
                  >
                    Name
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase'
                  >
                    Language
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase'
                  >
                    Phone
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200'>
                {countries?.map((country) => (
                  <Transition
                    appear={true}
                    as={Fragment}
                    show={true}
                    enter='transform transition duration-[400ms]'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='transform duration-400 transition ease-in-out'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                  >
                    <tr key={country.code}>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        <div className='flex items-center'>
                          <div className='flex-shrink-0 w-10 h-10'>
                            <img
                              className='w-10 h-10 rounded-full'
                              src={`https://www.countryflags.io/${country.code}/flat/64.png`}
                              alt=''
                            />
                          </div>
                          <div className='ml-4'>
                            <div className='text-sm font-medium text-gray-900'>
                              {country.name}
                            </div>
                            <div className='text-sm text-gray-500'>
                              {country.code}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        <div className='text-sm text-gray-900'>
                          {country?.languages[0]?.name}
                        </div>
                        <div className='text-sm text-gray-500'>
                          {country.languages[0]?.native}
                        </div>
                      </td>
                      <td className='px-6 py-4 text-sm text-gray-500 whitespace-nowrap'>
                        {country.phone}
                      </td>
                    </tr>
                  </Transition>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCountries;
