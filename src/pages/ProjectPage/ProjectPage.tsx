import { FC, useRef, useState } from 'react'
import { Container, Title } from '@mantine/core'
import { ProjectData } from '@/types/Project'
import { getProjectData, ProjectPageSkeleton } from './'
import { ProjectView, ProjectForm } from '@/components/Project'

interface Props {
  isCreating?: boolean
  isEditing?: boolean
  isView?: boolean
}

export const ProjectPage: FC<Props> = ({ isCreating, isEditing, isView }) => {
  // TODO: для тестирования пока тестовые данные, в проде раскомментировать
  // const { id } = useParams()
  // const { data: project, isLoading } = useFetch<ProjectData>(`/projects/${id}`)
  // TODO: убрать на релизе MVP
  const isLoading = useRef(false)
  const [project] = useState<ProjectData | null>(getProjectData())

  return (
    <div className="project-page">
      <Container mt="24px">
        <Title fz="16px" fw={500} mb="24px">
          Карточка проекта
        </Title>

        <ProjectPageSkeleton visible={isLoading.current || !project} />
        {project && (
          <>
            {isView ? (
              <ProjectView project={project} />
            ) : (
              <ProjectForm
                project={project}
                isEditing={isEditing}
                isCreating={isCreating}
              />
            )}
          </>
        )}
      </Container>
    </div>
  )
}
