import { FC, useRef } from 'react'
import { Button, Text, Textarea, Collapse, TextInput, Container, Grid, NumberInput, Group } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { useForm } from '@mantine/form'
import { ProjectData } from '@/types/Project'
import { useConfig } from '@/hooks/useConfig'
import { ArrowDown, ArrowUp } from '@/components/Icons'
import { SubmitButton } from '@/components/Shared/SubmitButton'

interface Props {
  project: ProjectData
  isView: boolean | undefined
  isCreating: boolean | undefined
  isEditing: boolean | undefined
}

interface BlockData {
  label: string
  value: string | null
}

// TODO: Добавить в пропсы (внутри скобок) для использования: { project, isEditing, isCreating }
export const ProjectForm: FC<Props> = ({isView}) => {
  const { isDev } = useConfig()
  const [opened, { toggle }] = useDisclosure(false)
  const isLoading = useRef(false)
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
    }
  ])

  return (
    <>
        <Container p="0">
          <TextInput
            labelProps={{ mb: '12px' }}
            size="md"
            radius="lg"
            label="Название проекта"
            withAsterisk
            placeholder="Мой проект"
          />
        </Container>
        <Container p="0" m="1rem 0">
          <Textarea
            labelProps={{ mb: '12px' }}
            label="Описание проекта"
            size="md"
            radius="lg"
            rows={3}
            withAsterisk
            placeholder="Путешествие между временами..."
          />
        </Container>
        {
          // TODO: use DateTimePicker for dates (check ShiftForm for example)
        }
        <Grid justify="space-around" align="flex-start">
          <Grid.Col span="auto">
            <Textarea
              labelProps={{ mb: '12px' }}
              label="Дата начала"
              cols={10}
              radius="lg"
              maxLength={10}
              placeholder="дд.мм.гггг"
              autosize
              minRows={1}
              maxRows={1}
            />
          </Grid.Col>
          <Grid.Col span="auto">
            <Textarea
              labelProps={{ mb: '12px' }}
              label="Дата конца"
              cols={10}
              radius="lg"
              maxLength={10}
              placeholder="дд.мм.гггг"
              autosize
              minRows={1}
              maxRows={1}
            />
          </Grid.Col>
        </Grid>
        {/*Две нижние кнопки */}
        {/*Две нижние кнопки */}
        {/*Две нижние кнопки */}
        <Container p="0">
          <Button
            h="2.5rem"
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
            {blocksData.current.map((block) => (
              <>
              <Group justify="space-between" mb={6}>
                <Text fz={14}>{block.label}</Text>

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
                  {...form.getInputProps('имя поля')}
                />
              </Group>
            {
              form.errors.additionalSevives && (
                <Text>{form.errors.additionalSevives}</Text>
              )}
              </>
            ))}
          </Collapse>
        </Container>

      {!isDev && <SubmitButton submit={submitForm} />}
    </>
  )
}
