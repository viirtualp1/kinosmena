import { FC } from 'react'
import { Card, Group, NumberInput, Switch, Text } from '@mantine/core'
import { DateTimePicker } from '@mantine/dates'
import { isNotEmpty, useForm } from '@mantine/form'
import { MainButton } from '@tma.js/sdk-react'
import { useShiftFormStyles } from './useShiftFormStyles.ts'
import { ShiftData } from '@/types/Shift'

interface Props {
  isView: boolean | undefined
  isCreating: boolean | undefined
  isEditing: boolean | undefined
  shift: ShiftData
}

interface FormValues {
  start: string | null
  end: string | null
  wasCurrentLunch: boolean
  wasLatelyLunch: boolean
  dailyAllowance: boolean
  dayOffShift: boolean
  overtimeHours: number | null
  deprivationHoursSleep: number | null
  additionalServices: number | null
}

export const ShiftForm: FC<Props> = ({ isView, shift }) => {
  const { cardStyles } = useShiftFormStyles()

  const form = useForm<FormValues>({
    initialValues: {
      start: shift.start_date,
      end: shift.end_date,
      wasCurrentLunch: shift.is_current_lunch,
      wasLatelyLunch: shift.is_late_lunch,
      dailyAllowance: shift.is_per_diem,
      dayOffShift: shift.is_day_off,
      overtimeHours: shift.overwork_hours,
      deprivationHoursSleep: shift.non_sleep_hours,
      additionalServices: shift.services,
    },
    validate: {
      start: isNotEmpty('Некорректная дата'),
    },
  })

  const submitForm = form.onSubmit(async () => {
    console.log('submit')
    console.log(form.values)
  })

  const Dates = () => (
    <Group grow gap="8px" ta="center">
      {shift.start_date && (
        <Card
          padding="12px 8px"
          h={66}
          fz={14}
          mb="24px"
          radius="12px"
          withBorder
          styles={cardStyles}
        >
          Начало
          <Text fz={14} opacity={0.7}>
            {shift.start_date}
          </Text>
        </Card>
      )}
      {shift.end_date && (
        <Card
          padding="12px 20px"
          fz={14}
          radius="12px"
          withBorder
          styles={cardStyles}
        >
          Окончание
          <Text fz={14} opacity={0.7}>
            {shift.end_date}
          </Text>
        </Card>
      )}
    </Group>
  )

  const DatesFields = () => (
    <>
      <DateTimePicker
        valueFormat="DD.MM.YYYY HH:mm"
        label="Начало"
        labelProps={{ mb: '12px', fz: '14px' }}
        placeholder="17.03.2024 15:30"
        clearable
        size="md"
        radius="12px"
        mb="24px"
        disabled={isView}
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
        disabled={isView}
        {...form.getInputProps('end')}
      />
    </>
  )

  return (
    <form onSubmit={submitForm}>
      {isView ? <Dates /> : <DatesFields />}

      <Card padding="12px 20px" radius="12px" withBorder styles={cardStyles}>
        <Group h="33px" justify="space-between">
          <Text fz={14}>Был текущий обед</Text>

          <Switch
            h={16}
            disabled={isView}
            {...form.getInputProps('wasCurrentLunch', { type: 'checkbox' })}
          />
        </Group>
        <Group h="33px" justify="space-between">
          <Text fz={14}>Был поздний обед</Text>

          <Switch
            h={16}
            disabled={isView}
            {...form.getInputProps('wasLatelyLunch', { type: 'checkbox' })}
          />
        </Group>
        <Group h="33px" justify="space-between">
          <Text fz={14}>Суточные</Text>

          <Switch
            h={16}
            disabled={isView}
            {...form.getInputProps('dailyAllowance', { type: 'checkbox' })}
          />
        </Group>
        <Group h="33px" justify="space-between">
          <Text fz={14}>Смена в day-off</Text>

          <Switch
            disabled={isView}
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
            readOnly={isView}
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
            readOnly={isView}
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
            readOnly={isView}
            {...form.getInputProps('additionalServices')}
          />
        </Group>

        <MainButton type="submit" />
      </Card>
    </form>
  )
}
