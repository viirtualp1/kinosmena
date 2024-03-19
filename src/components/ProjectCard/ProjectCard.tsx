import { Button, Title, Text, Input, Textarea, Collapse } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import * as cl from './ProjectCard.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
export function ProjectCard() {
  const [opened, { toggle }] = useDisclosure(false)

  const blocksData = [
    {
      label: 'Продолжительность смены *',
    },
    {
      label: 'Шаг смены',
    },
    {
      label: 'Стоимость смены *',
    },
    {
      label: 'Стоимость переработки (час)',
    },
    {
      label: 'Стоимость недосыпа (час)',
    },
    {
      label: 'Стоимость текущего обеда',
    },
  ]

  return (
    <div className={cl.container}>
      <div
        className={cl.content}
        style={{
          minHeight: '85vh',
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
            <Input className={cl.border} size="md" radius="lg" placeholder="Мой проект" />
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
              rightSection={
                !opened ? (
                  <FontAwesomeIcon icon={faArrowDown} />
                ) : (
                  <FontAwesomeIcon icon={faArrowUp} />
                )
              }
              color="gray"
              mt="md"
              className="cl.btn"
            >
              Расчетать стоимость
            </Button>
            <Collapse in={opened}>
              {blocksData.map((block, index) => (
                <div
                  key={index}
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <Text>{block.label}</Text>
                  <Textarea
                    variant="outlined"
                    style={{ width: '60px', marginBottom: '0.5rem'}}
                    className={cl.border}
                    cols={3}
                    radius="lg"
                    maxLength={3}
                    autosize
                    minRows={1}
                    maxRows={1}
                    placeholder="Час"
                  />
                </div>
              ))}
            </Collapse>
          </div>
        </div>
      </div>
      <div className={cl.footer}>
        <Button fullWidth className={cl.button}>
          Сохранить
        </Button>
      </div>
    </div>
  )
}
