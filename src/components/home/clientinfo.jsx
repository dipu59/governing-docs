import React from 'react'
import { cn } from '../../lib/utils'

export  const ClientInfo = ({url, name, reaction, active, onClick}) => {
  return (
    
    <button onClick={onClick} className={cn("border-primary border rounded-[20px] inline-flex w-full  gap-[13px] justify-start items-center h-[92px]", active && 'bg-gradient-primary text-white')}>
      <img src={url} alt="" />
      <div className={cn("text-grya font-semibold", active && 'text-white')}>
        <h4>{name}</h4>
        <h4>{reaction}</h4>
      </div>
    </button>
  
  )
}

