import { useParams } from 'react-router-dom'
import { Card, Title, Container } from '@mantine/core'
import { ShiftData } from '@/types/Shift'
import { useFetch } from '@/hooks/useFetch'
import { useQuery } from '@/hooks/useQuery'
import { ShiftForm, ShiftView } from '@/components/Shift'
import { ShiftPageSkeleton } from './ShiftPageSkeleton'
import { useShiftPageStyles } from './useShiftPageStyles'
import BookmarkIcon from '@/assets/images/icons/bookmark.svg'

interface Props {
  isCreating?: boolean
  isEditing?: boolean
  isView?: boolean
}

export function ShiftPage({ isCreating, isEditing, isView }: Props) {
  const { id } = useParams()
  const query = useQuery()

  const { data: shift, isLoading } = useFetch<ShiftData>(`/shifts/${id}`, {
    params: {
      projectId: query.get('projectId'),
    },
  })

  const { cardStyles } = useShiftPageStyles()

  return (
    <div className="shift-page">
      <Container mt="24px">
        <Title order={5} mb="24px" fw={500}>
          Карточка смены
        </Title>

        <ShiftPageSkeleton visible={isLoading?.current || !shift} />
        {isView && <ShiftView />}
        {shift && !isView && (
          <>
            <Card
              shadow="sm"
              padding="12px"
              radius="12px"
              styles={cardStyles}
              bg="#363A43"
              withBorder
              mb="24px"
            >
              <img src={BookmarkIcon} alt="bookmark" width={20} height={20} />
              Проект
              {shift.project}
            </Card>

            <ShiftForm isCreating={isCreating} isEditing={isEditing} />
          </>
        )}
      </Container>
    </div>
  )
}
