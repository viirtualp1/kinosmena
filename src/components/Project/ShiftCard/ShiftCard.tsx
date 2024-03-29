import { FC } from 'react'
import { ShiftShortData } from '@/types/Project'

interface Props {
  shift: ShiftShortData
}

export const ShiftCard: FC<Props> = ({ shift }) => {
  return <div>{shift.id}</div>
}
