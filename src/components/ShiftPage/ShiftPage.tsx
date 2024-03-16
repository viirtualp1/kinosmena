import { Card, Group, Title, Input, Flex, Switch } from '@mantine/core'
import './ShiftPage.scss'

export function ShiftPage() {
  return (
    <div className="shift-page">
      <div className="container content">
        <Title order={3}>Карточка смены</Title>

        <Card
          className="shift-page__project-name"
          shadow="sm"
          padding="lg"
          radius="md"
          withBorder
        >
          Название проекта
        </Card>

        <Group grow preventGrowOverflow={false} wrap="nowrap">
          <Card shadow="sm" padding="sm" radius="md" withBorder>
            <div className="shift-page__date-title">Начало</div>

            <Input />
          </Card>
          <Card shadow="sm" padding="sm" radius="md" withBorder>
            <div className="shift-page__date-title">Окончание</div>

            <Input />
          </Card>
        </Group>

        <Card
          className="shift-page__project-name"
          shadow="sm"
          padding="lg"
          radius="md"
          withBorder
        >
          <Flex justify="space-between" align="center">
            <div className="shift-page__switch">
              Был текущий обед?
              <Switch size="md" />
            </div>
          </Flex>
        </Card>
      </div>
    </div>
  )
}
