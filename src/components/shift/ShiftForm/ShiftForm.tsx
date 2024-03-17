import { FC } from 'react'
import { Button, Card, Group, NumberInput, Switch } from '@mantine/core'
import { DateTimePicker } from '@mantine/dates'
import { useForm } from '@mantine/form'
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
  overtimeHours: string
  deprivationHoursSleep: string
  additionalServices: string
}

export const ShiftForm: FC<Props> = (props) => {
  const form = useForm<FormValues>({
    initialValues: {
      start: null,
      end: null,
      wasCurrentLunch: false,
      wasLatelyLunch: false,
      dayOffShift: false,
      overtimeHours: '',
      deprivationHoursSleep: '',
      additionalServices: '',
    },
  })

  const submitForm = form.onSubmit(() => {
    console.log('submit')
    console.log(form.values)
  })

  return (
    <form onSubmit={submitForm}>
      <Card
        shadow="sm"
        padding="sm"
        radius="md"
        withBorder
        className="shift-form__section"
      >
        <DateTimePicker
          valueFormat="DD.MM.YYYY HH:mm"
          placeholder="Начало"
          clearable
          variant="filled"
          size="md"
          radius="md"
          disabled={!props.isCreating}
          {...form.getInputProps('start')}
        />
      </Card>
      <Card shadow="sm" padding="sm" radius="md" withBorder>
        <DateTimePicker
          valueFormat="DD.MM.YYYY HH:mm"
          placeholder="Окончание"
          clearable
          variant="filled"
          size="md"
          radius="md"
          disabled={!props.isCreating}
          {...form.getInputProps('end')}
        />
      </Card>

      <Card
        className="shift-form__section"
        shadow="sm"
        padding="lg"
        radius="md"
        withBorder
      >
        <Group className="shift-form__field" justify="space-between">
          Был текущий обед?
          <Switch
            size="md"
            disabled={!props.isCreating}
            {...form.getInputProps('wasCurrentLunch', { type: 'checkbox' })}
          />
        </Group>
        <Group className="shift-form__field" justify="space-between">
          Был поздний обед?
          <Switch
            size="md"
            disabled={!props.isCreating}
            {...form.getInputProps('wasLatelyLunch', { type: 'checkbox' })}
          />
        </Group>
        <Group className="shift-form__field" justify="space-between">
          Смена в day-off?
          <Switch size="md" disabled={!props.isCreating} />
        </Group>
        <Group
          className="shift-form__field"
          justify="space-between"
          grow
          wrap="nowrap"
        >
          Часы переработки
          <NumberInput
            size="md"
            variant="filled"
            rightSection="ч"
            min={0}
            clampBehavior="strict"
            radius="md"
            disabled={!props.isCreating}
            {...form.getInputProps('overtimeHours')}
          />
        </Group>
        <Group className="shift-form__field" justify="space-between" grow>
          Часы недосыпа
          <NumberInput
            size="md"
            variant="filled"
            rightSection="ч"
            min={0}
            radius="md"
            clampBehavior="strict"
            disabled={!props.isCreating}
            {...form.getInputProps('deprivationHoursSleep')}
          />
        </Group>
        <Group justify="space-between" grow>
          Доп. услуги
          <NumberInput
            size="md"
            min={0}
            rightSection="₽"
            thousandSeparator=" "
            radius="md"
            clampBehavior="strict"
            variant="filled"
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
