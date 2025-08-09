import React from 'react'

function Title({title}) {
  return (
    <div>
      <h2 className="m-10 bg-gradient-to-t from-gray-300 via-gray-500 to-gray-700 bg-clip-text text-transparent text-4xl md:text-5xl font-bold text-center relative">
        {title}
      </h2>
    </div>
  );
}

export default Title
