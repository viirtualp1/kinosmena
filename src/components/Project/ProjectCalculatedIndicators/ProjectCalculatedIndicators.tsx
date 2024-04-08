import { FC, MutableRefObject, useMemo, useState } from 'react'
import { Box, Button, Collapse, Group, NumberInput, Text } from '@mantine/core'
import { BlockData } from '@/types/Project'
import { ArrowDown, ArrowUp } from '@/components/Icons'

interface Props {
  readonly?: boolean
  indicators: MutableRefObject<BlockData[]>
}

const buttonStyles = {
  inner: {
    display: 'grid',
    gridTemplateColumns: '1fr 24px',
  },
  label: {
    justifySelf: 'center',
  },
  section: {
    marginInlineStart: 0,
  },
}

const boxStyles = {
  padding: '8px 12px',
  border: '1px solid rgb(6, 11, 24)',
  borderRadius: '12px',
}

export const ProjectCalculatedIndicators: FC<Props> = ({
  readonly,
  indicators,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const ButtonRightSection = useMemo(
    () => (isOpen ? ArrowUp : ArrowDown),
    [isOpen],
  )

  return (
    <>
      <Button
        fullWidth
        h={48}
        mb="4px"
        bg="#363A43"
        styles={buttonStyles}
        rightSection={<ButtonRightSection style={{ fill: '#fff' }} />}
        onClick={() => setIsOpen(!isOpen)}
      >
        Расчетные показатели
      </Button>

      <Collapse in={isOpen}>
        <Box style={boxStyles}>
          {indicators.current.map((indicator, index) => (
            <Group
              key={index}
              justify="space-between"
              h={40}
              mb={index !== indicators.current.length - 1 ? 6 : 0}
            >
              <Text fz={14}>{indicator.label}</Text>

              <NumberInput
                variant="unstyled"
                size="sm"
                maw={56}
                min={0}
                rightSection={<Text c="#0594FA">₽</Text>}
                rightSectionWidth={10}
                placeholder="0"
                thousandSeparator=" "
                clampBehavior="strict"
                readOnly={readonly}
                onChange={(v) => (indicator.value = Number(v || 0))}
              />
            </Group>
          ))}
        </Box>
      </Collapse>
    </>
  )
}
