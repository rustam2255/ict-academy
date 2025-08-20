import React from 'react'

const Testimonials = () => {
  const stats = [
    { number: '1', label: 'Academy' },
    { number: '8', label: 'Field of study' },
    { number: '1,3K', label: 'Students' },
    { number: '50+', label: 'Projects' }
  ]

  return (
    <div className="w-full  py-25 px-6">
      <div className="max-w-6xl mx-auto relative">
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-[7px] h-[50px] bg-green-400"></div>
        <div className="grid grid-cols-4 relative">
          <div className="absolute top-0 left-0 right-0 h-[7px] bg-green-400"></div>
          
          {stats.map((stat, index) => (
            <div key={index} className="relative px-8 py-12 text-center group hover:bg-green-400/5 transition-colors duration-300">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[7px] h-[50px] bg-green-400"></div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm md:text-base font-medium group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonials