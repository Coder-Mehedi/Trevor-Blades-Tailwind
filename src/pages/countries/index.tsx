import { Container } from 'components/_root';
import { useCountry } from 'context/country';

const Countries = () => {
  const { countries, loadingCountries, searchText, setSearchText } =
    useCountry();
  if (loadingCountries) return <p>Loading...</p>;

  return (
    <Container>
      <div className='relative flex items-center max-w-md gap-5 py-6 mb-4 ml-auto'>
        <label htmlFor='search' className='text-sm leading-7 text-gray-400'>
          Search
        </label>
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          type='text'
          id='search'
          className='w-full px-3 py-1 text-base leading-8 transition-colors duration-200 ease-in-out border rounded outline-none bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-primary text-secondaryText'
        />
      </div>

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
                    <tr key={country.code}>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        <div className='flex items-center'>
                          <div className='flex-shrink-0 w-10 h-10'>
                            {/* <span className='sm:block md:hidden'>
                              {country.emoji}
                            </span> */}
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
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Countries;
