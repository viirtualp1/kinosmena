import { useRef, useState } from 'react'
// import { useParams } from 'react-router-dom'
import { Card, Title, Container } from '@mantine/core'
import { ShiftData } from '@/types/Shift'
// import { useFetch } from '@/hooks/useFetch'
// import { useQuery } from '@/hooks/useQuery'
import { ShiftForm } from '@/components/Shift'
import { BookmarkIcon } from '@/components/Icons'
import { ShiftPageSkeleton } from './ShiftPageSkeleton'
import { useShiftPageStyles } from './useShiftPageStyles'
import { getShiftData } from '@/pages/ShiftPage/mock.ts'

interface Props {
  isCreating?: boolean
  isEditing?: boolean
  isView?: boolean
}

export function ShiftPage({ isCreating, isEditing, isView }: Props) {
  // TODO: для тестирования пока тестовые данные, в проде раскомментировать
  // const { id } = useParams()
  // const query = useQuery()
  // const { data: shift, isLoading } = useFetch<ShiftData>(`/shifts/${id}`, {
  //   params: {
  //     projectId: query.get('projectId'),
  //   },
  // })
  // TODO: убрать на релизе MVP
  const isLoading = useRef(false)
  const [shift] = useState<ShiftData | null>(getShiftData())

  const { cardStyles } = useShiftPageStyles()

  return (
    <div className="shift-page">
      <Container mt="24px">
        <Title order={5} mb="24px" fw={500}>
          Карточка смены
        </Title>

        <ShiftPageSkeleton visible={isLoading?.current || !shift} />
        {shift && (
          <>
            <Card
              shadow="sm"
              padding="12px"
              styles={cardStyles}
              bg="#363A43"
              withBorder
              mb="24px"
            >
              <BookmarkIcon size={20} fill="#fff" />
              {shift.project}
            </Card>

            <ShiftForm
              shift={shift}
              isCreating={isCreating}
              isEditing={isEditing}
              isView={isView}
            />
          </>
        )}
      </Container>
    </div>
  )
}
