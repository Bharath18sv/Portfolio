import React from 'react'

function Title({title}) {
  return (
    <div>
      <h2 className="bg-gradient-to-r from-white to-gray-800 bg-clip-text text-transparent text-4xl md:text-5xl font-bold text-center relative">
        {title}
      </h2>
    </div>
  );
}

export default Title
