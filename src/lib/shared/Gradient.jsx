import React from 'react'

const Gradient = ({name, value}) => {
  return (
    <>
      <div className="bg-inherit flex flex-col justify-center items-center w-[124px]">
          <p className="bg-inherit font-semibold">{name}</p>
          <p className="bg-inherit font-semibold">{value}</p>
        </div>
       
    </>
  )
}

export default Gradient
