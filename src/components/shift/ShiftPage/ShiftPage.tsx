import { useState } from 'react'
import { Card, Title } from '@mantine/core'
import { ShiftForm } from '@/components/shift'
import './ShiftPage.scss'

export function ShiftPage() {
  const [isCreating] = useState(true)

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

        <ShiftForm isCreating={isCreating} />
      </div>
    </div>
  )
}
