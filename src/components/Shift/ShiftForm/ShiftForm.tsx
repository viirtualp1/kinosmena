import { FC, useRef } from 'react'
import { Card, Group, Switch, Text } from '@mantine/core'
import { DateTimePicker, DateValue } from '@mantine/dates'
import { isNotEmpty, useForm } from '@mantine/form'
import { ShiftData } from '@/types/Shift'
import { useConfig } from '@/hooks/useConfig'
import { useDate } from '@/hooks/useDate'
import { http } from '@/hooks/useAxios'
import { SubmitButton } from '@/components/Shared/SubmitButton'
import { useShiftFormStyles } from './useShiftFormStyles.ts'

interface Props {
  shift: ShiftData | null
  isView: boolean | undefined
  isCreating: boolean | undefined
  isEditing: boolean | undefined
}

interface FormValues {
  start: DateValue | undefined
  end: DateValue | undefined
  wasCurrentLunch: boolean
  wasLatelyLunch: boolean
  dailyAllowance: boolean
  isTodayDayOffShift: boolean
  isYesterdayDayOffShift: boolean
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
      start: formatDateForDateInput(shift?.start_date || ''),
      end: formatDateForDateInput(shift?.end_date || ''),
      wasCurrentLunch: Boolean(shift?.is_current_lunch),
      wasLatelyLunch: Boolean(shift?.is_late_lunch),
      dailyAllowance: Boolean(shift?.is_per_diem),
      isTodayDayOffShift: Boolean(shift?.is_today_day_off),
      isYesterdayDayOffShift: Boolean(shift?.is_yesterday_day_off),
      overtimeHours: shift?.overwork_hours || null,
      deprivationHoursSleep: shift?.non_sleep_hours || null,
      additionalServices: shift?.services || null,
    },
    validate: {
      start: isNotEmpty('Некорректная дата'),
      additionalServices: isNotEmpty('Поле обязательно к заполеннию'),
    },
  })

  const submitForm = async () => {
    const { errors, hasErrors } = form.validate()

    if (hasErrors) {
      form.setErrors(errors)
      return
    }

    isLoading.current = true

    try {
      isCreating
        ? await http.post(`/shifts`, form.values)
        : await http.put(`/shifts/${shift?.id}`, form.values)
    } catch (err) {
      console.error(err)
      alert('Ошибка')
    } finally {
      isLoading.current = false
    }
  }

  const Dates = () => (
    <Group grow gap={8} ta="center">
      {shift?.start_date && (
        <Card
          padding="12px 8px"
          h={66}
          fz={14}
          mb={24}
          withBorder
          styles={cardStyles}
        >
          Начало
          <Text fz={14} opacity={0.7}>
            {formatDate(shift.start_date, { withTime: true })}
          </Text>
        </Card>
      )}
      {shift?.end_date && (
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
        labelProps={{ mb: 12, fz: 14 }}
        placeholder="17.03.2024 15:30"
        clearable
        size="md"
        mb={24}
        defaultValue={form.values.start}
        disabled={isView || isLoading.current}
        onChange={(v) => (form.values.start = v)}
      />

      <DateTimePicker
        valueFormat="DD.MM.YYYY HH:mm"
        label="Окончание"
        labelProps={{ mb: 12, fz: 14 }}
        placeholder="20.03.2024 20:00"
        clearable
        size="md"
        mb={24}
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
          <Text fz={14}>Вчера был Day off?</Text>

          <Switch
            disabled={isView || isLoading.current}
            {...form.getInputProps('isYesterdayDayOffShift', {
              type: 'checkbox',
            })}
          />
        </Group>
        <Group justify="space-between">
          <Text fz={14}>Сегодня смена Day off?</Text>

          <Switch
            disabled={isView || isLoading.current}
            placeholder="test"
            {...form.getInputProps('isTodayDayOffShift', { type: 'checkbox' })}
          />
        </Group>
        {form.values.isTodayDayOffShift && (
          <Text mt={4} fz={12} c="grey">
            При работе в выходной день, все показатели рассчитываются х2
          </Text>
        )}

        {!isDev && <SubmitButton submit={submitForm} />}
      </Card>
    </form>
  )
}
