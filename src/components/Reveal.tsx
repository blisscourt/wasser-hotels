import type { ElementType, ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
  direction?: 'up' | 'left' | 'right'
  as?: ElementType
  [key: string]: unknown
}

const HIDDEN_OFFSET: Record<'up' | 'left' | 'right', string> = {
  up: 'translate-y-8',
  left: '-translate-x-8',
  right: 'translate-x-8',
}

export default function Reveal({
  children,
  delay = 0,
  className = '',
  direction = 'up',
  as: Tag = 'div',
  ...rest
}: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>()

  return (
    <Tag
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        inView ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${HIDDEN_OFFSET[direction]}`
      } ${className}`}
      style={{ transitionDelay: inView ? `${delay}ms` : '0ms' }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
