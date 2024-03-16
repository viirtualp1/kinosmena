import { useState } from 'react'
import { Card, Switch, Title } from '@mantine/core'
import { ShiftForm } from '@/components/shift'
import './ShiftPage.scss'

export function ShiftPage() {
  const [isCreating, setIsCreating] = useState(true)

  return (
    <div className="shift-page">
      <div className="container content">
        <Title order={3}>Карточка смены</Title>

        <Card
          className="shift-page__section"
          shadow="sm"
          padding="lg"
          radius="md"
          withBorder
        >
          Название проекта
        </Card>

        <Switch
          label="Создание"
          placeholder="Для дебага"
          checked={isCreating}
          onChange={(event) => setIsCreating(event.currentTarget.checked)}
        />

        <ShiftForm isCreating={isCreating} />
      </div>
    </div>
  )
}
