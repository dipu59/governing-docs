import React from 'react'

export  const ClientInfo = ({url, name, reaction}) => {
  return (
    <div className="gradient_border flex-grow w-full  bg-white rounded-[20px] h-[91px] ">
    <div className="flex gap-[13px] justify-start items-center">
      <img src={url} alt="" />
      <div className="text-grya font-semibold">
        <h4>{name}</h4>
        <h4>{reaction}</h4>
      </div>
    </div>
  </div>
  )
}

