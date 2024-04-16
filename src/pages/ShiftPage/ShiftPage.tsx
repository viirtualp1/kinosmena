import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { Title, Container } from '@mantine/core'
import { ShiftData } from '@/types/Shift'
import { useFetch } from '@/hooks/useFetch'
import { useQuery } from '@/hooks/useQuery'
import { useTheme } from '@/hooks/useTheme'
import { useConfig } from '@/hooks/useConfig'
import { ShiftForm } from '@/components/Shift'
import { ProjectName } from '@/components/Project/ProjectName'
import { ShiftPageSkeleton } from './'

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
  const { isDev } = useConfig()
  const { id } = useParams()
  const query = useQuery()

  !isDev && useTheme()

  const { data: shift, isLoading } = useFetch<ShiftData>(`/shifts/${id}`, {
    params: {
      projectId: query.get('projectId'),
    },
  })

  return (
    <div className="shift-page">
      <Container mt="24px" pb={24}>
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
