import { FC, useCallback, useRef, useState } from 'react'
import { Group, Text, Textarea, TextInput } from '@mantine/core'
import { isNotEmpty, useForm } from '@mantine/form'
import { DateTimePicker } from '@mantine/dates'
import { FormValues, ProjectData } from '@/types/Project'
import { useConfig } from '@/hooks/useConfig'
import { useProjectIndicators } from '@/hooks/useProjectIndicators'
import { http } from '@/hooks/useAxios'
import { useDate } from '@/hooks/useDate'
import { SubmitButton } from '@/components/Shared/SubmitButton'
import { ErrorModal, useErrorModal } from '@/components/Modals/ErrorModal'
import { ProjectCalculatedIndicators } from '../ProjectCalculatedIndicators'
import { useProjectFormStyles } from './useProjectFormStyles.ts'

interface Props {
  project: ProjectData | null
  isView: boolean | undefined
  isCreating: boolean | undefined
  isEditing: boolean | undefined
}

export const ProjectForm: FC<Props> = ({ project, isCreating, isView }) => {
  const { isDev } = useConfig()
  const { formatDateForDateInput } = useDate()

  const { textareaStyles, dateTimeStyles, inputStyles } = useProjectFormStyles()
  const { indicators, updateIndicatorValue } = useProjectIndicators()
  const {
    isOpen: isErrorModalOpen,
    open: openErrorModal,
    close: closeErrorModal,
  } = useErrorModal()

  const [error, setError] = useState('')
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

  const handleSubmit = useCallback(async () => {
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
      form.setErrors((err as any).response.data)

      openErrorModal()
      setError(
        `Ошибка при ${isCreating ? 'создании' : 'редактировании'} проекта`,
      )
    } finally {
      isLoading.current = false
    }
  }, [isCreating, openErrorModal, form, project?.id])

  return (
    <>
      <TextInput
        label="Название"
        labelProps={{ mb: 8 }}
        placeholder="Введите текст"
        styles={inputStyles}
        mb={24}
        {...form.getInputProps('name')}
      />

      <Textarea
        label="Описание"
        placeholder="Введите текст"
        labelProps={{ mb: 8 }}
        mb={24}
        rows={5}
        fz={14}
        styles={textareaStyles}
        {...form.getInputProps('description')}
      />

      <Group grow>
        <DateTimePicker
          valueFormat="DD.MM.YYYY"
          label="Дата начала"
          labelProps={{ mb: 12, fz: 14 }}
          placeholder="17.03.2024"
          clearable
          size="md"
          mb={24}
          styles={dateTimeStyles}
          defaultValue={form.values.start_date}
          disabled={isView || isLoading.current}
          onChange={(v) => (form.values.start_date = v)}
        />

        <DateTimePicker
          valueFormat="DD.MM.YYYY"
          label="Дата окончания"
          labelProps={{ mb: 12, fz: 14 }}
          placeholder="20.03.2024"
          styles={dateTimeStyles}
          clearable
          size="md"
          mb={24}
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

      {!isDev && <SubmitButton submit={handleSubmit} />}

      <ErrorModal isOpen={isErrorModalOpen} close={closeErrorModal}>
        <Text>{error}</Text>
      </ErrorModal>
    </>
  )
}
