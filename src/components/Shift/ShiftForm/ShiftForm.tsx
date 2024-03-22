import { FC } from 'react'
import { Button, Card, Group, NumberInput, Switch, Text } from '@mantine/core'
import { DateTimePicker } from '@mantine/dates'
import { isNotEmpty, useForm } from '@mantine/form'
import './ShiftForm.scss'

interface Props {
  isCreating: boolean
}

interface FormValues {
  start: Date | null
  end: Date | null
  wasCurrentLunch: boolean
  wasLatelyLunch: boolean
  dayOffShift: boolean
  overtimeHours: number
  deprivationHoursSleep: number
  additionalServices: number
}

const getForm = (): FormValues => {
  return {
    start: null,
    end: null,
    wasCurrentLunch: false,
    wasLatelyLunch: false,
    dayOffShift: false,
    overtimeHours: 0,
    deprivationHoursSleep: 0,
    additionalServices: 0,
  }
}

export const ShiftForm: FC<Props> = (props) => {
  const initialValues = getForm()

  const form = useForm<FormValues>({
    initialValues,
    validate: {
      start: isNotEmpty('Некорректная дата'),
      end: isNotEmpty('Некорректная дата'),
      overtimeHours: isNotEmpty('Поле обязательно к заполнению'),
      deprivationHoursSleep: isNotEmpty('Поле обязательно к заполнению'),
    },
  })

  const submitForm = form.onSubmit(() => {
    console.log('submit')
    console.log(form.values)
  })

  return (
    <form onSubmit={submitForm}>
      <DateTimePicker
        valueFormat="DD.MM.YYYY HH:mm"
        label="Дата начала"
        labelProps={{ mb: '12px', fz: '14px' }}
        placeholder="17.03.2024 15:30"
        clearable
        size="md"
        radius="md"
        mb="24px"
        disabled={!props.isCreating}
        {...form.getInputProps('start')}
      />

      <DateTimePicker
        valueFormat="DD.MM.YYYY HH:mm"
        label="Дата окончания"
        labelProps={{ mb: '12px', fz: '14px' }}
        placeholder="20.03.2024 20:00"
        clearable
        size="md"
        radius="md"
        mb="24px"
        disabled={!props.isCreating}
        {...form.getInputProps('end')}
      />

      <Card
        className="shift-form__section"
        shadow="sm"
        padding="lg"
        radius="md"
        withBorder
      >
        <Group className="shift-form__field" justify="space-between">
          <Text fz={14}>Был текущий обед?</Text>

          <Switch
            size="md"
            disabled={!props.isCreating}
            {...form.getInputProps('wasCurrentLunch', { type: 'checkbox' })}
          />
        </Group>
        <Group className="shift-form__field" justify="space-between">
          <Text fz={14}>Был поздний обед?</Text>

          <Switch
            size="md"
            disabled={!props.isCreating}
            {...form.getInputProps('wasLatelyLunch', { type: 'checkbox' })}
          />
        </Group>
        <Group className="shift-form__field" justify="space-between">
          <Text fz={14}>Смена в day-off?</Text>

          <Switch
            size="md"
            disabled={!props.isCreating}
            {...form.getInputProps('dayOffShift', { type: 'checkbox' })}
          />
        </Group>
        <Group className="shift-form__field" justify="space-between">
          <Text fz={14}>Суточные</Text>

          <Switch
            size="md"
            disabled={!props.isCreating}
            {...form.getInputProps('dayOffShift', { type: 'checkbox' })}
          />
        </Group>

        <Group justify="space-between" grow>
          <Text fz={14}>Доп. услуги</Text>

          <NumberInput
            variant="unstyled"
            size="md"
            min={0}
            rightSection="₽"
            placeholder="2000"
            thousandSeparator=" "
            radius="md"
            clampBehavior="strict"
            disabled={!props.isCreating}
            {...form.getInputProps('additionalServices')}
          />
        </Group>

        {props.isCreating && (
          <Button
            type="submit"
            className="shift-form__submit"
            size="md"
            radius="md"
          >
            Сформировать отчет
          </Button>
        )}
      </Card>
    </form>
  )
}
