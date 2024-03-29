import { FC, useRef, useState } from 'react'
// import { useParams } from 'react-router-dom'
import { Title, Container } from '@mantine/core'
import { ShiftData } from '@/types/Shift'
// import { useFetch } from '@/hooks/useFetch'
// import { useQuery } from '@/hooks/useQuery'
import { ShiftForm } from '@/components/Shift'
import { ShiftPageSkeleton, getShiftData } from './'
import { ProjectName } from '@/components/Project/ProjectName/ProjectName.tsx'

interface Props {
  isCreating?: boolean
  isEditing?: boolean
  isView?: boolean
}

export const ShiftPage: FC<Props> = ({
  isCreating,
  isEditing,
  isView,
}: Props) => {
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

  return (
    <div className="shift-page">
      <Container mt="24px">
        <Title order={5} mb="24px" fw={500}>
          Карточка смены
        </Title>

        <ShiftPageSkeleton visible={isLoading?.current || !shift} />
        {shift && (
          <>
            <ProjectName name={shift.project} />

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
