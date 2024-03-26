import { FC } from 'react'
import { Card, Group, NumberInput, Switch, Text } from '@mantine/core'
import { DateTimePicker } from '@mantine/dates'
import { isNotEmpty, useForm } from '@mantine/form'
import { useShiftFormStyles } from '@/components/Shift/ShiftForm/useShiftFormStyles.ts'
// import { useMainButton } from '@tma.js/sdk-react'

interface Props {
  isCreating: boolean | undefined
  isEditing: boolean | undefined
}

interface FormValues {
  start: Date | null
  end: Date | null
  wasCurrentLunch: boolean
  wasLatelyLunch: boolean
  dailyAllowance: boolean
  dayOffShift: boolean
  overtimeHours: number | null
  deprivationHoursSleep: number | null
  additionalServices: number | null
}

const getForm = (): FormValues => {
  return {
    start: null,
    end: null,
    wasCurrentLunch: false,
    wasLatelyLunch: false,
    dailyAllowance: false,
    dayOffShift: false,
    overtimeHours: null,
    deprivationHoursSleep: null,
    additionalServices: null,
  }
}

export const ShiftForm: FC<Props> = (props) => {
  // const mainButton = useMainButton()
  const initialValues = getForm()
  const { cardStyles } = useShiftFormStyles()

  const form = useForm<FormValues>({
    initialValues,
    validate: {
      start: isNotEmpty('Некорректная дата'),
      end: isNotEmpty('Некорректная дата'),
      overtimeHours: isNotEmpty('Поле обязательно к заполнению'),
      deprivationHoursSleep: isNotEmpty('Поле обязательно к заполнению'),
    },
  })

  const submitForm = form.onSubmit(async () => {
    console.log('submit')
    console.log(form.values)
  })

  return (
    <form onSubmit={submitForm}>
      <DateTimePicker
        valueFormat="DD.MM.YYYY HH:mm"
        label="Начало"
        labelProps={{ mb: '12px', fz: '14px' }}
        placeholder="17.03.2024 15:30"
        clearable
        size="md"
        radius="12px"
        mb="24px"
        {...form.getInputProps('start')}
      />

      <DateTimePicker
        valueFormat="DD.MM.YYYY HH:mm"
        label="Окончание"
        labelProps={{ mb: '12px', fz: '14px' }}
        placeholder="20.03.2024 20:00"
        clearable
        size="md"
        radius="12px"
        mb="24px"
        {...form.getInputProps('end')}
      />

      <Card padding="12px 20px" radius="12px" withBorder styles={cardStyles}>
        <Group h="33px" justify="space-between">
          <Text fz={14}>Был текущий обед</Text>

          <Switch
            h={16}
            {...form.getInputProps('wasCurrentLunch', { type: 'checkbox' })}
          />
        </Group>
        <Group h="33px" justify="space-between">
          <Text fz={14}>Был поздний обед</Text>

          <Switch
            h={16}
            {...form.getInputProps('wasLatelyLunch', { type: 'checkbox' })}
          />
        </Group>
        <Group h="33px" justify="space-between">
          <Text fz={14}>Суточные</Text>

          <Switch
            h={16}
            {...form.getInputProps('dailyAllowance', { type: 'checkbox' })}
          />
        </Group>
        <Group h="33px" justify="space-between">
          <Text fz={14}>Смена в day-off</Text>

          <Switch
            {...form.getInputProps('dayOffShift', { type: 'checkbox' })}
          />
        </Group>

        <Group justify="space-between" h="33px">
          <Text fz={14}>Часы переработки</Text>

          <NumberInput
            variant="unstyled"
            size="sm"
            maw={56}
            min={0}
            rightSection={<Text c="#0594FA">ч</Text>}
            rightSectionWidth={10}
            placeholder="2000"
            thousandSeparator=" "
            radius="md"
            clampBehavior="strict"
            {...form.getInputProps('overtimeHours')}
          />
        </Group>

        <Group justify="space-between" h="33px">
          <Text fz={14}>Часы недосыпа</Text>

          <NumberInput
            variant="unstyled"
            size="sm"
            maw={56}
            min={0}
            rightSection={<Text c="#0594FA">ч</Text>}
            rightSectionWidth={10}
            placeholder="2000"
            thousandSeparator=" "
            radius="md"
            clampBehavior="strict"
            {...form.getInputProps('deprivationHoursSleep')}
          />
        </Group>

        <Group justify="space-between" h="33px">
          <Text fz={14}>Доп. услуги</Text>

          <NumberInput
            variant="unstyled"
            size="sm"
            maw={56}
            min={0}
            rightSection={<Text c="#0594FA">₽</Text>}
            rightSectionWidth={10}
            placeholder="2000"
            thousandSeparator=" "
            radius="md"
            clampBehavior="strict"
            {...form.getInputProps('additionalServices')}
          />
        </Group>
      </Card>
    </form>
  )
}
