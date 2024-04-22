import { FC, useRef } from 'react'
import { Group, Textarea, TextInput } from '@mantine/core'
import { isNotEmpty, useForm } from '@mantine/form'
import { DateTimePicker, DateValue } from '@mantine/dates'
import { ProjectData } from '@/types/Project'
import { useConfig } from '@/hooks/useConfig'
import { useProjectIndicators } from '@/hooks/useProjectIndicators'
import { http } from '@/hooks/useAxios'
import { useDate } from '@/hooks/useDate'
import { SubmitButton } from '@/components/Shared/SubmitButton'
import { ProjectCalculatedIndicators } from '../ProjectCalculatedIndicators'

interface Props {
  project: ProjectData | null
  isView: boolean | undefined
  isCreating: boolean | undefined
  isEditing: boolean | undefined
}

interface FormValues {
  name: string
  description: string
  start_date: DateValue | undefined
  end_date: DateValue | undefined
  shift_duration: number | null
  rest_duration: number | null
  shift_rate: number | null
  overtime_rate: number | null
  non_sleep_rate: number | null
  current_lunch_rate: number | null
  late_lunch_rate: number | null
  per_diem: number | null
}

const textareaStyles = {
  input: {
    padding: 12,
  },
}

export const ProjectForm: FC<Props> = ({ project, isCreating, isView }) => {
  const { isDev } = useConfig()
  const { formatDateForDateInput } = useDate()

  const { indicators, updateIndicatorValue } = useProjectIndicators()
  const isLoading = useRef(false)
  const form = useForm<FormValues>({
    initialValues: {
      name: project?.name || '',
      description: project?.description || '',
      start_date: formatDateForDateInput(project?.start_date || ''),
      end_date: formatDateForDateInput(project?.end_date || ''),
      shift_duration: project?.shift_duration || null,
      rest_duration: project?.rest_duration || null,
      shift_rate: project?.shift_rate || null,
      overtime_rate: project?.overtime_rate || null,
      non_sleep_rate: project?.non_sleep_rate || null,
      current_lunch_rate: project?.current_lunch_rate || null,
      late_lunch_rate: project?.late_lunch_rate || null,
      per_diem: project?.per_diem || null,
    },
    validate: {
      name: isNotEmpty('Заполните поле'),
      shift_duration: isNotEmpty('Заполните поле'),
      shift_rate: isNotEmpty('Заполните поле'),
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
        ? await http.post(`/projects`, form.values)
        : await http.put(`/projects/${project?.id}`, form.values)
    } catch (err) {
      console.error(err)
      alert('Ошибка')
    } finally {
      isLoading.current = false
    }
  }

  return (
    <>
      <TextInput
        label="Название"
        labelProps={{ mb: 8 }}
        placeholder="Мой проект"
        mb={24}
        {...form.getInputProps('name')}
      />

      <Textarea
        label="Описание"
        labelProps={{ mb: 8 }}
        mb={24}
        placeholder="Путешествуйте между временем и жанрами, чтобы создавать свои собственные кинематографические истории в этом захватывающем приложении для смены жанров и персонажей в фильмах"
        rows={5}
        fz={14}
        styles={textareaStyles}
        {...form.getInputProps('description')}
      />

      <Group grow>
        <DateTimePicker
          valueFormat="DD.MM.YYYY HH:mm"
          label="Дата начала"
          labelProps={{ mb: '12px', fz: '14px' }}
          placeholder="17.03.2024 15:30"
          clearable
          size="md"
          mb="24px"
          defaultValue={form.values.start_date}
          disabled={isView || isLoading.current}
          onChange={(v) => (form.values.start_date = v)}
        />

        <DateTimePicker
          valueFormat="DD.MM.YYYY HH:mm"
          label="Дата окончания"
          labelProps={{ mb: '12px', fz: '14px' }}
          placeholder="20.03.2024 20:00"
          clearable
          size="md"
          mb="24px"
          defaultValue={form.values.end_date}
          disabled={isView || isLoading.current}
          onChange={(v) => (form.values.end_date = v)}
        />
      </Group>

      <ProjectCalculatedIndicators
        form={form}
        indicators={indicators}
        updateIndicatorValue={updateIndicatorValue}
      />

      {!isDev && <SubmitButton submit={submitForm} />}
    </>
  )
}
