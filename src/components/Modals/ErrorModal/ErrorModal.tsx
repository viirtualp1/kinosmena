import { FC, ReactNode } from 'react'
import { KsModal } from '../KsModal'

interface Props {
  isOpen: boolean
  close: () => void
  children: ReactNode
}

export const ErrorModal: FC<Props> = ({ isOpen, close, children }) => {
  return (
    <KsModal isOpen={isOpen} close={close} title="Ошибка">
      {children}
    </KsModal>
  )
}
