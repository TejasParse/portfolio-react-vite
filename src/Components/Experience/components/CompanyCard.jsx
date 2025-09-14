import React from 'react'

const CompanyCard = ({
  companyName,
  companyImageUrl,
  companyTitle,
  companyDuration,
  gradientType,
}) => {
  // Create the complete gradient class name
  const getGradientClass = (type) => {
    if (!type) return 'bg-gradient-to-b from-blue-800 to-blue-500'; // default gradient
    
    const gradientMap = {
      'psych': 'bg-gradient-to-b from-pink-700 to-pink-500',
      'walnuted': 'bg-gradient-to-b from-green-700 to-green-500',
      'settyl': 'bg-gradient-to-b from-purple-700 to-purple-500',
      'datstek': 'bg-gradient-to-b from-blue-700 to-blue-500',
      'appscms': 'bg-gradient-to-b from-indigo-700 to-indigo-500',
    };
    
    const key = `${type}`;
    return gradientMap[key] || 'bg-gradient-to-b from-blue-500 to-blue-300';
  };

  return (
    <div className='shadow-lg rounded-md border-2 border-white relative'>
      <div className={`min-h-[100px] font-semibold montserrat-font-style ${getGradientClass(gradientType)} rounded-t-md text-center pt-3 pb-8 text-2xl`}>
        {companyName}
      </div>

      {/* Positioned image that overlaps both divs */}
      <div className='absolute left-1/2 top-[100px] transform -translate-x-1/2 -translate-y-1/2 z-10'>
        <img
          src={companyImageUrl}
          alt={companyName}
          className='w-20 h-20 bg-white rounded-full shadow-2xl border-2 border-white'
        />
      </div>

      <div className='exo-2-font-style pt-14 pb-4 px-4 text-2xl'>
        <div className='text-center'>
          {companyTitle}
        </div>
        <div className='text-center text-xl opacity-75'>
          {companyDuration}
        </div>
      </div>
    </div>
  )
}

export default CompanyCard