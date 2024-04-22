import { FC, ReactNode } from 'react'
import { Modal } from '@mantine/core'

interface Props {
  children?: ReactNode
  title?: string
  text?: string
  isOpen: boolean
  close: () => void
}

export const KsModal: FC<Props> = ({ children, isOpen, close, title }) => {
  return (
    <Modal.Root opened={isOpen} onClose={close}>
      <Modal.Overlay />
      <Modal.Content>
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
          <Modal.CloseButton />
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal.Content>
    </Modal.Root>
  )
}
