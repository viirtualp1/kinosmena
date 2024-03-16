import { Button, Title, Text, Input, Textarea, Collapse } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

export function ProjectCard() {
  const [opened, { toggle }] = useDisclosure(false)

  return (
    <div
      className="container content"
      style={{
        minHeight: '93vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
      }}
    >
      <div style={{ padding: 'auto' }}>
        <Title order={3}>Карточка проекта</Title>

        <div style={{ margin: '1rem 0' }}>
          <Text size="lg" fw={400}>
            Название
          </Text>
          <Input size="md" radius="lg" placeholder="Мой проект" />
        </div>
        <div style={{ marginBottom: '1rem' }}>
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

        <div style={{ marginBottom: '1rem' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '0.5rem',
            }}
          >
            <p>Дата начала</p>
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
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <p>Дата окончания</p>
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

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Button radius="lg" onClick={toggle}>
            Расчетать стоимость
          </Button>
          <Collapse in={opened}>
            <div>
              <Text>Продолжительность смены *</Text>
              <Textarea
                cols={10}
                radius="lg"
                maxLength={10}
                autosize
                minRows={1}
                maxRows={1}
              />
            </div>

            <Text>Шаг смены</Text>
            <Textarea
              cols={10}
              radius="lg"
              maxLength={10}
              autosize
              minRows={1}
              maxRows={1}
            />
            <Text>Стоимость смены *</Text>
            <Textarea
              cols={10}
              radius="lg"
              maxLength={10}
              autosize
              minRows={1}
              maxRows={1}
            />
            <Text>Стоимость переработки (час)</Text>
            <Textarea
              cols={10}
              radius="lg"
              maxLength={10}
              autosize
              minRows={1}
              maxRows={1}
            />
            <Text>Стоимость недосыпа (час)</Text>
            <Textarea
              cols={10}
              radius="lg"
              maxLength={10}
              autosize
              minRows={1}
              maxRows={1}
            />
            <Text>Стоимость текущего обеда</Text>
            <Textarea
              cols={10}
              radius="lg"
              maxLength={10}
              autosize
              minRows={1}
              maxRows={1}
            />
            <Text>Стоимость подзнего обеда</Text>
            <Textarea
              cols={10}
              radius="lg"
              maxLength={10}
              autosize
              minRows={1}
              maxRows={1}
            />
            <Text>Суточные</Text>
            <Textarea
              cols={10}
              radius="lg"
              maxLength={10}
              autosize
              minRows={1}
              maxRows={1}
            />
            <Text>Стоимость Day-off</Text>
            <Textarea
              cols={10}
              radius="lg"
              maxLength={10}
              autosize
              minRows={1}
              maxRows={1}
            />
            <Text>Дополнительные услуги</Text>
            <Textarea
              cols={10}
              radius="lg"
              maxLength={10}
              autosize
              minRows={1}
              maxRows={1}
            />
          </Collapse>

          <Button
            fullWidth
            radius="lg"
            style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}
          >
            Сохранить
          </Button>
        </div>
      </div>
    </div>
  )
}
