interface Props {
  value: string;
  onChange: (e: any) => void;
}

const Search = ({ value, onChange }: Props) => {
  return (
    <div className='relative flex items-center max-w-md gap-5 py-6 mb-4 ml-auto'>
      <label htmlFor='search' className='text-sm leading-7 text-gray-400'>
        Search
      </label>
      <input
        value={value}
        onChange={onChange}
        type='text'
        id='search'
        className='w-full px-3 py-1 text-base leading-8 transition-colors duration-200 ease-in-out border rounded outline-none bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-primary text-secondaryText'
      />
    </div>
  );
};

export default Search;
