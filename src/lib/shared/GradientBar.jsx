import React from 'react'

const GradientBar = ({name, value}) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center md:w-[124px] w-[100px]">
          <p className=" md:font-semibold font-medium">{name}</p>
          <p className=" md:font-semibold font-medium">{value}</p>
        </div>
       
    </>
  )
}

export default GradientBar
