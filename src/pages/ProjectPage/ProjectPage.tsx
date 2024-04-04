import { FC, useRef, useState } from 'react'
import { Button, Container, Title } from '@mantine/core'
import { ProjectData } from '@/types/Project'
import { getProjectData, ProjectPageSkeleton } from './'
import { ProjectView, ProjectForm } from '@/components/Project'
import { useNavigate } from 'react-router-dom'

interface Props {
  isCreating?: boolean
  isEditing?: boolean
  isView?: boolean
}

export const ProjectPage: FC<Props> = ({ isCreating, isEditing, isView }) => {
  const navigate = useNavigate()

  // TODO: для тестирования пока тестовые данные, в проде раскомментировать
  // const { id } = useParams()
  // const { data: project, isLoading } = useFetch<ProjectData>(`/projects/${id}`)
  // TODO: убрать на релизе MVP
  const isLoading = useRef(false)
  const [project] = useState<ProjectData | null>(getProjectData())

  return (
    <div className="project-page">
      <Container mt={24}>
        <Button mb={24} color="black" onClick={() => navigate('/')}>
          Назад
        </Button>

        <Title fz="24px" fw={500} mb="24px">
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
