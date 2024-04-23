import { FC, Fragment, useMemo, useState } from 'react'
import { Box, Button, Collapse, Group, NumberInput, Text } from '@mantine/core'
import { UseFormReturnType } from '@mantine/form'
import { FormValues, IndicatorData } from '@/types/Project'
import { useColors } from '@/hooks/useColors'
import { ArrowDown, ArrowUp } from '@/components/Icons'
import { useProjectIndicatorsStyles } from './useProjectIndicatorsStyles.ts'

interface Props {
  readonly?: boolean
  form?: UseFormReturnType<FormValues, (values: FormValues) => FormValues>
  indicators: IndicatorData[]
  updateIndicatorValue?: (field: string, newValue: number) => void
}

export const ProjectCalculatedIndicators: FC<Props> = ({
  readonly,
  indicators,
  updateIndicatorValue,
  form,
}) => {
  const { accentTextColor, buttonColor } = useColors()
  const { buttonStyles, boxStyles } = useProjectIndicatorsStyles()
  const [isOpen, setIsOpen] = useState(false)

  const ButtonRightSection = useMemo(
    () => (isOpen ? ArrowUp : ArrowDown),
    [isOpen],
  )

  const handleIndicatorValue = (field: string, value: number) => {
    updateIndicatorValue && updateIndicatorValue(field, value)
    form?.setFieldValue(field, value)
  }

  return (
    <>
      <Button
        fullWidth
        h={48}
        mb={4}
        bg={buttonColor}
        styles={buttonStyles}
        rightSection={<ButtonRightSection style={{ fill: '#fff' }} />}
        onClick={() => setIsOpen(!isOpen)}
      >
        Расчетные показатели
      </Button>

      <Collapse in={isOpen}>
        <Box style={boxStyles}>
          {indicators.map((indicator, index) => (
            <Fragment key={index}>
              <Group justify="space-between" h={40} mb={0}>
                <Text fz={14}>{indicator.label}</Text>

                <NumberInput
                  variant="unstyled"
                  size="sm"
                  maw={56}
                  min={0}
                  rightSection={
                    <Text c={accentTextColor}>{indicator.symbol}</Text>
                  }
                  rightSectionWidth={10}
                  placeholder="0"
                  thousandSeparator=" "
                  clampBehavior="strict"
                  readOnly={readonly}
                  errorProps={{ style: { display: 'none' } }}
                  onInput={(e) =>
                    handleIndicatorValue(
                      indicator.field,
                      (e.target as any).value,
                    )
                  }
                />
              </Group>

              {form?.errors[indicator.field] && (
                <Text
                  fz={12}
                  c="red"
                  style={{ textAlign: 'right' }}
                  mb={index !== indicators.length - 1 ? 6 : 0}
                >
                  {form?.errors[indicator.field]}
                </Text>
              )}
            </Fragment>
          ))}
        </Box>
      </Collapse>
    </>
  )
}
