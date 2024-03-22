import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Card, Title } from '@mantine/core'
import { useFetch } from '@/hooks/useFetch'
import { ShiftData } from '@/types/Shift'
import { ShiftForm } from '@/components/Shift'
import './ShiftPage.scss'

export function ShiftPage() {
  const { id } = useParams()
  const [isCreating] = useState(true)

  const { data: shift } = useFetch<ShiftData | null>(`/shifts/${id}`, {
    errorKey: 'detail',
  })

  return (
    <div className="shift-page">
      <div className="container content">
        <Title order={3}>Карточка смены</Title>

        {shift && (
          <Card
            className="shift-page__section"
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
          >
            {shift.project}
          </Card>
        )}

        <ShiftForm isCreating={isCreating} />
      </div>
    </div>
  )
}
