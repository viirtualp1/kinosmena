import { FC } from 'react'
import { Text, Textarea, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { ProjectData } from '@/types/Project'
import { useConfig } from '@/hooks/useConfig'
import { useProjectIndicators } from '@/hooks/useProjectIndicators'
import { SubmitButton } from '@/components/Shared/SubmitButton'
import { ProjectCalculatedIndicators } from '../ProjectCalculatedIndicators'

interface Props {
  project: ProjectData | null
  isCreating: boolean | undefined
  isEditing: boolean | undefined
}

interface FormValues {}

export const ProjectForm: FC<Props> = () => {
  const { isDev } = useConfig()

  const indicatorsData = useProjectIndicators()
  const form = useForm<FormValues>({
    initialValues: {},
    validate: {},
  })

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

        <ProjectCalculatedIndicators indicators={indicatorsData} />
      </div>

      {!isDev && <SubmitButton submit={submitForm} />}
    </>
  )
}
