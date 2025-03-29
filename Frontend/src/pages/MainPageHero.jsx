import React from 'react';

const MainPageHero = () => {
  return (
    <div className='relative min-h-[110vh] bg-gradient-to-b from-gray-50 to-white pb-0'>
      <div className='container mx-0 pd-4 py-28'>
        <div className='flex flex-col lg:flex-row items-center justify-between'>
          <h1 className='text-3xl font-bold text-gray-900 leading-tight mb-6'>
            태양광 설비 전문가와 함께
            <span className='block text-blue-600 mt-2'>
              미래를 만들어갑니다.
            </span>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default MainPageHero;