import { FC } from 'react'
import { KsModal } from '@/components/Modals/KsModal'

interface Props {
  isOpen: boolean
  close: () => void
}

export const ErrorModal: FC<Props> = ({ isOpen, close }) => {
  return <KsModal isOpen={isOpen} close={close} title="Error Modal"></KsModal>
}
