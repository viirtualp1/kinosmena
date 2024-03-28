import { FC, useEffect, useRef } from 'react'
import { Card, Group, NumberInput, Switch, Text } from '@mantine/core'
import { DateTimePicker, DateValue } from '@mantine/dates'
import { isNotEmpty, useForm } from '@mantine/form'
import { useMainButton } from '@tma.js/sdk-react'
import { useShiftFormStyles } from './useShiftFormStyles.ts'
import { ShiftData } from '@/types/Shift'
import { useConfig } from '@/hooks/useConfig/useConfig.ts'
import { useDate } from '@/hooks/useDate/useDate.ts'
import { http } from '@/hooks/useAxios'

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

const MainButton = ({ submit }: any) => {
  const mainButton = useMainButton()

  useEffect(() => {
    mainButton.setParams({
      text: 'Сохранить',
      textColor: '#0594FA',
    })

    return mainButton.on('click', submit)
  }, [mainButton, submit])

  return null
}

export const ShiftForm: FC<Props> = ({ isView, isCreating, shift }) => {
  const { isDev } = useConfig()

  const { cardStyles } = useShiftFormStyles()
  const { formatDate } = useDate()

  const isLoading = useRef(false)

  const form = useForm<FormValues>({
    initialValues: {
      start: formatDate(shift.start_date),
      end: formatDate(shift.end_date),
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
            {shift.start_date}
          </Text>
        </Card>
      )}
      {shift.end_date && (
        <Card padding="12px 20px" fz={14} withBorder styles={cardStyles}>
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
        <Group h="33px" justify="space-between">
          <Text fz={14}>Был текущий обед</Text>

          <Switch
            h={16}
            disabled={isView || isLoading.current}
            {...form.getInputProps('wasCurrentLunch', { type: 'checkbox' })}
          />
        </Group>
        <Group h="33px" justify="space-between">
          <Text fz={14}>Был поздний обед</Text>

          <Switch
            h={16}
            disabled={isView || isLoading.current}
            {...form.getInputProps('wasLatelyLunch', { type: 'checkbox' })}
          />
        </Group>
        <Group h="33px" justify="space-between">
          <Text fz={14}>Суточные</Text>

          <Switch
            h={16}
            disabled={isView || isLoading.current}
            {...form.getInputProps('dailyAllowance', { type: 'checkbox' })}
          />
        </Group>
        <Group h="33px" justify="space-between">
          <Text fz={14}>Смена в day-off</Text>

          <Switch
            disabled={isView || isLoading.current}
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
            clampBehavior="strict"
            readOnly={isView || isLoading.current}
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
            clampBehavior="strict"
            readOnly={isView || isLoading.current}
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
            clampBehavior="strict"
            readOnly={isView || isLoading.current}
            {...form.getInputProps('additionalServices')}
          />
        </Group>

        {!isDev && <MainButton submit={submitForm} />}
      </Card>
    </form>
  )
}
