import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Title } from '@mantine/core'
import { ProjectData } from '@/types/Project'
import { useTheme } from '@/hooks/useTheme'
import { useConfig } from '@/hooks/useConfig'
import { useFetch } from '@/hooks/useFetch'
import { ProjectView, ProjectForm } from '@/components/Project'
import { ProjectPageSkeleton } from './'

interface Props {
  isCreating?: boolean
  isEditing?: boolean
  isView?: boolean
  isArchive?: boolean
}

export const ProjectPage: FC<Props> = ({ isCreating, isEditing, isView }) => {
  const { isDev } = useConfig()
  const { id } = useParams()

  !isDev && useTheme()

  const { data: project, isLoading } = useFetch<ProjectData>(`/projects/${id}`)

  return (
    <div className="project-page">
      <Container mt={24} pb={24}>
        <Title fz={16} fw={500} mb="24px">
          Карточка проекта
        </Title>

        <ProjectPageSkeleton visible={isLoading} />
        {isView ? (
          project && <ProjectView project={project} />
        ) : (
          <ProjectForm
            project={project}
            isView={isView}
            isEditing={isEditing}
            isCreating={isCreating}
          />
        )}
      </Container>
    </div>
  )
}
