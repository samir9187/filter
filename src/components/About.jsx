import React from 'react'

const About = () => {
  return (
    <section className="p-6 sm:p-10">
      <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-lg min-h-[300px] sm:min-h-[400px]">
       
        <h1 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-center mb-6">
          About Us
        </h1>
    

        <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-4">
          At our core, we are a team of passionate individuals who are committed to delivering excellence in everything we do. Our journey began with a simple mission: to provide innovative solutions that empower businesses and individuals to thrive in a constantly changing world. Over the years, we’ve built a reputation for creating high-quality products and services that cater to diverse needs across various industries. Our team is a blend of creative thinkers, problem solvers, and technology enthusiasts, all working together to drive meaningful change. We believe in the power of collaboration, and it is this spirit that enables us to tackle challenges and find solutions that truly make a difference. 
        </p>
        
        <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-4">
          Our company’s values are deeply rooted in integrity, innovation, and customer satisfaction. We prioritize building long-term relationships with our clients and partners, ensuring that we understand their unique needs and provide tailored solutions.
        </p>
    
        <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
          We are excited to continue our journey, bringing you the best of what we have to offer. Together, we can achieve great things and shape a better future. Thank you for being a part of our story.
        </p>
      </div>
    </section>
  )
}

export default About
