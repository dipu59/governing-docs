import React from 'react'
import { cn } from '../../lib/utils'
import { Gradient } from './gradient'

export function GradientTitle({children, className, gradient}) {
  return (
      <h3 className={cn("lg:text-[46px] md:text-[36px] text-[26px] font-heading text-secondery font-bold ", className)}>{children}<Gradient>{ gradient}</Gradient></h3>
  )
}
