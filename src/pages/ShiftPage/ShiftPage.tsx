import { useEffect, useState } from 'react'
import { Card, Title } from '@mantine/core'
import { useResource } from '@axios-use/react'
import { ShiftForm } from '@/components/Shift'
import './ShiftPage.scss'

interface ProjectData {
  name: string
}

export function ShiftPage() {
  const [isCreating] = useState(true)
  const [project, setProject] = useState<ProjectData | null>(null)

  const [{ data, error, isLoading }] = useResource(
    () => ({ url: `/shifts` }),
    [],
  )

  useEffect(() => {
    if (error) {
      console.error(error)
    }

    if (!isLoading && data) {
      setProject(data)
    }
  }, [data, error, isLoading])

  return (
    <div className="shift-page">
      <div className="container content">
        <Title order={3}>Карточка смены</Title>

        {project && (
          <Card
            className="shift-page__section"
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
          >
            {project.name}
          </Card>
        )}

        <ShiftForm isCreating={isCreating} />
      </div>
    </div>
  )
}
