/* eslint-disable react/prop-types */
function Results({ location, ipAddress, isp }) {
  return (
    <div className='bg-white z-100 flex flex-col  gap-3 rounded-xl p-5 md:flex-row md:gap-6 md:w-[650px] items-center w-96 md:text-center'>
      <div className='flex flex-col items-center'>
        <p className='text-xs text-dark-gray uppercase'>IP Address</p>
        <h2 className='font-medium text-lg'>{ipAddress}</h2>
      </div>
      <div className='flex flex-col items-center'>
        <p className='text-xs text-dark-gray uppercase'>Location</p>
        <h2 className='font-medium text-lg'>
          {location.city}, {location.country} {location.geonameId}{" "}
        </h2>
      </div>
      <div className='flex flex-col items-center'>
        <p className='text-xs text-dark-gray uppercase'>Timezone</p>
        <h2 className='font-medium text-lg'>UTC{location.timezone}</h2>
      </div>
      <div className='flex flex-col items-center'>
        <p className='text-xs text-dark-gray uppercase'>ISP</p>
        <h2 className='font-medium text-lg'>{isp}</h2>
      </div>
    </div>
  );
}

export default Results;
