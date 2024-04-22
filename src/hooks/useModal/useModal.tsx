import { useDisclosure } from '@mantine/hooks'

export function useModal() {
  const [isOpen, { open, close }] = useDisclosure(false)

  return {
    isOpen,
    open,
    close,
  }
}
