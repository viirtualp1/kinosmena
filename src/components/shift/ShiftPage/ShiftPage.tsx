import { useEffect, useState } from 'react'
import { Card, Title } from '@mantine/core'
import { ShiftForm } from '@/components/shift'
import './ShiftPage.scss'

interface ProjectData {
  name: string
}

export function ShiftPage() {
  const [isCreating] = useState(true)
  const [project, setProject] = useState<ProjectData | null>(null)

  useEffect(() => {
    setProject({
      name: 'Проект',
    })
  }, [])

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
