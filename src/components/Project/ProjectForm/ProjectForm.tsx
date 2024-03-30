import { FC, useRef } from 'react'
import {
  Button,
  Text,
  Textarea,
  Collapse,
  TextInput,
  Container,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { useForm } from '@mantine/form'
import { ProjectData } from '@/types/Project'
import { useConfig } from '@/hooks/useConfig'
import { ArrowDown, ArrowUp } from '@/components/Icons'
import { SubmitButton } from '@/components/Shared/SubmitButton'

// TODO: Remove scss
import * as cl from './ProjectForm.module.scss'

interface Props {
  project: ProjectData
  isCreating: boolean | undefined
  isEditing: boolean | undefined
}

interface BlockData {
  label: string
  value: string | null
}

export const ProjectForm: FC<Props> = ({ project, isEditing, isCreating }) => {
  const { isDev } = useConfig()
  const [opened, { toggle }] = useDisclosure(false)

  // TODO: Form values, type (check ShiftForm for example)
  const form = useForm()

  const submitForm = form.onSubmit(() => {
    console.log('submit')
    console.log(form.values)
  })

  const blocksData = useRef<BlockData[]>([
    {
      label: 'Продолжительность смены',
      value: null,
    },
    {
      label: 'Шаг смены',
      value: null,
    },
    {
      label: 'Стоимость смены',
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
  ])

  return (
    <>
      <div style={{ padding: 'auto' }}>
        <div style={{ margin: '1rem 0' }}>
          <Text size="lg" fw={400}>
            Название
          </Text>
          <TextInput
            className={cl.border}
            size="md"
            radius="lg"
            placeholder="Мой проект"
          />
        </div>
        <div>
          <Text size="lg" fw={400}>
            Описание
          </Text>
          <Textarea
            className={cl.border}
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
              className={cl.border}
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
              className={cl.border}
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
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Button
            style={{ margin: '1rem 0' }}
            radius="lg"
            onClick={toggle}
            justify="space-between"
            fullWidth
            rightSection={!opened ? <ArrowDown /> : <ArrowUp />}
            color="gray"
            mt="md"
            className="cl.btn"
          >
            Рассчитать стоимость
          </Button>
          <Collapse in={opened}>
            {blocksData.current.map((block, index) => (
              <div
                key={index}
                style={{ display: 'flex', justifyContent: 'space-between' }}
              >
                <Text>
                  {block.label} {block.value}
                </Text>
                <Textarea
                  variant="outlined"
                  style={{ width: '60px', marginBottom: '0.5rem' }}
                  className={cl.border}
                  withAsterisk={index === 0 || index === 2}
                  cols={3}
                  radius="lg"
                  maxLength={3}
                  autosize
                  minRows={1}
                  maxRows={1}
                  placeholder="₽"
                  onChange={(e) => (block.value = e.currentTarget.value)}
                />
              </div>
            ))}
          </Collapse>
        </div>
      </div>

      {!isDev && <SubmitButton submit={submitForm} />}
    </>
  )
}
