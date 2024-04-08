import { FC, useRef } from 'react'
import { Text, Textarea, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { BlockData, ProjectData } from '@/types/Project'
import { useConfig } from '@/hooks/useConfig'
import { SubmitButton } from '@/components/Shared/SubmitButton'
import { ProjectCalculatedIndicators } from '../ProjectCalculatedIndicators'

interface Props {
  project: ProjectData
  isCreating: boolean | undefined
  isEditing: boolean | undefined
}

// TODO: Добавить в пропсы (внутри скобок) для использования: { project, isEditing, isCreating }
export const ProjectForm: FC<Props> = () => {
  const { isDev } = useConfig()

  // TODO: Form values, type (check ShiftForm for example)
  const form = useForm()

  const blocksData = useRef<BlockData[]>([
    {
      label: 'Продолжительность смены *',
      value: null,
    },
    {
      label: 'Шаг смены',
      value: null,
    },
    {
      label: 'Стоимость смены *',
      value: null,
    },
    {
      label: 'Стоимость переработки (час)',
      value: null,
    },
    {
      label: 'Стоимость недосыпа (час)',
      value: null,
    },
    {
      label: 'Стоимость текущего обеда',
      value: null,
    },
    {
      label: 'Стоимость позднего обеда',
      value: null,
    },
    {
      label: 'Суточные',
      value: null,
    },
    {
      label: 'Стоимость Day off (час)',
      value: null,
    },
  ])

  const submitForm = form.onSubmit(() => {
    console.log('submit')
    console.log(form.values)
  })

  return (
    <>
      <div style={{ padding: 'auto' }}>
        <div style={{ margin: '1rem 0' }}>
          <TextInput
            size="md"
            radius="lg"
            placeholder="Мой проект"
            {...form.getInputProps('name')}
          />
        </div>
        <div>
          <Text size="lg" fw={400}>
            Описание
          </Text>
          <Textarea
            size="md"
            radius="lg"
            rows={3}
            placeholder="Путешествие между временами..."
          />
        </div>
        {
          // TODO: use DateTimePicker for dates (check ShiftForm for example)
        }
        <div
          style={{
            marginBottom: '1rem',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              minWidth: '150px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <p style={{ display: 'flex', justifyContent: 'center' }}>
              Дата начала
            </p>
            <Textarea
              cols={10}
              radius="lg"
              maxLength={10}
              placeholder="дд.мм.гггг"
              autosize
              minRows={1}
              maxRows={1}
            />
          </div>
          <div
            style={{
              minWidth: '150px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <p style={{ display: 'flex', justifyContent: 'center' }}>
              Дата окончания
            </p>
            <Textarea
              cols={10}
              radius="lg"
              maxLength={10}
              placeholder="дд.мм.гггг"
              autosize
              minRows={1}
              maxRows={1}
            />
          </div>
        </div>
        {/*Две нижние кнопки */}
        {/*Две нижние кнопки */}
        {/*Две нижние кнопки */}
        <ProjectCalculatedIndicators indicators={blocksData} />
      </div>

      {!isDev && <SubmitButton submit={submitForm} />}
    </>
  )
}
