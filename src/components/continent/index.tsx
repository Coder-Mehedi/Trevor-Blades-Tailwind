import { IContinent } from 'utils/interfaces';

const Continent = ({ continent }: { continent: IContinent }) => {
  return (
    <div className='group relative'>
      <div className='transform skew-y-6 w-full min-h-80 text-white font-bold bg-primary aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none flex items-center justify-center'>
        {continent.name}
      </div>
      <div className='mt-4 flex justify-between transform skew-y-6'>
        <div>
          <h3 className='text-sm text-gray-700'>Continent code</h3>
          <p className='mt-1 text-sm text-gray-700'>Number of countries</p>
        </div>
        <div>
          <p className='text-sm font-medium text-gray-900'>{continent.code}</p>
          <p className='text-sm font-medium text-gray-900'>
            {continent.countries.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Continent;
