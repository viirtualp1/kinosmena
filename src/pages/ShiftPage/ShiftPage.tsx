import { useRef } from 'react'
import { useParams } from 'react-router-dom'
import { Card, Title } from '@mantine/core'
import { useFetch } from '@/hooks/useFetch'
import { ShiftData } from '@/types/Shift'
import { ShiftForm } from '@/components/Shift'
import { ShiftPageSkeleton } from './ShiftPageSkeleton'
import './ShiftPage.scss'

export function ShiftPage() {
  const { id } = useParams()
  const isCreating = useRef(true)

  const { data: shift, isLoading } = useFetch<ShiftData | null>(`/shifts/${id}`)

  return (
    <div className="shift-page">
      <div className="container content">
        <Title order={3}>Карточка смены</Title>

        <ShiftPageSkeleton visible={isLoading || !shift} />
        {shift && (
          <>
            <Card
              className="shift-page__section"
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
            >
              {shift.project}
            </Card>
            <ShiftForm isCreating={isCreating.current} />
          </>
        )}
      </div>
    </div>
  )
}
