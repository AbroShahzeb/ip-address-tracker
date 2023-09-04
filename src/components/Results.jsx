function Results() {
  return (
    <div className='bg-white z-100 flex flex-col  gap-3 rounded-xl p-5 md:flex-row md:gap-6 md:w-[650px] items-center w-96'>
      <div className='flex flex-col items-center'>
        <p className='text-xs text-dark-gray uppercase'>IP Address</p>
        <h2 className='font-medium text-lg'>192.292.174.101</h2>
      </div>
      <div className='flex flex-col items-center'>
        <p className='text-xs text-dark-gray uppercase'>Location</p>
        <h2 className='font-medium text-lg'>Brooklyn, NY 10001</h2>
      </div>
      <div className='flex flex-col items-center'>
        <p className='text-xs text-dark-gray uppercase'>Timezone</p>
        <h2 className='font-medium text-lg'>UTC -5:00</h2>
      </div>
      <div className='flex flex-col items-center'>
        <p className='text-xs text-dark-gray uppercase'>ISP</p>
        <h2 className='font-medium text-lg'>SpaceX Starlink</h2>
      </div>
    </div>
  );
}

export default Results;
