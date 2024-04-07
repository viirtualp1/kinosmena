import { FC, useRef } from 'react'
import { Button, Card, Group, NumberInput, Switch, Text } from '@mantine/core'
import { DateTimePicker, DateValue } from '@mantine/dates'
import { isNotEmpty, useForm } from '@mantine/form'
import { ShiftData } from '@/types/Shift'
import { useConfig } from '@/hooks/useConfig'
import { useDate } from '@/hooks/useDate'
import { http } from '@/hooks/useAxios'
import { SubmitButton } from '@/components/Shared/SubmitButton'
import { useShiftFormStyles } from './useShiftFormStyles.ts'

interface Props {
  isView: boolean | undefined
  isCreating: boolean | undefined
  isEditing: boolean | undefined
  shift: ShiftData
}

interface FormValues {
  start: DateValue | undefined
  end: DateValue | undefined
  wasCurrentLunch: boolean
  wasLatelyLunch: boolean
  dailyAllowance: boolean
  dayOffShift: boolean
  overtimeHours: number | null
  deprivationHoursSleep: number | null
  additionalServices: number | null
}

export const ShiftForm: FC<Props> = ({ isView, shift, isCreating }) => {
  const { isDev } = useConfig()

  const { cardStyles } = useShiftFormStyles()
  const { formatDateForDateInput, formatDate } = useDate()

  const isLoading = useRef(false)

  const form = useForm<FormValues>({
    initialValues: {
      start: formatDateForDateInput(shift.start_date),
      end: formatDateForDateInput(shift.end_date),
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
      additionalServices: isNotEmpty('Поле обязательно к заполеннию'),
    },
  })

  console.log(form.errors)

  const submitForm = form.onSubmit(async () => {
    isLoading.current = true

    try {
      isCreating
        ? await http.post(`/shifts/${shift.id}`, form.values)
        : await http.put(`/shifts/${shift.id}`, form.values)
    } catch (err) {
      console.error(err)
      alert('Ошибка')
    } finally {
      isLoading.current = false
    }
  })

  const Dates = () => (
    <Group grow gap="8px" ta="center">
      {shift.start_date && (
        <Card
          padding="12px 8px"
          h={66}
          fz={14}
          mb="24px"
          withBorder
          styles={cardStyles}
        >
          Начало
          <Text fz={14} opacity={0.7}>
            {formatDate(shift.start_date, { withTime: true })}
          </Text>
        </Card>
      )}
      {shift.end_date && (
        <Card padding="12px 20px" fz={14} withBorder styles={cardStyles}>
          Окончание
          <Text fz={14} opacity={0.7}>
            {formatDate(shift.end_date, { withTime: true })}
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
        mb="24px"
        defaultValue={form.values.start}
        disabled={isView || isLoading.current}
        onChange={(v) => (form.values.start = v)}
      />

      <DateTimePicker
        valueFormat="DD.MM.YYYY HH:mm"
        label="Окончание"
        labelProps={{ mb: '12px', fz: '14px' }}
        placeholder="20.03.2024 20:00"
        clearable
        size="md"
        mb="24px"
        defaultValue={form.values.end}
        disabled={isView || isLoading.current}
        onChange={(v) => (form.values.end = v)}
      />
    </>
  )

  return (
    <form>
      {isView ? <Dates /> : <DatesFields />}

      <Card padding="12px 20px" withBorder styles={cardStyles}>
        <Group justify="space-between" mb={12}>
          <Text fz={14}>Был текущий обед</Text>

          <Switch
            h={16}
            disabled={isView || isLoading.current}
            {...form.getInputProps('wasCurrentLunch', { type: 'checkbox' })}
          />
        </Group>
        <Group justify="space-between" mb={12}>
          <Text fz={14}>Был поздний обед</Text>

          <Switch
            h={16}
            disabled={isView || isLoading.current}
            {...form.getInputProps('wasLatelyLunch', { type: 'checkbox' })}
          />
        </Group>
        <Group justify="space-between" mb={12}>
          <Text fz={14}>Суточные</Text>

          <Switch
            h={16}
            disabled={isView || isLoading.current}
            {...form.getInputProps('dailyAllowance', { type: 'checkbox' })}
          />
        </Group>
        <Group justify="space-between" mb={12}>
          <Text fz={14}>Смена в day-off</Text>

          <Switch
            disabled={isView || isLoading.current}
            {...form.getInputProps('dayOffShift', { type: 'checkbox' })}
          />
        </Group>

        <Group justify="space-between" mb={6}>
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
            clampBehavior="strict"
            readOnly={isView || isLoading.current}
            {...form.getInputProps('overtimeHours')}
          />
        </Group>

        <Group justify="space-between" mb={6}>
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
            clampBehavior="strict"
            readOnly={isView || isLoading.current}
            {...form.getInputProps('deprivationHoursSleep')}
          />
        </Group>

        <Button onClick={() => submitForm()}>asd</Button>

        {!isDev && <SubmitButton submit={submitForm} />}
      </Card>
    </form>
  )
}
