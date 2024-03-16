import { FC } from 'react'
import { Button, Card, Group, NumberInput, Switch } from '@mantine/core'
import { DateTimePicker } from '@mantine/dates'
import './ShiftForm.scss'
import { useForm } from '@mantine/form'

interface Props {
  isCreating: boolean
}

interface FormValues {
  start: string
  end: string
  wasCurrentLunch: boolean
  wasLatelyLunch: boolean
  overtimeHours: string
  nosleepHours: string
  additionalServices: string
}

export const ShiftForm: FC<Props> = (props) => {
  const form = useForm<FormValues>({
    initialValues: {
      start: '',
      end: '',
      wasCurrentLunch: false,
      wasLatelyLunch: false,
      overtimeHours: '',
      nosleepHours: '',
      additionalServices: '',
    },
  })

  return (
    <>
      <form
        onSubmit={form.onSubmit(() => {
          console.log('submit')
          form.setValues({
            wasCurrentLunch: true,
          })
        })}
      >
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
              {...form.getInputProps('wasCurrentLunch')}
            />
          </Group>
          <Group className="shift-form__field" justify="space-between">
            Был поздний обед?
            <Switch size="md" disabled={!props.isCreating} />
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
              disabled={!props.isCreating}
            />
          </Group>
          <Group className="shift-form__field" justify="space-between" grow>
            Часы недосыпа
            <NumberInput
              size="md"
              variant="filled"
              rightSection="ч"
              min={0}
              clampBehavior="strict"
              disabled={!props.isCreating}
            />
          </Group>
          <Group justify="space-between" grow>
            Доп. услуги
            <NumberInput
              size="md"
              min={0}
              rightSection="₽"
              thousandSeparator=" "
              clampBehavior="strict"
              variant="filled"
              disabled={!props.isCreating}
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
    </>
  )
}
