import { FC, useRef, useState } from 'react'
// import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Title, Container, Button } from '@mantine/core'
import { ShiftData } from '@/types/Shift'
// import { useFetch } from '@/hooks/useFetch'
// import { useQuery } from '@/hooks/useQuery'
import { useTheme } from '@/hooks/useTheme'
import { useRouterBack } from '@/hooks/useRouterBack'
import { ShiftForm } from '@/components/Shift'
import { ProjectName } from '@/components/Project/ProjectName'
import { ShiftPageSkeleton, getShiftData } from './'

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
  useTheme()
  useRouterBack()

  const navigate = useNavigate()
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
        <Button mb={24} color="black" onClick={() => navigate('/')}>
          Назад
        </Button>

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
