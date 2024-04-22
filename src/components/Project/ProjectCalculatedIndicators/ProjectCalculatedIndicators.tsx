import { FC, useMemo, useState } from 'react'
import { Box, Button, Collapse, Group, NumberInput, Text } from '@mantine/core'
import { IndicatorData } from '@/types/Project'
import { ArrowDown, ArrowUp } from '@/components/Icons'

interface Props {
  readonly?: boolean
  form?: any
  indicators: IndicatorData[]
  updateIndicatorValue: (field: string, newValue: number) => void
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
  updateIndicatorValue,
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
          {indicators.map((indicator, index) => (
            <Group
              key={index}
              justify="space-between"
              h={40}
              mb={index !== indicators.length - 1 ? 6 : 0}
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
                onInput={(e) =>
                  updateIndicatorValue(indicator.field, (e.target as any).value)
                }
              />
            </Group>
          ))}
        </Box>
      </Collapse>
    </>
  )
}
