import Loading from 'components/loading';
import Search from 'components/search';
import { Container } from 'components/_root';
import { useLanguage } from 'context/language';
import React from 'react';

const Languages = () => {
  const { languages, loadingLanguages, searchText, setSearchText } =
    useLanguage();
  if (loadingLanguages) return <Loading />;

  return (
    <Container>
      <Search
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
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
                      Native
                    </th>

                    <th
                      scope='col'
                      className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase'
                    >
                      Code
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase'
                    >
                      rtl
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200'>
                  {languages?.map((language) => (
                    <tr key={language.code}>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        <div className='flex items-center'>
                          <div className='ml-4'>
                            <div className='text-sm font-medium text-gray-900'>
                              {language.name}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className='px-6 py-4 text-sm text-gray-500 whitespace-nowrap'>
                        {language.native}
                      </td>
                      <td className='px-6 py-4 text-sm text-gray-500 whitespace-nowrap'>
                        {language.code}
                      </td>
                      <td className='px-6 py-4 text-sm text-gray-500 whitespace-nowrap'>
                        {language.rtl ? 'Yes' : 'No'}
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

export default Languages;
