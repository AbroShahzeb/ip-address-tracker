function Search() {
  return (
    <div className='w-96 bg-white flex items-center justify-between rounded-xl sm:w-[500px] overflow-hidden'>
      <input
        type='text'
        placeholder='Search for any IP address or domain'
        className='pl-5 py-3 w-full text-md focus:outline-none text-very-dark-gray font-medium'
      />
      <img
        src='/images/icon-arrow.svg'
        alt='Arrow icon'
        className='bg-very-dark-gray h-full p-5'
      />
    </div>
  );
}

export default Search;
