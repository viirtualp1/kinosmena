import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Title, Container } from '@mantine/core'
import { ShiftData } from '@/types/Shift'
import { useFetch } from '@/hooks/useFetch'
import { useQuery } from '@/hooks/useQuery'
import { useTheme } from '@/hooks/useTheme'
import { useConfig } from '@/hooks/useConfig'
import { getPureShiftData } from '@/utils/shift.ts'
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

  const [shift, setShift] = useState<ShiftData | null>(null)

  const { data, isLoading } = useFetch<ShiftData>(`/shifts/${id}`, {
    params: {
      projectId: query.get('projectId'),
    },
  })

  useEffect(() => {
    if (!isLoading) {
      setShift(data)

      return
    }

    isCreating && setShift(getPureShiftData())
  }, [isCreating, data, isLoading])

  return (
    <div className="shift-page">
      <Container mt={24} pb={24}>
        <Title order={5} mb={24} fw={500}>
          Карточка смены
        </Title>

        <ShiftPageSkeleton visible={isLoading} />
        {shift?.project && <ProjectName name={shift.project} />}

        <ShiftForm
          shift={shift}
          isCreating={isCreating}
          isEditing={isEditing}
          isView={isView}
        />
      </Container>
    </div>
  )
}
